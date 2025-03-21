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

      const loadSplat = () => {
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
        loadSplat,
        loadingStarted,
        onSplatLoaded,
        onSplatError,
      };
    },
  };
</script>

<template>
  <div class="app">
    <header>
      <h1>Bonsai 3D Gaussian Splat</h1>
      <button v-if="!loadingStarted" class="load-button" @click="loadSplat">
        Load 3D Model
      </button>
      <div v-if="errorMessage" class="header-error">{{ errorMessage }}</div>
    </header>

    <div class="viewer-container">
      <GaussianSplat
        v-if="showSplat"
        src="/splats/bonsai.splat"
        :cameraPosition="[0, 1.5, 5]"
        :cameraLookAt="[0, 0, 0]"
        :cameraUp="[0, 1, 0]"
        :showLoadingUI="true"
        :selfDrivenMode="true"
        :gpuAcceleratedSort="false"
        :splatAlphaRemovalThreshold="5"
        @loaded="onSplatLoaded"
        @error="onSplatError"
      />
      <div v-if="!loadingStarted" class="placeholder">
        Click the "Load 3D Model" button to view the Bonsai
      </div>
      <div v-if="isLoading" class="viewer-loading">
        <div class="loader"></div>
        <div>Loading 3D Gaussian Splat...</div>
        <div class="loading-message">This may take a few moments</div>
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
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    font-family: Arial, sans-serif;
  }

  header {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    text-align: center;
  }

  .header-error {
    background-color: rgba(204, 0, 0, 0.8);
    color: white;
    padding: 8px;
    border-radius: 4px;
    margin-top: 10px;
    display: inline-block;
  }

  .load-button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 2px;
    cursor: pointer;
    border-radius: 4px;
  }

  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 18px;
  }

  .viewer-container {
    flex: 1;
    position: relative;
    overflow: hidden;
    background-color: #222;
    display: flex;
    min-height: 500px;
  }

  .loading-message {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.8;
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
    background-color: #222;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
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
