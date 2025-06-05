<template>
  <div class="page-container">
    <h1>Attribute Bindings</h1>

    <p>
      <strong>Attribute Bindings</strong> di Vue.js memungkinkan kita mengikat (bind) 
      atribut HTML ke sebuah properti data dari komponen. Misalnya, kita bisa 
      mengatur <code>href</code>, <code>src</code>, <code>class</code>, <code>style</code>, dan lain-lain secara dinamis 
      tergantung nilai di data/computed.
    </p>

    <h2>1. Sintaks Dasar <code>v-bind</code></h2>
    <p>
      Directive utama untuk binding properti di Vue adalah <code>v-bind:ATTRIBUTE="expression"</code>. 
      Karena sering dipakai, Vue menyediakan sintaks singkat berupa <code>:ATTRIBUTE="expression"</code>. 
      Contoh:
    </p>
    <pre><code class="language-html">&lt;!-- Menggunakan v-bind:src --&gt;
&lt;img v-bind:src="imageUrl" alt="Contoh Gambar" /&gt;

&lt;!-- Sintaks singkat --&gt;
&lt;img :src="imageUrl" alt="Contoh Gambar" /&gt;
    </code></pre>
    <p>
      Jika di <code>data()</code> kita definisikan <code>imageUrl: 'https://via.placeholder.com/150'</code>, 
      maka <code>&lt;img&gt;</code> akan otomatis menggunakan URL tersebut sebagai <code>src</code>.
    </p>

    <h2>2. Mengikat Kelas CSS Dinamis (<code>:class</code>)</h2>
    <p>
      Salah satu binding yang sering digunakan adalah mengikat atribut <code>class</code> 
      secara dinamis. Ada beberapa cara:
    </p>
    <pre><code class="language-html">&lt;!-- 1) Menggunakan objek --&gt;
&lt;div :class="{ active: isActive, 'text-large': isLargeText }"&gt;
  Contoh Div
&lt;/div&gt;

&lt;!-- 2) Menggunakan array --&gt;
&lt;div :class="[classA, classB]"&gt;
  Contoh Div
&lt;/div&gt;

&lt;!-- 3) Menggunakan computed property yang mengembalikan string/objek/array --&gt;
&lt;div :class="computedClass"&gt;
  Contoh Div
&lt;/div&gt;
    </code></pre>
    <p>
      Misalnya:
    </p>
    <pre><code class="language-js">
data() {
  return {
    isActive: true,
    isLargeText: false,
    classA: 'bg-red',
    classB: 'text-white'
  }
},
computed: {
  computedClass() {
    return {
      'bg-green': this.isActive,
      'text-small': !this.isLargeText
    }
  }
}
    </code></pre>
    <p>
      Dengan demikian, apabila <code>isActive</code> bernilai <code>true</code>, maka kelas <code>bg-green</code> akan ditambahkan.
    </p>

    <h2>3. Mengikat Style Dinamis (<code>:style</code>)</h2>
    <p>
      Untuk mengikat style inline, kita pakai <code>:style="{ ... }"</code>. Contoh:
    </p>
    <pre><code class="language-html">&lt;button :style="{ 
  backgroundColor: btnColor, 
  fontSize: btnSize + 'px' 
}"&gt;
  Klik Saya
&lt;/button&gt;
    </code></pre>
    <pre><code class="language-js">
data() {
  return {
    btnColor: 'blue',
    btnSize: 18
  }
}
    </code></pre>
    <p>
      Nilai <code>btnColor</code> bisa diubah-ubah, misal lewat input atau computed property, 
      dan tombol akan otomatis berubah gaya tampilannya.
    </p>

    <h2>4. Mengikat Atribut Lain (<code>href</code>, <code>src</code>, <code>title</code>, dsb.)</h2>
    <p>
      Selain <code>class</code> dan <code>style</code>, kita juga sering mengikat atribut seperti <code>href</code>, 
      <code>src</code>, dan <code>title</code>. Contoh:
    </p>
    <pre><code class="language-html">&lt;a :href="link.url" :title="link.title"&gt;
  {{ link.text }}
&lt;/a&gt;
&lt;img :src="profilePic" :alt="profileName" /&gt;
    </code></pre>
    <p>
      Dalam kasus di atas, jika <code>link.url = 'https://vuejs.org'</code> dan <code>link.title = 'Vue.js Official'</code>, 
      maka <code>&lt;a&gt;</code> akan tertaut ke situs resmi Vue, dan menampilkan tooltip “Vue.js Official” saat hover.
    </p>

    <h2>5. Binding Boolean Attributes</h2>
    <p>
      Untuk atribut boolean (seperti <code>disabled</code>, <code>checked</code>, <code>readonly</code>), Vue akan 
      otomatis menambahkan atribut tersebut ketika ekspresinya bernilai truthy. Contoh:
    </p>
    <pre><code class="language-html">&lt;button :disabled="isDisabled"&gt;Kirim&lt;/button&gt;
&lt;input type="checkbox" :checked="isChecked" /&gt;
    </code></pre>
    <p>
      Jika <code>isDisabled === true</code>, maka <code>&lt;button&gt;</code> akan menjadi disabled. Jika <code>false</code>, 
      atribut <code>disabled</code> tidak akan muncul sama sekali di dalam HTML.
    </p>

    <h2>6. Studi Kasus: Tombol Dinamis</h2>
    <p>
      Misalkan kita ingin membuat tombol yang warna latarnya berubah berdasarkan status 
      validasi form. Contoh:
    </p>
    <pre><code class="language-html">&lt;div id="app"&gt;
  &lt;input type="text" v-model="email" placeholder="Masukkan email" /&gt;
  &lt;button 
    :disabled="!isValidEmail" 
    :style="{ backgroundColor: isValidEmail ? 'green' : 'gray' }"
  &gt;
    Daftar
  &lt;/button&gt;
&lt;/div&gt;
    </code></pre>
    <pre><code class="language-js">
const app = Vue.createApp({
  data() {
    return {
      email: ''
    }
  },
  computed: {
    isValidEmail() {
      // Pola sederhana: mengandung “@” dan titik
      return /\S+@\S+\.\S+/.test(this.email)
    }
  }
})

app.mount('#app')
    </code></pre>
    <p>
      Keterangan:
      <ul>
        <li>Binding <code>:disabled="!isValidEmail"</code>: tombol akan disabled jika <code>isValidEmail</code> false.</li>
        <li>Binding <code>:style="..."</code>: warna latar hijau ketika email valid, atau abu-abu jika tidak valid.</li>
      </ul>
      Dengan begitu, kita tidak perlu menulis event listener tersendiri untuk mengubah gaya atau atribut—cukup deklaratif.
    </p>

    <h2>Kesimpulan</h2>
    <p>
      <strong>Attribute Bindings</strong> di Vue.js memudahkan kita mengelola atribut HTML secara dinamis 
      berdasarkan data dan computed property. Dengan hanya menambahkan <code>:</code> di depan atribut, 
      kita bisa menyetel nilai atribut tersebut sesuai kondisi, sehingga UI menjadi lebih 
      responsif dan reaktif. Baik itu <code>class</code>, <code>style</code>, <code>href</code>, <code>src</code>, maupun atribut boolean 
      seperti <code>disabled</code> atau <code>checked</code> semuanya dapat diikat dengan mudah menggunakan sintaks 
      <code>v-bind</code> (atau singkat <code>:</code>).
    </p>
  </div>
</template>

<script>
export default {
  name: 'AttributeBindings'
}
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #444;
  padding: 1rem;
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
  margin: 1rem 0;
}

.page-container code {
  font-family: 'Source Code Pro', monospace;
  font-size: 0.9rem;
  background-color: #f0f0f0;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  color: #c7254e;
}

.page-container strong {
  font-weight: 600;
}
</style>
