<template>
  <div>
    <h2>Declarative Rendering</h2>

    <p>Pilih mana tergantung seberapa sering kondisi akan berubah:</p>
    <ul>
      <li>
        Jika jarang berubah (misal modal yang hanya beberapa kali muncul), pakai
        <code>v-if</code>.
      </li>
      <li>
        Jika sering berubah-ubah (misal dropdown, toggle visibilitas konten kecil), pakai
        <code>v-show</code>.
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
