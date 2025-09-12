<template>
  <div class="gallery-page">
    <header class="gallery-header">
      <h1>Book Gallery</h1>
      <p class="intro">A visual journey through the stories that inspire me.</p>
    </header>

    <section class="gallery-grid">
      <div v-for="image in images" :key="image.alt" class="gallery-item">
        <img :src="getImagePath(image.src)" :alt="image.alt" />
        <p class="caption">{{ image.caption }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        {
          src: 'book1.jpg',
          alt: 'The Book Thief',
          caption: 'A haunting tale of words and resistance.'
        },
        {
          src: 'book2.jpg',
          alt: 'Circe',
          caption: 'Myth and magic in a feminist retelling.'
        },
        {
          src: 'book3.jpg',
          alt: 'A Study in Scarlet',
          caption: 'The origin of Sherlock Holmes and his brilliant deductions.'
        },
        {
          src: 'book4.jpg',
          alt: 'And Then There Were None',
          caption: 'Ten strangers. One island. No escape from justice.'
        },
        {
          src: 'book5.jpg',
          alt: 'The Big Sleep',
          caption: 'A noir mystery with sharp wit and shadowy intrigue.'
        }
      ]
    }
  },
  methods: {
    getImagePath(filename) {
      try {
        return require(`@/assets/images/${filename}`)
      } catch (error) {
        console.error(`Image not found: ${filename}`)
        return ''
      }
    }
  }
}
</script>

<style scoped>
.gallery-page {
  padding: 2rem 1rem;
  font-family: 'Merriweather', serif;
  background-color: #fdfaf6;
  color: #2c3e50;
}

.gallery-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.gallery-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.intro {
  font-size: 1rem;
  color: #555;
}

.gallery-grid {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.gallery-item {
  width: 180px;
  background-color: #fff;
  padding: 0.75rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  text-align: center;
}

.gallery-item img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 4px;
}

.caption {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #666;
}
</style>
