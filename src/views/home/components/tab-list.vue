<template>
  <div class="tab-content">
    <div
      class="tab-box"
      :class="{
        'no-border': files.length > 1 && index !== files.length - 1,
        'is-active': activeFile === file.id,
      }"
      v-for="(file, index) in files"
      :key="file.id"
      @click="activeFile = file.id"
    >
      {{ file.title }}
      <div class="btn-content">
        <div v-if="file.unsave" class="btn-unsave" @click.stop></div>
        <div class="btn-close" @click="handelClickClose(file.id)">
          <el-icon color="#fff" size="12"><Close /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Close } from "@element-plus/icons-vue";
const activeFile = ref("");
const props = defineProps({
  files: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["click-close"]);
const handelClickClose = (id) => {
  emit("click-close", id);
};
</script>

<style lang="scss" scoped>
.tab-content {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
}
.tab-box {
  min-width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ece0e0;
  transition: all 0.3s ease;
  &:hover {
    min-width: 100px;
    background-color: #ece0e0;
    border: 1px solid #42ccf5;
  }
  &:hover .btn-close {
    display: flex;
    background-color: #484747;
  }
  .btn-content {
    position: relative;
    width: 14px;
    height: 14px;
    margin-left: 10px;
    &:hover .btn-unsave {
      z-index: -1;
    }
    .btn-unsave {
      position: absolute;
      top: 0;
      z-index: 8;
      left: 0;
      width: 14px;
      height: 14px;
      background-color: #fff;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
    }
  }

  .btn-close {
    display: none;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border-radius: 50%;

    justify-content: center;
    align-items: center;
  }
}
.is-active {
  min-width: 100px;
  background-color: #ece0e0;
  border: 1px solid #42ccf5 !important;
  .btn-close {
    display: flex;
    background-color: #484747;
  }
}
.no-border {
  border-right: none;
}
</style>
