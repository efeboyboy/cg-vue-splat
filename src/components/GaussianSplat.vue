<template>
  <div ref="containerWrapper" class="gaussian-splat-container">
    <div v-if="loading" class="loading-overlay">Loading splat...</div>
    <div v-if="errorMsg" class="error-overlay">{{ errorMsg }}</div>
  </div>
</template>

<script>
  import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
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
        default: () => [0, 1, 0],
      },
      // Viewer options
      showLoadingUI: {
        type: Boolean,
        default: true,
      },
      splatAlphaRemovalThreshold: {
        type: Number,
        default: 1,
      },
      selfDrivenMode: {
        type: Boolean,
        default: true,
      },
      gpuAcceleratedSort: {
        type: Boolean,
        default: true,
      },
      // Additional props can be added as needed
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
            selfDrivenMode: props.selfDrivenMode,
            gpuAcceleratedSort: props.gpuAcceleratedSort,
            sharedMemoryForWorkers: false, // Disable SharedArrayBuffer usage for compatibility
          });

          console.log("Loading splat file:", props.src);

          // Load the splat file using the correct API method
          await viewer.addSplatScene(props.src, {
            splatAlphaRemovalThreshold: props.splatAlphaRemovalThreshold,
            showLoadingUI: props.showLoadingUI,
            position: props.position,
            rotation: props.rotation,
            scale: props.scale,
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

      // Initialize on mount
      onMounted(() => {
        console.log("Component mounted, initializing viewer");
        // Use a delay to ensure the DOM is fully mounted
        setTimeout(initViewer, 300);
      });

      // Clean up on unmount
      onBeforeUnmount(() => {
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
    position: relative;
    overflow: hidden;
    min-height: 400px;
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
