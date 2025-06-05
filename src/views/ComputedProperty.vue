<template>
  <div class="page-container">
    <h1>Computed Property</h1>

    <p>
      <strong>Computed Property</strong> (atau “properti terhitung”) adalah salah satu fitur 
      reaktivitas Vue.js yang memungkinkan kita mendefinisikan properti yang nilainya 
      bergantung pada data (atau properti lain). Ketika data yang menjadi dependensi berubah, 
      computed property akan otomatis dihitung ulang (memoized).
    </p>

    <h2>1. Perbedaan antara <code>computed</code> dan <code>methods</code></h2>

    <p>
      Secara sekilas, kita bisa saja menuliskan fungsi di dalam <code>methods</code> yang 
      mengembalikan hasil perhitungan. Namun computed property:
    </p>
    <ul>
      <li>Hanya akan dihitung ulang jika salah satu dependensi berubah.</li>
      <li>Keluaran-nya <em>cached</em> (disimpan sementara), sehingga ketika properti yang 
          digunakan tidak berubah, Vue akan langsung mengembalikan nilai hasil perhitungan 
          sebelumnya (tanpa menjalankan ulang fungsi).</li>
    </ul>

    <p>Contoh sederhana:</p>

    <pre><code class="language-js">
// Menggunakan computed
computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

// Menggunakan methods
methods: {
  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}
    </code></pre>

    <p>
      Jika Anda memanggil <code>fullName</code> di template, dan <code>firstName</code> atau 
      <code>lastName</code> tidak berubah, maka Vue tidak akan memanggil kembali fungsi 
      <code>fullName()</code>—melainkan mengembalikan hasil yang sudah di-cache. Berbeda 
      jika menggunakan <code>getFullName()</code> (methods)—setiap kali template me‑render, 
      fungsi akan dipanggil kembali meski nilainya sama.
    </p>

    <h2>2. Sintaks Dasar Computed Property</h2>

    <p>Di dalam komponen:</p>

    <pre><code class="language-js">
export default {
  data() {
    return {
      firstName: 'Budi',
      lastName: 'Santoso',
      scores: [80, 75, 90, 85]
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    averageScore() {
      if (!this.scores.length) return 0
      const total = this.scores.reduce((sum, val) => sum + val, 0)
      return (total / this.scores.length).toFixed(2)
    }
  }
}
    </code></pre>

    <p>Di template, kita bisa menampilkan:</p>

    <pre><code class="language-html">
<p>Nama lengkap: {{ fullName }}</p>
<p>Nilai rata-rata: {{ averageScore }}</p>
    </code></pre>

    <h2>3. Computed dengan Getter &amp; Setter</h2>

    <p>
      Di Vue, computed property juga dapat memiliki setter jika kita ingin membuat properti 
      terhitung yang dapat diubah dari template. Contoh:
    </p>

    <pre><code class="language-js">
computed: {
  fullName: {
    get() {
      return this.firstName + ' ' + this.lastName
    },
    set(value) {
      const parts = value.split(' ')
      this.firstName = parts[0]
      this.lastName = parts.slice(1).join(' ')
    }
  }
}
    </code></pre>

    <p>Dengan ini, jika di template kita tulis:</p>

    <pre><code class="language-html">
<input v-model="fullName" placeholder="Ubah nama lengkap" />
    </code></pre>

    <p>
      Kemudian pengguna mengetik “Joko Widodo” di input, Vue akan memanggil <code>fullName.set()</code> 
      dan memecah string menjadi `firstName = "Joko"` dan `lastName = "Widodo"`.
    </p>

    <h2>4. Studi Kasus: Penggunaan Computed dalam Filter</h2>

    <p>
      Misalkan kita memiliki daftar produk sama seperti sebelumnya, dan ingin menyediakan 
      fitur filter berdasarkan kategori. Kita gunakan computed property untuk menghitung 
      daftar produk terfilter:
    </p>

    <pre><code class="language-js">
data() {
  return {
    products: [
      { id: 1, name: 'Laptop', category: 'Elektronik', price: 10000000 },
      { id: 2, name: 'Buku Vue.js', category: 'Buku', price: 150000 },
      { id: 3, name: 'Headphone', category: 'Elektronik', price: 500000 },
      { id: 4, name: 'Novel', category: 'Buku', price: 75000 }
    ],
    selectedCategory: 'Semua'
  }
},
computed: {
  filteredProducts() {
    if (this.selectedCategory === 'Semua') {
      return this.products
    }
    return this.products.filter(p => p.category === this.selectedCategory)
  }
}
    </code></pre>

    <pre><code class="language-html">
<select v-model="selectedCategory">
  <option>Semua</option>
  <option>Elektronik</option>
  <option>Buku</option>
</select>

<ul>
  <li v-for="item in filteredProducts" :key="item.id">
    {{ item.name }} – Rp {{ item.price.toLocaleString() }}
  </li>
</ul>
    </code></pre>

    <p>
      Karena <code>filteredProducts</code> adalah computed, setiap kali 
      <code>selectedCategory</code> berubah, computed akan menghitung ulang 
      dan merender daftar baru.
    </p>

    <h2>5. Keuntungan Menggunakan Computed</h2>

    <ul>
      <li><strong>Cache</strong>: computed property hanya berjalan ulang saat dependensi berubah.</li>
      <li><strong>Readability</strong>: memisahkan logika perhitungan di computed membuat template lebih bersih.</li>
      <li><strong>Efisiensi</strong>: meminimalkan pemanggilan fungsi/penghitungan berulang jika dependensi tidak berubah.</li>
    </ul>

    <h2>Kesimpulan</h2>

    <p>
      <strong>Computed Property</strong> merupakan fitur penting di Vue.js untuk menghitung 
      nilai berdasar data lain dengan cara yang efisien. Jika dibandingkan menulis fungsi 
      di <code>methods</code> dan memanggilnya di template, computed property menawarkan 
      caching dan kemudahan dalam menyusun logic, terutama ketika kita memerlukan 
      kombinasi atau transformasi data sebelum ditampilkan.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ComputedProperty'
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

select {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
