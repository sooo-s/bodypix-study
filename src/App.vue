<template>
  <div id="app" class="wapper">
    <h2>body-pixでバーチャル背景みたいなの作ってに応える</h2>
    <a
      href="https://github.com/tensorflow/tfjs-models/tree/master/body-pix"
    >https://github.com/tensorflow/tfjs-models/tree/master/body-pix</a>
    <br />
    <button @click="page--">←</button>
    <button @click="page++">→</button>
    <template v-if="page === 1">
      <p>画像で人物抽出</p>
      <ImagePix />
    </template>
    <template v-else-if="page === 2">
      <p>カメラの入力で人物抽出</p>
      <VideoJSRecord />
    </template>
  </div>
</template>

<script>
import VideoJSRecord from "./components/VideoJSRecord.vue";
import ImagePix from "./components/ImagePix.vue";

export default {
  name: "App",
  components: {
    VideoJSRecord,
    ImagePix,
  },
  data() {
    return {
      page: 1,
    };
  },
  head: {
    title: {
      inner: "body-pixでバーチャル背景みたいなの作ってに応える",
    },
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css",
      },
    ],
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
