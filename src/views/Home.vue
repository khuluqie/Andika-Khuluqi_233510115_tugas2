<template>
  <div class="page-container">
    <h1>Selamat Datang di Materi Vue.js</h1>
    <p>
      Halaman ini adalah halaman utama (“Home”) untuk kumpulan materi Vue.js. 
      Gunakan sidebar di sebelah kiri untuk memilih topik yang ingin dipelajari.
    </p>
    <p>
      Di dalam website ini, Anda akan menemukan penjelasan tentang konsep-konsep dasar 
      Vue.js, antara lain:
    </p>
    <ul>
      <li>Declarative Rendering</li>
      <li>Attribute Bindings</li>
      <li>Form Bindings</li>
      <li>Conditional Rendering</li>
      <li>List Rendering</li>
      <li>Computed Property</li>
      <li>Lifecycle dan Template Refs</li>
      <li>Watchers</li>
    </ul>
    <p>
      Klik salah satu topik di sidebar untuk membuka materi lengkapnya. 
      Semoga belajarnya menyenangkan!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.page-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #42b983;
}
</style>
