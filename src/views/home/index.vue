<template>
  <div class="common-layout">
    <div class="aside">
      <search-file v-model:keyword="value" title="输入搜索文件名"></search-file>
      <file-list
        @saveFile="handelSaveFile"
        @editFile="handelEditFile"
        @deleteFile="handelDeleteFile"
        :files="files"
      ></file-list>
      <div class="btn-group">
        <el-button size="small" :icon="Plus">新建</el-button>
        <el-button size="small" :icon="Promotion" type="primary"
          >导入</el-button
        >
      </div>
    </div>
    <div class="main">main</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  Edit,
  Document,
  Delete,
  Plus,
  Promotion,
} from "@element-plus/icons-vue";
import searchFile from "./components/search-file.vue";
import fileList from "./components/file-list.vue";
import files from "@/assets/data/index.js";
const value = ref("");
const handelEditFile = (id, name) => {
  const ind = files.findIndex((item) => item.id === id);
  if (ind > -1) {
    files[ind].title = name;
  } else {
    alert("文件不存在");
  }
};
const handelSaveFile = (id) => {
  console.log(id);
};
const handelDeleteFile = (id) => {
  const ind = files.findIndex((item) => item.id === id);
  if (ind > -1) {
    files.splice(ind, 1);
  } else {
    alert("文件不存在");
  }
};
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
    position: relative;
    .btn-group {
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .main {
    height: 100%;
    flex: 1;
    background-color: #ccc;
  }
}
</style>
