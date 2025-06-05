<template>
  <div id="app" class="app-container">
    <!-- Sidebar di sebelah kiri -->
    <Sidebar />

    <!-- Konten utama: di sini router-view akan mengganti isi sesuai rute -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 240px;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

</style>
