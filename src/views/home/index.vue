<template>
  <div class="common-layout">
    <div class="aside">
      <search-file v-model:keyword="value" title="输入搜索文件名"></search-file>
    </div>
    <div class="main">main</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const value = ref("");
import searchFile from "./components/search-file.vue";
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
