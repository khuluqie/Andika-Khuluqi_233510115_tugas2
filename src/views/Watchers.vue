<template>
  <div class="page-container">
    <h1>Watchers</h1>

    <p>
      <strong>Watchers</strong> di Vue.js (directive <code>watch</code> pada Options API, 
      atau <code>watch()</code> pada Composition API) memungkinkan kita mem-“observasi” 
      perubahan pada satu atau lebih properti data/computed, lalu menjalankan logika 
      tertentu saat properti tersebut berubah. Biasanya berguna untuk side-effect 
      (misalnya memanggil API ketika nilai berubah, atau validasi data).
    </p>

    <h2>1. Menggunakan `watch` di Options API</h2>
    <p>
      Sintaks dasar:
    </p>
    <pre><code class="language-js">
export default {
  data() {
    return {
      searchTerm: '',
      timerId: null
    }
  },
  watch: {
    searchTerm(newVal, oldVal) {
      console.log('searchTerm berubah:', oldVal, '→', newVal)
      // Contoh: debounce sebelum panggil API
      clearTimeout(this.timerId)
      this.timerId = setTimeout(() => {
        this.fetchResults(newVal)
      }, 500)
    }
  },
  methods: {
    fetchResults(query) {
      console.log('Memanggil API dengan query:', query)
      // fetch(...) dsb.
    }
  }
}
</code></pre>
    <p>
      Penjelasan:
      <ul>
        <li>Setiap kali `searchTerm` berubah, fungsi watcher akan dipanggil dengan argumen `newVal` dan `oldVal`.</li>
        <li>Kita menggunakan mekanisme debounce: saat tipe baru, kita “clearTimeout” terlebih dahulu, kemudian setTimeout baru berdurasi 500ms. Jika pengguna terus mengetik, timer terus di-reset dan API tidak terlalu sering dipanggil.</li>
      </ul>
    </p>

    <h2>2. Menonton Object atau Properti dalam Object</h2>
    <p>
      Secara default, watcher hanya mendeteksi perubahan referensi. Jika kita ingin menonton 
      seluruh isi object (nested), kita perlu menambahkan opsi `deep: true`:
    </p>
    <pre><code class="language-js">
data() {
  return {
    user: {
      name: '',
      email: ''
    }
  }
},
watch: {
  user: {
    handler(newUser) {
      console.log('Objek user berubah:', newUser)
    },
    deep: true
  }
}
</code></pre>
    <p>
      Dengan `deep: true`, jika kita mengubah `this.user.name`, watcher masih bisa mendeteksi. 
      Tanpa `deep: true`, hanya perubahan pada referensi `user` (misal `this.user = { ... }`) 
      yang akan dipantau.
    </p>

    <h2>3. Multiple Watchers dan Immediate</h2>
    <p>
      Kita dapat menambahkan beberapa watcher. Opsi lain yang berguna adalah `immediate: true`
      untuk menjalankan handler segera ketika watcher terdaftarkan:
    </p>
    <pre><code class="language-js">
data() {
  return {
    count: 0
  }
},
watch: {
  count: {
    handler(newVal) {
      console.log('Nilai count:', newVal)
    },
    immediate: true
  }
}
</code></pre>
    <p>
      Karena `immediate: true`, begitu komponen dibuat, handler akan langsung dipanggil 
      dengan `newVal = 0` (nilai awal).
    </p>

    <h2>4. Watchers pada Composition API</h2>
    <p>
      Jika Anda menggunakan Composition API (<code>setup()</code>), Anda dapat mengimpor 
      `ref` dan `watch` dari `vue`. Contoh:
    </p>
    <pre><code class="language-js">
import { ref, watch } from 'vue'

export default {
  setup() {
    const value = ref(0)

    watch(value, (newVal, oldVal) => {
      console.log('value berubah:', oldVal, '→', newVal)
    })

    return { value }
  }
}
</code></pre>
    <p>
      Pada kasus object atau nested, ganti menjadi:
    </p>
    <pre><code class="language-js">
import { reactive, watch } from 'vue'

export default {
  setup() {
    const user = reactive({
      name: '',
      email: ''
    })

    watch(
      () => user.name,
      (newName) => {
        console.log('user.name berubah:', newName)
      }
    )

    // Atau watch seluruh object*
    watch(
      () => user,
      (newUser) => {
        console.log('Objek user berubah:', newUser)
      },
      { deep: true }
    )

    return { user }
  }
}
</code></pre>
    <p>
      Catatan: ketika “watch seluruh object” di Composition API, kita perlu membungkusnya di 
      fungsi arrow `() => user` agar Vue tahu dependensi mana yang harus dipantau.
    </p>

    <h2>5. Studi Kasus: Validasi Form Secara Reaktif</h2>
    <p>
      Misal kita ingin memvalidasi email setiap kali pengguna mengetik di input, 
      tapi validasi hanya dijalankan setelah 300ms (debounce). Kita bisa gunakan watcher:
    </p>
    <pre><code class="language-html">
<input type="email" v-model="email" placeholder="Masukkan email" />
<p v-if="emailError" class="error">{{ emailError }}</p>
    </code></pre>
    <pre><code class="language-js">
// Options API
data() {
  return {
    email: '',
    emailError: '',
    debounceTimer: null
  }
},
watch: {
  email(newEmail) {
    clearTimeout(this.debounceTimer)
    this.debounceTimer = setTimeout(() => {
      if (!/\S+@\S+\.\S+/.test(newEmail)) {
        this.emailError = 'Email tidak valid'
      } else {
        this.emailError = ''
      }
    }, 300)
  }
}
</code></pre>
    <p>
      Hasilnya: ketika pengguna mengetik email, watcher akan menunggu 300ms setelah ketikan terakhir, 
      lalu memvalidasi format email. Jika tidak valid, `emailError` akan terisi pesan kesalahan, 
      dan akan ditampilkan di bawah input.
    </p>

    <h2>6. Kapan Harus Pakai Watcher?</h2>
    <p>
      Gunakan watcher ketika:
      <ul>
        <li>Anda perlu menjalankan side-effect saat data berubah (fetch tambahan data, validasi, dsb.).</li>
        <li>Anda perlu mengamati perubahan properti yang kompleks (object/array) dan merespons secara manual.</li>
        <li>Anda tidak bisa menggunakan computed (karena computed sebaiknya hanya mengembalikan nilai, 
            bukan melakukan side-effect seperti memanggil API).</li>
      </ul>
    </p>

    <h2>Kesimpulan</h2>
    <p>
      <strong>Watchers</strong> adalah fitur Vue.js untuk memantau perubahan data secara reaktif dan menjalankan 
      fungsi callback tertentu. Berbeda dengan computed property, watcher dirancang untuk side-effect (contoh: 
      memanggil API, validasi, atau tugas asynchronous lain). Gunakan watcher ketika Anda perlu “mengamati” 
      perubahan pro perties tertentu dan meresponsnya di luar konteks rendering.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Watchers'
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

.error {
  color: red;
  margin-top: 0.5rem;
}
</style>
