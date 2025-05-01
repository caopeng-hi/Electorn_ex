<template>
  <div v-if="flag" class="search-file">
    <el-input
      v-model="keyword"
      style="width: 120px"
      placeholder="Please input"
    />
    <el-button type="primary" :icon="Loading" @click="flag = false"
      >搜索</el-button
    >
  </div>
  <div v-else>
    <span>{{ title }}</span
    ><el-button type="primary" :icon="Search" @click="flag = true"
      >点击</el-button
    >
  </div>
</template>

<script setup>
// 导入el图标库
import { Search, Loading } from "@element-plus/icons-vue";
import { ref } from "vue";
const flag = ref(false);
const keyword = ref("");
const emit = defineEmits(["on-search"]);
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
