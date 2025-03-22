# cg-vue-splat

A Vue 3 component wrapper for the [@mkkellogg/gaussian-splats-3d](https://github.com/mkkellogg/GaussianSplats3D) library, making it easy to integrate 3D Gaussian Splat rendering in your Vue applications.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Online-brightgreen)](https://cg-vue-splat.vercel.app)
[![NPM](https://img.shields.io/npm/v/cg-vue-splat.svg)](https://www.npmjs.com/package/cg-vue-splat)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Installation

```bash
npm install cg-vue-splat
```

## Usage

### Global Registration

```js
import { createApp } from "vue";
import CGVueSplat from "cg-vue-splat";
import App from "./App.vue";

const app = createApp(App);
app.use(CGVueSplat);
app.mount("#app");
```

### Local Registration

```js
import { GaussianSplat } from "cg-vue-splat";

export default {
  components: {
    GaussianSplat,
  },
};
```

### Basic Example

```vue
<template>
  <div style="width: 800px; height: 600px;">
    <!-- Simplified usage - just provide the src! -->
    <GaussianSplat
      src="your-splat-file.splat"
      @loaded="onSplatLoaded"
      @error="onSplatError"
    />
  </div>
</template>

<script setup>
  import { GaussianSplat } from "cg-vue-splat";

  const onSplatLoaded = () => {
    console.log("Splat loaded successfully!");
  };

  const onSplatError = (error) => {
    console.error("Error loading splat:", error);
  };
</script>
```

### Loading External URLs

You can also load `.splat` files from external URLs:

```vue
<template>
  <div style="width: 800px; height: 600px;">
    <GaussianSplat
      src="https://storage.googleapis.com/reefos-3d/splats/reef-full.splat"
      @loaded="onSplatLoaded"
      @error="onSplatError"
    />
  </div>
</template>
```

**Note**: External URLs must be CORS-enabled to work properly. See the [CORS Considerations](#cors-considerations) section below.

## Props

All props have sensible defaults, so you only need to specify `src` to get started!

| Prop                          | Type    | Default      | Description                                       |
| ----------------------------- | ------- | ------------ | ------------------------------------------------- |
| src                           | String  | Required     | Path or URL to the .splat file                    |
| position                      | Array   | [0, 0, 0]    | Position of the splat in 3D space [x, y, z]       |
| rotation                      | Array   | [0, 0, 0, 1] | Quaternion rotation [x, y, z, w]                  |
| scale                         | Array   | [1, 1, 1]    | Scale of the splat [x, y, z]                      |
| cameraPosition                | Array   | [0, 0, 3]    | Initial camera position [x, y, z]                 |
| cameraLookAt                  | Array   | [0, 0, 0]    | Point where the camera is looking at [x, y, z]    |
| cameraUp                      | Array   | [0, -1, 0]   | Camera up vector [x, y, z]                        |
| fov                           | Number  | 45           | Field of view in degrees                          |
| showLoadingUI                 | Boolean | true         | Whether to show loading UI                        |
| splatAlphaRemovalThreshold    | Number  | 5            | Alpha threshold for splat removal                 |
| selfDrivenMode                | Boolean | true         | Whether the viewer manages its own rendering loop |
| gpuAcceleratedSort            | Boolean | false        | Use GPU for splat sorting                         |
| enableSIMDInSort              | Boolean | true         | Use SIMD instructions for sorting where available |
| sharedMemoryForWorkers        | Boolean | false        | Use shared memory for worker threads              |
| integerBasedSort              | Boolean | true         | Use integer-based sorting                         |
| halfPrecisionCovariancesOnGPU | Boolean | false        | Use half precision for covariances on GPU         |
| antialiased                   | Boolean | true         | Enable antialiasing                               |
| dynamicScene                  | Boolean | false        | Optimize for dynamic scenes                       |
| progressiveLoad               | Boolean | true         | Enable progressive loading                        |
| focusDistance                 | Number  | 1.2          | Distance at which the camera is focused           |
| sphericalHarmonicsDegree      | Number  | 0            | Degree of spherical harmonics used (0, 1, or 2)   |
| maxScreenSpaceSplatSize       | Number  | 2048         | Maximum screen space splat size in pixels         |
| kernel2DSize                  | Number  | 0.5          | Size of the 2D kernel                             |
| autoRotate                    | Boolean | false        | Enable auto-rotation of the camera                |
| autoRotateSpeed               | Number  | 0.5          | Speed of auto-rotation                            |
| showFps                       | Boolean | false        | Show FPS counter                                  |
| responsive                    | Boolean | true         | Automatically resize on container changes         |
| enableControls                | Boolean | true         | Enable default camera controls                    |

## Events

| Event  | Description                                      |
| ------ | ------------------------------------------------ |
| loaded | Emitted when the splat is successfully loaded    |
| error  | Emitted when an error occurs, with error details |

## CORS Considerations

When loading `.splat` files from external URLs, you need to ensure the server hosting the files has proper CORS headers configured. The GaussianSplats3D library requires shared memory support, which needs specific CORS headers:

- `Cross-Origin-Embedder-Policy: require-corp`
- `Cross-Origin-Opener-Policy: same-origin`

### Vite Configuration

If you're using Vite, you can add these headers by installing the [vite-plugin-cross-origin-isolation](https://github.com/chaosprint/vite-plugin-cross-origin-isolation) plugin:

```bash
npm install vite-plugin-cross-origin-isolation --save-dev
```

Then add the following to your `vite.config.js` file:

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import crossOriginIsolation from "vite-plugin-cross-origin-isolation";

export default defineConfig({
  plugins: [vue(), crossOriginIsolation()],
});
```

Or manually configure the headers:

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
    },
  ],
});
```

## Advanced Usage

### Controlling the Splat Position Dynamically

```vue
<template>
  <GaussianSplat
    :src="splatUrl"
    :position="position"
    :rotation="rotation"
    :scale="scale"
  />

  <div class="controls">
    <button @click="moveLeft">Move Left</button>
    <button @click="moveRight">Move Right</button>
    <button @click="rotateModel">Rotate</button>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { GaussianSplat } from "cg-vue-splat";

  const splatUrl = "your-splat-file.splat";
  const position = ref([0, 0, 0]);
  const rotation = ref([0, 0, 0, 1]);
  const scale = ref([1, 1, 1]);

  const moveLeft = () => {
    position.value = [
      position.value[0] - 0.5,
      position.value[1],
      position.value[2],
    ];
  };

  const moveRight = () => {
    position.value = [
      position.value[0] + 0.5,
      position.value[1],
      position.value[2],
    ];
  };

  const rotateModel = () => {
    // Example quaternion rotation around Y axis
    rotation.value = [0, Math.sin(Math.PI / 4), 0, Math.cos(Math.PI / 4)];
  };
</script>
```

## Acknowledgments

This component is built on top of the [Gaussian Splats 3D library](https://github.com/mkkellogg/GaussianSplats3D) created by Mark Kellogg. This project simply provides a Vue.js wrapper to make it easier to use within Vue applications.

## License

MIT

## Changelog

### v0.2.6

- Added back button to return to model selection screen
- Enhanced error handling with a Go Back button
- Refined demo UI with improved button styles and interactions

### v0.2.5

- Added live demo site at [cg-vue-splat.vercel.app](https://cg-vue-splat.vercel.app)
- Improved UI with dark theme and better visual design
- Updated favicon to match the dark theme
- Enhanced demo page with responsive layout and better user experience
- Fixed deployment issues to Vercel

### v0.2.4

- Added full support for loading .splat files from external URLs
- Added CORS headers configuration in development environment to support shared memory features
- Enhanced example in App.vue with options to load both local and external splat files

### v0.2.3

- Updated default camera position from [0, 0, 5] to [0, 0, 3]
- Added new props with sensible defaults:
  - fov: 45 (field of view in degrees)
  - autoRotate: false
  - autoRotateSpeed: 0.5
  - showFps: false
  - responsive: true
  - enableControls: true
- Added support for loading .splat files from external URLs

### v0.2.2

- Fixed container sizing issue: The component now automatically fills its parent container completely
- Added ResizeObserver to handle container size changes dynamically

### v0.2.1

- Previous stable release

### v0.1.4

- Initial packaging improvements

### v0.1.3

- Initial public release
