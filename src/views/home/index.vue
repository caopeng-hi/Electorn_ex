<template>
  <div class="common-layout">
    <div class="aside">
      <search-file v-model:keyword="value" title="输入搜索文件名"></search-file>
      <file-list :files="files"></file-list>
    </div>
    <div class="main">main</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import searchFile from "./components/search-file.vue";
import fileList from "./components/file-list.vue";
import files from "@/assets/data/index.js";
const value = ref("");
</script>
<style scoped lang="scss">
.common-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  .aside {
    width: 200px;
    height: 100%;
    background-color: #eee;
  }
  .main {
    height: 100%;
    flex: 1;
    background-color: #ccc;
  }
}
</style>
