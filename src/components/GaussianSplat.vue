<template>
  <div ref="containerWrapper" class="gaussian-splat-container">
    <div v-if="loading" class="loading-overlay">Loading splat...</div>
    <div v-if="errorMsg" class="error-overlay">{{ errorMsg }}</div>
  </div>
</template>

<script>
  import { ref, onMounted, onBeforeUnmount, watch } from "vue";
  import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

  export default {
    name: "GaussianSplat",
    props: {
      // Required props
      src: {
        type: String,
        required: true,
      },
      // Optional positioning props
      position: {
        type: Array,
        default: () => [0, 0, 0],
      },
      rotation: {
        type: Array,
        default: () => [0, 0, 0, 1], // Quaternion [x, y, z, w]
      },
      scale: {
        type: Array,
        default: () => [1, 1, 1],
      },
      // Camera props
      cameraPosition: {
        type: Array,
        default: () => [0, 0, 3],
      },
      cameraLookAt: {
        type: Array,
        default: () => [0, 0, 0],
      },
      cameraUp: {
        type: Array,
        default: () => [0, -1, 0],
      },
      fov: {
        type: Number,
        default: 45,
      },
      // Viewer options
      showLoadingUI: {
        type: Boolean,
        default: true,
      },
      splatAlphaRemovalThreshold: {
        type: Number,
        default: 5,
      },
      selfDrivenMode: {
        type: Boolean,
        default: true,
      },
      gpuAcceleratedSort: {
        type: Boolean,
        default: false,
      },
      // Additional optional props based on documentation
      enableSIMDInSort: {
        type: Boolean,
        default: true,
      },
      sharedMemoryForWorkers: {
        type: Boolean,
        default: false,
      },
      integerBasedSort: {
        type: Boolean,
        default: true,
      },
      halfPrecisionCovariancesOnGPU: {
        type: Boolean,
        default: false,
      },
      antialiased: {
        type: Boolean,
        default: true,
      },
      dynamicScene: {
        type: Boolean,
        default: false,
      },
      progressiveLoad: {
        type: Boolean,
        default: true,
      },
      focusDistance: {
        type: Number,
        default: 1.2,
      },
      sphericalHarmonicsDegree: {
        type: Number,
        default: 0,
        validator: (value) => [0, 1, 2].includes(value),
      },
      maxScreenSpaceSplatSize: {
        type: Number,
        default: 2048,
      },
      kernel2DSize: {
        type: Number,
        default: 0.5,
      },
      autoRotate: {
        type: Boolean,
        default: false,
      },
      autoRotateSpeed: {
        type: Number,
        default: 0.5,
      },
      showFps: {
        type: Boolean,
        default: false,
      },
      responsive: {
        type: Boolean,
        default: true,
      },
      enableControls: {
        type: Boolean,
        default: true,
      },
    },
    emits: ["loaded", "error"],
    setup(props, { emit }) {
      const containerWrapper = ref(null);
      const loading = ref(false);
      const errorMsg = ref("");
      let viewer = null;

      // Initialize the viewer and load the splat file
      const initViewer = async () => {
        if (!containerWrapper.value) {
          emit("error", new Error("Container not found"));
          return;
        }

        loading.value = true;
        errorMsg.value = "";

        try {
          // Clean up any existing viewer
          cleanupViewer();

          console.log("Initializing viewer with src:", props.src);
          console.log(
            "Container dimensions:",
            containerWrapper.value.clientWidth,
            "x",
            containerWrapper.value.clientHeight
          );

          // Create viewer with props
          viewer = new GaussianSplats3D.Viewer({
            rootElement: containerWrapper.value,
            cameraUp: props.cameraUp,
            initialCameraPosition: props.cameraPosition,
            initialCameraLookAt: props.cameraLookAt,
            fov: props.fov,
            selfDrivenMode: props.selfDrivenMode,
            gpuAcceleratedSort: props.gpuAcceleratedSort,
            sharedMemoryForWorkers: props.sharedMemoryForWorkers,
            enableSIMDInSort: props.enableSIMDInSort,
            integerBasedSort: props.integerBasedSort,
            halfPrecisionCovariancesOnGPU: props.halfPrecisionCovariancesOnGPU,
            antialiased: props.antialiased,
            dynamicScene: props.dynamicScene,
            focalAdjustment: props.focusDistance,
            sphericalHarmonicsDegree: props.sphericalHarmonicsDegree,
            kernel2DSize: props.kernel2DSize,
            maxScreenSpaceSplatSize: props.maxScreenSpaceSplatSize,
            autoRotate: props.autoRotate,
            autoRotateSpeed: props.autoRotateSpeed,
            showFps: props.showFps,
            responsive: props.responsive,
            controls: props.enableControls,
          });

          // Ensure the canvas fills the container
          if (viewer.threeRenderer && viewer.threeRenderer.domElement) {
            viewer.threeRenderer.domElement.style.width = "100%";
            viewer.threeRenderer.domElement.style.height = "100%";
            viewer.threeRenderer.domElement.style.display = "block";
          }

          console.log("Loading splat file:", props.src);

          // Handle both local and remote URLs
          const splatSrc = props.src;

          // Load the splat file using the correct API method
          await viewer.addSplatScene(splatSrc, {
            splatAlphaRemovalThreshold: props.splatAlphaRemovalThreshold,
            showLoadingUI: props.showLoadingUI,
            position: props.position,
            rotation: props.rotation,
            scale: props.scale,
            progressiveLoad: props.progressiveLoad,
          });

          console.log("Starting viewer");

          // Start the viewer
          viewer.start();

          console.log("Viewer started successfully");

          // Emit loaded event after a brief delay to ensure DOM is fully updated
          setTimeout(() => {
            if (containerWrapper.value && containerWrapper.value.isConnected) {
              emit("loaded");
              loading.value = false;
            }
          }, 100);
        } catch (error) {
          console.error("Error initializing GaussianSplats3D viewer:", error);
          errorMsg.value = `Error: ${error.message}`;
          cleanupViewer(); // Clean up on error
          emit("error", error);
          loading.value = false;
        }
      };

      // Clean up function to properly remove viewer
      const cleanupViewer = () => {
        if (viewer) {
          try {
            if (viewer.dispose) {
              viewer.dispose();
            } else if (viewer.stop) {
              viewer.stop();
            }
          } catch (e) {
            console.warn("Error disposing viewer:", e);
          }
          viewer = null;
        }
      };

      let resizeObserver = null;

      // Initialize on mount
      onMounted(() => {
        console.log("Component mounted, initializing viewer");
        // Use a delay to ensure the DOM is fully mounted
        setTimeout(initViewer, 300);

        // Add resize observer to handle container resizing
        resizeObserver = new ResizeObserver(() => {
          if (viewer && viewer.threeRenderer) {
            const width = containerWrapper.value.clientWidth;
            const height = containerWrapper.value.clientHeight;
            viewer.setSize(width, height);
          }
        });

        if (containerWrapper.value) {
          resizeObserver.observe(containerWrapper.value);
        }
      });

      // Clean up on unmount
      onBeforeUnmount(() => {
        if (resizeObserver) {
          resizeObserver.disconnect();
          resizeObserver = null;
        }
        cleanupViewer();
      });

      // Watch for changes to src to reload
      watch(
        () => props.src,
        (newSrc) => {
          console.log("src changed to:", newSrc);
          // Use a delay to prevent conflicts with ongoing DOM updates
          setTimeout(initViewer, 300);
        }
      );

      // Watch for position changes
      watch(
        () => props.position,
        (newPosition) => {
          try {
            if (viewer && viewer.splatMesh) {
              viewer.splatMesh.position.fromArray(newPosition);
            }
          } catch (error) {
            console.error("Error updating position:", error);
          }
        },
        { deep: true }
      );

      // Watch for rotation changes
      watch(
        () => props.rotation,
        (newRotation) => {
          try {
            if (viewer && viewer.splatMesh) {
              viewer.splatMesh.quaternion.fromArray(newRotation);
            }
          } catch (error) {
            console.error("Error updating rotation:", error);
          }
        },
        { deep: true }
      );

      // Watch for scale changes
      watch(
        () => props.scale,
        (newScale) => {
          try {
            if (viewer && viewer.splatMesh) {
              viewer.splatMesh.scale.fromArray(newScale);
            }
          } catch (error) {
            console.error("Error updating scale:", error);
          }
        },
        { deep: true }
      );

      return {
        containerWrapper,
        loading,
        errorMsg,
      };
    },
  };
</script>

<style scoped>
  .gaussian-splat-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: block;
  }

  .loading-overlay,
  .error-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 16px;
    z-index: 100;
  }

  .error-overlay {
    color: #ff5555;
  }
</style>
