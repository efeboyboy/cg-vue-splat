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

      const goBack = () => {
        showSplat.value = false;
        loadingStarted.value = false;
        errorMessage.value = "";
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
        goBack,
      };
    },
  };
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <img src="/favicon.svg" alt="CG Vue Splat Logo" />
          <h1>CG Vue Splat</h1>
        </div>
        <div class="links">
          <a
            href="https://github.com/efeboyboy/cg-vue-splat"
            target="_blank"
            class="github-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/cg-vue-splat"
            target="_blank"
            class="npm-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M0 0v24h24v-24h-24zm6.8 6.8h10.4v10.4h-10.4v-10.4zm5.2 5.2h-2.6v-2.6h2.6v2.6zm5.2 5.2v-10.4h-2.6v10.4h2.6z"
              />
            </svg>
            NPM
          </a>
        </div>
      </div>
    </header>

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
        <div class="splash-content">
          <h2>Vue 3 Gaussian Splats Renderer</h2>
          <p>View 3D point cloud models in your Vue applications</p>
          <div class="button-container">
            <button class="load-button" @click="loadLocalSplat">
              Load Local 3D Model
            </button>
            <button class="load-button external" @click="loadExternalSplat">
              Load External 3D Model
            </button>
          </div>
        </div>
      </div>

      <button
        v-if="showSplat && !isLoading"
        @click="goBack"
        class="back-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </button>

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
        <button @click="goBack" class="error-back-button">Go Back</button>
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
    font-family: "Inter", "Segoe UI", Roboto, Arial, sans-serif;
    background-color: #121212;
    color: #e0e0e0;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .app {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .header {
    background-color: #1e1e1e;
    color: #e0e0e0;
    padding: 12px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    z-index: 100;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo img {
    width: 36px;
    height: 36px;
  }

  .logo h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: #41b883;
  }

  .links {
    display: flex;
    gap: 16px;
  }

  .github-link,
  .npm-link {
    display: flex;
    align-items: center;
    gap: 6px;
    color: white;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.2s ease;
    font-size: 0.9rem;
  }

  .github-link {
    background-color: #333;
  }

  .npm-link {
    background-color: #333;
    color: #cb3837;
  }

  .github-link:hover,
  .npm-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .viewer-container {
    flex: 1;
    position: relative;
    overflow: hidden;
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: rgba(30, 30, 30, 0.7);
    color: #e0e0e0;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 15;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
    border: 1px solid rgba(65, 184, 131, 0.5);
  }

  .back-button:hover {
    background-color: rgba(65, 184, 131, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .error-back-button {
    margin-top: 12px;
    background-color: #41b883;
    color: #121212;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: block;
    width: 100%;
    transition: all 0.2s ease;
  }

  .error-back-button:hover {
    background-color: #4fc08d;
  }

  .splash-content {
    text-align: center;
    color: #e0e0e0;
    padding: 40px;
    border-radius: 8px;
    background-color: rgba(30, 30, 30, 0.8);
    backdrop-filter: blur(10px);
    max-width: 600px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  }

  .splash-content h2 {
    margin: 0 0 10px 0;
    font-size: 2rem;
    font-weight: 600;
    color: #41b883;
  }

  .splash-content p {
    margin: 0 0 30px 0;
    opacity: 0.8;
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .load-button {
    background-color: #41b883;
    border: none;
    color: #121212;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin: 10px 2px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .load-button:hover {
    background-color: #4fc08d;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .load-button.external {
    background-color: #333;
    color: #e0e0e0;
    border: 1px solid #41b883;
  }

  .load-button.external:hover {
    background-color: #414141;
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
    padding: 16px 20px;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    z-index: 20;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
    min-width: 280px;
  }

  .loading-message {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.8;
  }

  .loading-message.note {
    color: #41b883;
    font-style: italic;
  }

  .viewer-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    color: #e0e0e0;
    gap: 15px;
    background-color: rgba(18, 18, 18, 0.9);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    font-family: "Inter", "Segoe UI", Roboto, Arial, sans-serif;
  }

  .loader {
    border: 4px solid #333;
    border-top: 4px solid #41b883;
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

  @media (min-width: 768px) {
    .button-container {
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
