import GaussianSplat from "../components/GaussianSplat.vue";

// Export components individually
export { GaussianSplat };

// Export as default Vue plugin
export default {
  install: (app) => {
    app.component("GaussianSplat", GaussianSplat);
  },
};
