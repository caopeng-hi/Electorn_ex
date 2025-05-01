<template>
  <div class="file-items" v-for="(file, index) in files" :key="file.id">
    <div>
      <el-icon> <Document /> </el-icon>
      <span class="file-title">{{ file.title }}</span>
    </div>
    <div>
      <el-icon><Edit /></el-icon>
      <el-icon><Delete /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { Edit, Document, Delete } from "@element-plus/icons-vue";
import { ref } from "vue";
const props = defineProps({
  files: {
    type: Array,
    default: () => [],
  },
});

const editFile = (file) => {
  console.log(file);
};
const saveFile = (file) => {
  console.log(file);
};
const deleteFile = (file) => {
  console.log(file);
};
</script>

<style lang="scss" scoped>
.file-items {
  width: 100%;
  height: 40px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  border-bottom: 1px solid #a3a2a2;
  justify-content: space-between;
  padding-right: 10px;
  &:hover {
    background-color: #f5f5f5;
    color: #3b9af8;
  }
  .file-title {
    margin-left: 10px;
  }
}
</style>
