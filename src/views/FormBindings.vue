<template>
  <div class="page-container">
    <h1>Form Bindings</h1>

    <p><strong>Form Bindings</strong> di Vue.js mempermudah sinkronisasi data antara elemen form HTML dengan properti `data()` di dalam komponen. Dengan direktif `v-model`, kita bisa mengikat nilai form secara dua arah (two-way data binding).</p>

    <h2>1. Sintaks `v-model` (Two-Way Binding)</h2>
    <p>Penggunaan paling dasar:</p>
    <pre><code class="language-html">
&lt;input type="text" v-model="nama" placeholder="Masukkan nama" /&gt;
&lt;p&gt;Nama Anda: {{ nama }}&lt;/p&gt;
    </code></pre>

    <p>Pada contoh di atas:</p>
    <ul>
      <li>Awalnya `nama` di `data()` mungkin kosong (`''`).</li>
      <li>Begitu pengguna mengetik di input, `v-model` secara otomatis melakukan update `this.nama`.</li>
      <li>Dan setiap kali `this.nama` berubah, Vue akan re-render `{{ nama }}` di paragraf.</li>
    </ul>
    <p>Dengan ini, kita tidak perlu menulis event listener `@input` manual untuk mengambil nilai input—cukup pakai `v-model`.</p>

    <h2>2. `v-model` pada Berbagai Elemen Form</h2>
    <p>Selain `<input type="text">`, kita juga dapat menggunakan `v-model` pada:</p>
    <ul>
      <li><code>&lt;input type="checkbox" /&gt;</code></li>
      <li><code>&lt;input type="radio" /&gt;</code></li>
      <li><code>&lt;select&gt;</code></li>
      <li><code>&lt;textarea&gt;</code></li>
    </ul>
    <p><b>Contoh Checkbox dan Radio:</b></p>
    <pre><code class="language-html">
&lt;!-- Checkbox --&gt;
&lt;label&gt;
  &lt;input type="checkbox" v-model="setuju" /&gt;
  Saya menyetujui syarat &amp; ketentuan
&lt;/label&gt;
&lt;p&gt;Sudah setuju? {{ setuju }}&lt;/p&gt;

&lt;!-- Radio Button --&gt;
&lt;label&gt;
  &lt;input type="radio" value="Laki-laki" v-model="jenisKelamin" /&gt; Laki-laki
&lt;/label&gt;
&lt;label&gt;
  &lt;input type="radio" value="Perempuan" v-model="jenisKelamin" /&gt; Perempuan
&lt;/label&gt;
&lt;p&gt;Jenis Kelamin: {{ jenisKelamin }}&lt;/p&gt;
    </code></pre>

    <ul>
      <li>Jika kotak checkbox dicentang, maka `setuju` (Boolean) akan `true`.</li>
      <li>Jika dicentang lagi, `setuju` akan `false`.</li>
      <li>Pada radio, saat salah satu dipilih, `jenisKelamin` (String) akan di-set ke nilai `value` yang sesuai.</li>
    </ul>

    <h2>3. `v-model` pada `select`</h2>
    <p>Misal kita punya dropdown pilihan negara:</p>
    <pre><code class="language-html">
&lt;select v-model="negara"&gt;
  &lt;option disabled value=""&gt;Pilih negara&lt;/option&gt;
  &lt;option value="Indonesia"&gt;Indonesia&lt;/option&gt;
  &lt;option value="Malaysia"&gt;Malaysia&lt;/option&gt;
  &lt;option value="Singapura"&gt;Singapura&lt;/option&gt;
&lt;/select&gt;
&lt;p&gt;Negara terpilih: {{ negara }}&lt;/p&gt;
    </code></pre>

    <h2>4. Modifier pada `v-model`</h2>
    <p>Vue menyediakan beberapa <em>modifier</em> untuk `v-model`, antara lain:</p>
    <ul>
      <li><code>.lazy</code> – Data hanya di-update saat event <code>change</code>.</li>
      <li><code>.number</code> – Mengubah input ke tipe <code>Number</code> (jika bisa).</li>
      <li><code>.trim</code> – Menghilangkan spasi pada awal/akhir input.</li>
    </ul>

    <p>Contoh:</p>
    <pre><code class="language-html">
&lt;input type="text" v-model.lazy="kota" placeholder="Masukkan kota ..." /&gt;
&lt;input type="number" v-model.number="jumlah" placeholder="Masukkan jumlah ..." /&gt;

&lt;p&gt;Kota: “{{ kota }}” (update saat blur)&lt;/p&gt;
&lt;p&gt;Jumlah (tipe): {{ typeof jumlah }} – nilai: {{ jumlah }}&lt;/p&gt;
    </code></pre>

    <h2>5. Studi Kasus: Form Pendaftaran</h2>
    <p>Contoh form pendaftaran singkat yang mengikat beberapa field:</p>
    <pre><code class="language-html">
&lt;form @submit.prevent="submitForm"&gt;
  &lt;div&gt;
    &lt;label&gt;Nama Lengkap:&lt;/label&gt;
    &lt;input type="text" v-model.trim="form.nama" required /&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label&gt;Email:&lt;/label&gt;
    &lt;input type="email" v-model="form.email" required /&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label&gt;Umur:&lt;/label&gt;
    &lt;input type="number" v-model.number="form.umur" min="1" required /&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label&gt;Jenis Kelamin:&lt;/label&gt;
    &lt;label&gt;&lt;input type="radio" value="Laki-laki" v-model="form.jenisKelamin" /&gt; Laki-laki&lt;/label&gt;
    &lt;label&gt;&lt;input type="radio" value="Perempuan" v-model="form.jenisKelamin" /&gt; Perempuan&lt;/label&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label&gt;Kota Domisili:&lt;/label&gt;
    &lt;select v-model="form.kota" required&gt;
      &lt;option disabled value=""&gt;Pilih Kota&lt;/option&gt;
      &lt;option&gt;Jakarta&lt;/option&gt;
      &lt;option&gt;Bandung&lt;/option&gt;
      &lt;option&gt;Yogyakarta&lt;/option&gt;
      &lt;option&gt;Surabaya&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label&gt;
      &lt;input type="checkbox" v-model="form.setuju" /&gt; Saya setuju dengan kebijakan
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;button type="submit" :disabled="!form.setuju"&gt;Daftar&lt;/button&gt;
&lt;/form&gt;
    </code></pre>
  </div>
</template>

<script>
export default {
  name: 'FormBindings',
  data() {
    return {
      nama: '',
      setuju: false,
      jenisKelamin: '',
      negara: '',
      kota: '',
      jumlah: null,
      form: {
        nama: '',
        email: '',
        umur: null,
        jenisKelamin: '',
        kota: '',
        setuju: false
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Data form:', this.form);
      alert('Form berhasil dikirim!');
    }
  }
};
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

form div {
  margin-bottom: 1rem;
}

form label {
  display: block;
  margin-bottom: 0.25rem;
}

form input,
form select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
