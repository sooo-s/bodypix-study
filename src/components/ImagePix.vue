<template>
  <div>
    <div class="paramater">
      <button @click="loadAndPredict('MobileNetV1')">MobileNetV1 抽出</button>
      <button @click="loadAndPredict('ResNet50')">ResNet50 抽出</button>
      <br />
      <select v-model="multiplier">
        <option>0.50</option>
        <option>0.75</option>
        <option>1.0</option>
      </select>
      <label for="opacity">opacity:</label>
      <input type="number" name="opacity" min="0.0" max="1.0" step="0.1" v-model="opacity" />
      <label for="checkbox">flipHorizontal: {{ flipHorizontal }}</label>
      <input type="checkbox" id="checkbox" v-model="flipHorizontal" />
    </div>
    <div class="photo-block">
      <img id="photo" class="photo" alt="photo" src="@/assets/photo.jpg" />
      <canvas id="MobileNetV1" class="canvas" />
      <canvas id="ResNet50" class="canvas" />
    </div>
    <p>
      Photo by
      <a href="https://stocksnap.io/author/mattmoloney">Matt Moloney</a> from
      <a href="https://stocksnap.io">StockSnap</a>
    </p>
  </div>
</template>

<script>
import * as bodyPix from "@tensorflow-models/body-pix";
export default {
  data() {
    return {
      opacity: 0.7,
      flipHorizontal: false,
      maskBlurAmount: 0,
      multiplier: 0.75,
    };
  },
  methods: {
    async loadAndPredict(architecture) {
      const img = document.getElementById("photo");
      const multi = architecture === "MobileNetV1" ? this.multiplier : 1;
      const net = await bodyPix.load({
        architecture: architecture,
        multiplier: Number(multi),
      });
      const segmentation = await net.segmentPerson(img);
      console.log(segmentation);
      const coloredPartImage = bodyPix.toMask(segmentation);
      const canvas = document.getElementById(architecture);
      // Draw the mask image on top of the original image onto a canvas.
      // The colored part image will be drawn semi-transparent, with an opacity of
      // 0.7, allowing for the original image to be visible under.
      bodyPix.drawMask(
        canvas,
        img,
        coloredPartImage,
        this.opacity,
        this.maskBlurAmount,
        this.flipHorizontal
      );
    },
  },
  async mounted() {
    // await this.loadAndPredict();
    console.log("mounted");
  },
};
</script>

<style>
.photo-block {
  width: 50vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.photo {
  width: 342px;
}
</style>
