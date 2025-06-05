<template>
  <div>
    <h2>List Rendering</h2>

    <p>Penjelasan:</p>
    <ul>
      <li><code>items</code> diambil dari <code>data()</code> (array of object atau array sederhana).</li>
      <li>`item` adalah elemen saat ini, `index` adalah indeks (0-based).</li>
      <li>
        Atribut <code>:key</code> wajib unik—biasanya menggunakan `id` dari objek,
        atau jika array sederhana bisa gunakan `index` (walaupun rekomendasi umum: hindari
        gunakan index jika array bisa berinteraksi dinamis).
      </li>
    </ul>

    <p>Hasil render akan menampilkan:</p>
    <ol>
      <li>Merah</li>
      <li>Biru</li>
      <li>Hijau</li>
      <li>Kuning</li>
    </ol>

    <p>Keterangan:</p>
    <ul>
      <li>Ada array `todos` yang berisi objek `{ id, text }`.</li>
      <li>Field `newTodo` mengikat input text.</li>
      <li>Method `addTodo()` menambahkan item baru dengan `id` unik.</li>
      <li>Method `removeTodo()` menghapus item berdasarkan index.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListRendering'
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

ul {
  padding-left: 20px;
}
</style>
