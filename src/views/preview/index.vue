<template>
  <div class="preview_wrap">
    <div class="preview_top">
      <div>
        <el-button type="primary" size="default" @click="handleOpenPage">打开图纸</el-button>
        <el-button type="primary" size="default" @click="handleAction('zoomIn')">放大</el-button>
        <el-button type="primary" size="default" @click="handleAction('zoomOut')">缩小</el-button>
        <el-button type="primary" size="default" @click="handleAction('fitView')">适应</el-button>
        <el-button type="primary" size="default" @click="handleAction('reset')">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
</script>

<style lang="scss">
:root {
  --el-color-primary: #0069d9;
}

.preview_wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .preview_top {
    height: 50px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebeef5;
  }
  .preview_page_content {
    padding: 0px 10px;
    margin: 0px;
    height: 40px;
    background: #fff;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    list-style: none;
    font-size: 13px;
  }
  .preview_content {
    flex: 1;
    position: relative;
  }
}
</style>
