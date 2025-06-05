<template>
  <div class="page-container">
    <h1>Vue Lifecycle & Template Refs</h1>

    <section>
      <h2>1. Lifecycle Hooks (Console Log)</h2>
      <p>Lihat urutan log di konsol saat komponen ini dimount dan diupdate.</p>
    </section>

    <section>
      <h2>2. Template Ref Demo</h2>
      <input type="text" ref="inputNama" placeholder="Masukkan nama" />
      <button @click="focusInput">Fokus ke Input</button>
    </section>

    <section class="carousel-wrapper">
      <h2>3. Carousel Sederhana (Lifecycle + Ref)</h2>
      <div ref="carouselContainer" class="carousel">
        <div class="track" :style="{ transform: 'translateX(' + (-currentIndex * width) + 'px)' }">
          <div class="slide" v-for="(img, idx) in images" :key="idx">
            <img :src="img" :alt="'Slide ' + (idx + 1)" />
          </div>
        </div>
      </div>
      <div class="controls">
        <button @click="prev" :disabled="currentIndex === 0">Prev</button>
        <button @click="next" :disabled="currentIndex === images.length - 1">Next</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LifecycleTemplateRefs',
  data() {
    return {
      currentIndex: 0,
      width: 0,
      images: [
        'https://via.placeholder.com/600x300?text=Slide+1',
        'https://via.placeholder.com/600x300?text=Slide+2',
        'https://via.placeholder.com/600x300?text=Slide+3'
      ]
    }
  },
  mounted() {
    console.log('mounted')
    this.width = this.$refs.carouselContainer.clientWidth
    window.addEventListener('resize', this.updateWidth)
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
    window.removeEventListener('resize', this.updateWidth)
  },
  methods: {
    updateWidth() {
      this.width = this.$refs.carouselContainer.clientWidth
    },
    focusInput() {
      this.$refs.inputNama?.focus()
    },
    prev() {
      if (this.currentIndex > 0) this.currentIndex--
    },
    next() {
      if (this.currentIndex < this.images.length - 1) this.currentIndex++
    }
  }
}
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  font-family: sans-serif;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

h2 {
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #333;
}

.carousel-wrapper {
  margin-top: 1rem;
}

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.track {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  min-width: 100%;
}

.slide img {
  width: 100%;
  height: auto;
  display: block;
}

.controls {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
