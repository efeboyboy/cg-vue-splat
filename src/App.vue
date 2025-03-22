<script>
  import { ref } from "vue";
  import GaussianSplat from "./components/GaussianSplat.vue";

  export default {
    name: "App",
    components: {
      GaussianSplat,
    },
    setup() {
      const isLoading = ref(false);
      const errorMessage = ref("");
      const showSplat = ref(false);
      const loadingStarted = ref(false);
      const useExternalUrl = ref(false);
      const splatSrc = ref("/splats/bonsai.splat");

      const loadLocalSplat = () => {
        splatSrc.value = "/splats/bonsai.splat";
        useExternalUrl.value = false;
        isLoading.value = true;
        showSplat.value = true;
        loadingStarted.value = true;
      };

      const loadExternalSplat = () => {
        splatSrc.value =
          "https://storage.googleapis.com/reefos-3d/splats/reef-full.splat";
        useExternalUrl.value = true;
        isLoading.value = true;
        showSplat.value = true;
        loadingStarted.value = true;
      };

      const onSplatLoaded = () => {
        console.log("Splat loaded successfully!");
        isLoading.value = false;
      };

      const onSplatError = (error) => {
        console.error("Error loading splat:", error);
        errorMessage.value = `Failed to load: ${error.message}`;
        isLoading.value = false;
      };

      return {
        isLoading,
        errorMessage,
        showSplat,
        loadLocalSplat,
        loadExternalSplat,
        loadingStarted,
        splatSrc,
        useExternalUrl,
        onSplatLoaded,
        onSplatError,
      };
    },
  };
</script>

<template>
  <div class="app">
    <div class="viewer-container">
      <GaussianSplat
        v-if="showSplat"
        :src="splatSrc"
        :cameraPosition="[0, 0, 3]"
        :cameraLookAt="[0, 0, 0]"
        :cameraUp="[0, -1, 0]"
        :fov="45"
        :maxScreenSpaceSplatSize="2048"
        :selfDrivenMode="true"
        autoRotate
        :autoRotateSpeed="0.5"
        :showFps="true"
        :responsive="true"
        :enableControls="true"
        @loaded="onSplatLoaded"
        @error="onSplatError"
      />

      <div v-if="!loadingStarted" class="placeholder">
        <div class="button-container">
          <button class="load-button" @click="loadLocalSplat">
            Load Local 3D Model
          </button>
          <button class="load-button external" @click="loadExternalSplat">
            Load External 3D Model
          </button>
        </div>
      </div>

      <div v-if="isLoading" class="viewer-loading">
        <div class="loader"></div>
        <div>Loading 3D Gaussian Splat...</div>
        <div class="loading-message">This may take a few moments</div>
        <div v-if="useExternalUrl" class="loading-message note">
          Note: External URLs require proper CORS headers
        </div>
      </div>

      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<style>
  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .app {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .viewer-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .load-button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 10px 2px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .load-button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  .load-button.external {
    background-color: #2196f3;
  }

  .load-button.external:hover {
    background-color: #0b7dda;
  }

  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }

  .error-message {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(204, 0, 0, 0.8);
    color: white;
    padding: 12px 20px;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    z-index: 20;
  }

  .loading-message {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.8;
  }

  .loading-message.note {
    color: #ffeb3b;
    font-style: italic;
  }

  .viewer-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    color: white;
    gap: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    font-family: Arial, sans-serif;
  }

  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
