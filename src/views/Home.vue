<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="openDialog" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ipcRenderer } from "electron";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    openDialog() {
      ipcRenderer.invoke("hello");
    },
    created() {
      ipcRenderer.on("hello-click", () => {
        console.log("jeeee!!!!");
      });
    },
  },
};
</script>
