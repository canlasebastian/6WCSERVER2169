<template>
  <div class="home-page">
    <section class="hero">
      <h1>Welcome to Sebastian's Book Nook</h1>
      <p class="tagline">A curated space for readers, writers, and literary wanderers.</p>
      <a href="/about" class="cta-button">Learn More About Me</a>
    </section>

    <section class="featured-books">
      <h2>Featured Reads</h2>
      <div class="book-grid">
        <div v-for="book in books" :key="book.title" class="book-card">
          <h3>{{ book.title }}</h3>
          <p><em>by {{ book.author }}</em></p>
          <p class="description">{{ book.description }}</p>
        </div>
      </div>
      <a href="/blog" class="link-button">Read My Reviews →</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      books: [
        {
          title: 'The Shadow of the Wind',
          author: 'Carlos Ruiz Zafón',
          description: 'A mysterious tale of love, literature, and a hidden library in post-war Barcelona.'
        },
        {
          title: 'Circe',
          author: 'Madeline Miller',
          description: 'A lyrical retelling of the mythological witch Circe, blending magic and feminism.'
        },
        {
          title: 'The Reading Life',
          author: 'C.S. Lewis',
          description: 'A collection of essays celebrating the joy and discipline of reading.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-page {
  padding: 3rem 2rem;
  font-family: 'Merriweather', serif;
  background-color: #fdfaf6;
  color: #2c3e50;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background-color: #369f6b;
}

.featured-books {
  max-width: 900px;
  margin: 0 auto;
}

.featured-books h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.book-card {
  background-color: #fff;
  padding: 1.5rem;
  border-left: 4px solid #42b983;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  border-radius: 6px;
}

.book-card h3 {
  margin: 0;
  font-size: 1.4rem;
}

.book-card .description {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #666;
}

.link-button {
  display: block;
  text-align: center;
  margin-top: 2rem;
  color: #42b983;
  font-weight: bold;
  text-decoration: none;
}

.link-button:hover {
  text-decoration: underline;
}
</style>
