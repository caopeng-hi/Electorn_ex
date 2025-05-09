<template>
  <div class="common-layout">
    <div class="aside">
      <search-file v-model:keyword="value" title="输入搜索文件名"></search-file>
      <file-list
        @saveFile="handelSaveFile"
        @editFile="handelEditFile"
        @deleteFile="handelDeleteFile"
        @show-file="handelShowFile"
        :files="filesList"
        ref="fileListRef"
      ></file-list>
      <div class="btn-group">
        <el-button @click="handelCreateFile" size="small" :icon="Plus"
          >新建</el-button
        >
        <el-button @click="handelImportFile" size="small" :icon="Promotion" type="primary"
          >导入</el-button
        >
      </div>
    </div>
    <div class="main">
      <tabList
        v-model:active-file="editableTabsValue"
        @click-close="removeTab"
        :files="editableTabs"
      />
      <div v-if="editableTabsValue" if="main-markdown" class="main-markdown">
        <MdEditor ref="mdEditorRef" v-model="text" />
      </div>
      <div class="main-markdown" v-else>暂无文件</div>
    </div>
  </div>
</template>
<script setup>
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { ref, onMounted, computed, watch } from "vue";
import {
  Edit,
  Document,
  Delete,
  Plus,
  Promotion,
  Select,
  Aim,
} from "@element-plus/icons-vue";
import searchFile from "./components/search-file.vue";
import fileList from "./components/file-list.vue";
import files from "@/assets/data/index.js";
import tabList from "./components/tab-list.vue";

let remote = window.require("@electron/remote");
const fileListRef = ref(null);
const value = ref("");
const text = ref("");
const filesList = ref(files);
const editableTabsValue = ref("");
const editableTabs = ref([]);
watch(
  () => editableTabsValue.value,
  (val) => {
    const ind = filesList.value.findIndex((item) => item.id === val);
    if (ind > -1) {
      text.value = filesList.value[ind].changeText || filesList.value[ind].body;
    } else {
      text.value = "";
      console.log('as')
    }
  }
);




watch(
  () => text.value,
  (newVal, oldVal) => {
    const ind = editableTabs.value.findIndex(
      (item) => item.id === editableTabsValue.value
    );
    if (ind > -1) {
      const changeIdx = filesList.value.findIndex(
        (item) => item.id === editableTabsValue.value
      );
      if (changeIdx > -1) {
        if (editableTabs.value[ind].unsave) {
          filesList.value[changeIdx].changeText = newVal;
        } else {
          const body = editableTabs.value[ind].body;
          if (body !== newVal) {
            editableTabs.value[ind].unsave = true;
            filesList.value[changeIdx].changeText = newVal;
          } else {
            editableTabs.value[ind].unsave = undefined;
          }
        }
      }
    }
  }
);

const handelShowFile = (file) => {
  const id = file.id;
  const ind = editableTabs.value.findIndex((item) => item.id === id);
  if (ind > -1) {
    editableTabsValue.value = id;
  } else {
    editableTabs.value.push(file);
    editableTabsValue.value = id;
  }
};
const handelEditFile = (id, name) => {
  const ind = files.findIndex((item) => item.id === id);
  if (ind > -1) {
    filesList.value[ind].title = name;
    const tabInd = editableTabs.value.findIndex((item) => item.id === id);
    if (tabInd > -1) {
      editableTabs.value[tabInd].title = name;
    }
  } else {
    alert("文件不存在");
  }
};
onMounted(() => {



  
});
const handelSaveFile = (id) => {
  console.log(id);
};
const handelDeleteFile = (id) => {
  const ind = filesList.value.findIndex((item) => item.id === id);
  if (ind > -1) {
    const canDetFile = checkUnsave(id);
    if (canDetFile) {
      alert("文件未保存，无法删除");
      return;
    }
    filesList.value.splice(ind, 1);
    const tabInd = editableTabs.value.findIndex((item) => item.id === id);
    if (tabInd > -1) {
      editableTabs.value.splice(tabInd, 1);
    }
  } else {
    alert("文件不存在");
  }
};
const checkUnsave = (id) => {
  const ind = filesList.value.findIndex((item) => item.id === id);
  if (ind === -1) {
    return false;
  }
  const detFile = filesList.value[ind];
  return detFile.unsave;
};
const removeTab = (id) => {
  const ind = editableTabs.value.findIndex((item) => item.id === id);

  if (ind > -1) {
    editableTabs.value.splice(ind, 1);
  }

  if (editableTabs.value.length > 0) {
    const activeInd = editableTabs.value.findIndex(
      (it) => it.id === editableTabsValue.value
    );
    if (activeInd === -1) {
      editableTabsValue.value = editableTabs.value[0].id;
    }
  } else {
    editableTabsValue.value = "";
  }
};

const handelCreateFile = () => {
  // 判读上一次添加的文件
  const id = Date.now();
  const file = {
    id,
    title: "",
    body: "",
    createTime: Date.now(),
  };
  filesList.value.push(file);
  fileListRef.value.setActiveFile(file);
};

const handelImportFile=async()=>{
const {filePaths} = await  remote.dialog.showOpenDialog({
 bottonLable:'请选择',
 title:"请选择文件",
 properties:[['openFile','multiSelections']],
 filters:[
 {
  name:'md文档',extensions:['md']
 }, 
 {
  name:"其他文档类型",extensions:['js','json','html']
 }
 ]
 })

 if(filePaths.length>0){
      const packageData = calidPath.map(it=>{
        return {
          id:v4(),
          title:path.basename(it,'.md'),
          path:it 
        }
      })
      fileList.value = [...fileList.value,...packageData]
 }
}
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
    display: flex;
    flex-direction: column;
    .main-markdown {
      flex: 1;
      background: #5f5555;
    }
  }
}
</style>
