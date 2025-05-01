<template>
  <div v-if="flag" class="search-file">
    <el-input
      ref="inpRef"
      v-model="keyword"
      @keydown.esc="handelKeydown"
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
import { ref, onMounted, watch } from "vue";
const inpRef = ref(null);
const flag = ref(false);
const keyword = defineModel("keyword");
const emit = defineEmits(["on-search"]);
onMounted(() => {});
watch(
  () => flag.value,
  (val) => {
    if (val) {
      setTimeout(() => {
        inpRef.value.focus();
      }, 100);
    } else {
      keyword.value = "";
    }
  }
);
const handelKeydown = () => {
  flag.value = false;
};
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
