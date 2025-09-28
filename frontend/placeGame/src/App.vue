<template>
  <div class="app">
    <h1>Vue + NW.js 桌面应用</h1>
    <p>使用手动下载的 NW.js SDK 构建</p>
    <button @click="showInfo">显示系统信息</button>
    <button @click="callApi">调用API</button>
    <div v-if="apiResponse">
      <h3>API响应:</h3>
      <pre>{{ apiResponse }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiResponse: null
    }
  },
  methods: {
    showInfo() {
      if (typeof nw !== 'undefined') {
        alert(`平台: ${process.platform}\nNode.js: ${process.versions.node}`);
      }
    },
    async callApi() {
      try {
        const response = await fetch('http://localhost:8082/hello');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        this.apiResponse = data;
      } catch (error) {
        console.error('Error calling API:', error);
        this.apiResponse = 'Error: ' + error.message;
      }
    }
  }
}
</script>