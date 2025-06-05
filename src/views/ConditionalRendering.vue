<template>
  <div>
    <h2>Conditional Rendering</h2>

    <p><strong>Conditional Rendering</strong> di Vue.js sangat berguna untuk menampilkan
    atau menyembunyikan konten berdasarkan kondisi.</p>

    <ul>
      <li>
        Gunakan <code>v-if</code> / <code>v-else-if</code> / <code>v-else</code> jika Anda perlu
        benar-benar mount/unmount elemen (misal modal, data loading).
      </li>
      <li>
        Gunakan <code>v-show</code> jika hanya ingin toggle visibilitas lewat CSS, terutama saat sering di-toggle.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConditionalRendering'
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
  color: #2c3e50;
}

.page-container h2 {
  margin-top: 1.5rem;
  font-size: 1.5rem;
  color: #333;
}

.page-container pre {
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

.page-container code {
  font-family: 'Source Code Pro', monospace;
  font-size: 0.9rem;
}

.dropdown {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  width: 150px;
  background-color: #fff;
}

.dropdown li {
  margin-bottom: 0.5rem;
}

.dropdown li:last-child {
  margin-bottom: 0;
}

.dropdown li a {
  text-decoration: none;
  color: #333;
}
</style>
