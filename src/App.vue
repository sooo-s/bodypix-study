<template>
  <div id="app" class="wapper">
    <h1>body-pixで「zoomのバーチャル背景みたいなの作って」に応える</h1>
    <a
      href="https://github.com/tensorflow/tfjs-models/tree/master/body-pix"
    >https://github.com/tensorflow/tfjs-models/tree/master/body-pix</a>
    <br />
    <button @click="page--">←</button>
    <button @click="page++">→</button>
    <template v-if="page === 1">
      <h2>画像から人物抽出</h2>
      <ImagePix />
    </template>
    <template v-else-if="page === 2">
      <h2>映像から人物抽出</h2>
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
