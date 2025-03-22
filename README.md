# cg-vue-splat

A Vue 3 component wrapper for the [@mkkellogg/gaussian-splats-3d](https://github.com/mkkellogg/GaussianSplats3D) library, making it easy to integrate 3D Gaussian Splat rendering in your Vue applications.

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

## Props

All props have sensible defaults, so you only need to specify `src` to get started!

| Prop                          | Type    | Default      | Description                                       |
| ----------------------------- | ------- | ------------ | ------------------------------------------------- |
| src                           | String  | Required     | Path to the .splat file                           |
| position                      | Array   | [0, 0, 0]    | Position of the splat in 3D space [x, y, z]       |
| rotation                      | Array   | [0, 0, 0, 1] | Quaternion rotation [x, y, z, w]                  |
| scale                         | Array   | [1, 1, 1]    | Scale of the splat [x, y, z]                      |
| cameraPosition                | Array   | [0, 0, 5]    | Initial camera position [x, y, z]                 |
| cameraLookAt                  | Array   | [0, 0, 0]    | Point where the camera is looking at [x, y, z]    |
| cameraUp                      | Array   | [0, -1, 0]   | Camera up vector [x, y, z]                        |
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

## Events

| Event  | Description                                      |
| ------ | ------------------------------------------------ |
| loaded | Emitted when the splat is successfully loaded    |
| error  | Emitted when an error occurs, with error details |

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
