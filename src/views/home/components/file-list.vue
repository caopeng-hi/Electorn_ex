<template>
  <div
    ref="contentRef"
    id="content-items"
    class="file-items"
    v-for="(file, index) in files"
    :key="file.id"
  >
    <div class="inp-content">
      <el-icon @click="handelClickFileItemShow(file)"> <Document /> </el-icon>
      <el-input
        @keydown.enter="handelInpBlur(file)"
        @keydown.esc="handelInpBlur(file)"
        @blur="handelInpBlur(file)"
        v-if="flag === file.id"
        v-model="activeFile"
      ></el-input>
      <span
        v-else
        @click="handelClickFileItem(file.id, file)"
        class="file-title"
        >{{ file.title }}</span
      >
    </div>
    <div>
      <el-button :icon="Edit" circle @click="editFile(file)"></el-button>
      <el-button
        :icon="Delete"
        circle
        type="danger"
        @click="deleteFile(file.id)"
      ></el-button>
    </div>
  </div>
</template>

<script setup>
import { Edit, Document, Delete } from "@element-plus/icons-vue";
import { ref, nextTick } from "vue";
const flag = ref("");
const activeFile = ref("");
const contentRef = ref(null);
const props = defineProps({
  files: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["editFile", "saveFile", "deleteFile", "show-file"]);

const handelClickFileItem = (id, file) => {
  activeFile.value = file.title;
  flag.value = id;
};
const editFile = (file) => {
  activeFile.value = file.title;
  flag.value = file.id;
};
const saveFile = (file) => {
  emit("saveFile", file.id);
};
const deleteFile = (id) => {
  emit("deleteFile", id);
};
const handelInpBlur = (file) => {
  if (activeFile.value.trim().length === 0) {
    deleteFile(flag.value);
    return;
  }
  const ind = props.files.findIndex((item) => item.id === flag.value);
  if (ind === -1) return;
  const title = props.files[ind].title.trim();
  if (title) {
    emit("editFile", file.id, activeFile.value);
    flag.value = "";
    activeFile.value = "";
  } else {
    deleteFile(flag.value);
  }
};

const handelClickFileItemShow = (file) => {
  emit("show-file", file);
};

const setActiveFile = (file) => {
  activeFile.value = file.title;
  flag.value = file.id;
  setTimeout(() => {
    const inp_list = document.querySelectorAll("#content-items input");
    inp_list[0].focus();
  }, 100);
};
defineExpose({
  setActiveFile,
});
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
    cursor: pointer;
  }
  .inp-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
