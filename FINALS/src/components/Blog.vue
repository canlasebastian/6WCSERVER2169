<template>
  <div class="blog-page">
    <header class="blog-header">
      <h1>My Book Reviews & Reflections</h1>
      <p class="intro">Thoughts, impressions, and personal takes on the stories that stayed with me.</p>
    </header>

    <section class="blog-posts">
      <div v-for="post in posts" :key="post.title" class="post-card">
        <h2>{{ post.title }}</h2>
        <p class="date">{{ post.date }}</p>
        <p class="summary">{{ post.summary }}</p>
        <router-link :to="{ name: 'Post', params: { id: post.id } }" class="read-more">Read More →</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Why "Circe" Changed How I See Mythology',
          date: 'September 10, 2025',
          summary: 'A deep dive into Madeline Miller’s lyrical retelling and how it reframed ancient stories through a modern lens.'
        },
        {
          id: 2,
          title: 'The Quiet Power of "The Book Thief"',
          date: 'August 28, 2025',
          summary: 'Exploring how words, grief, and resistance intertwine in a haunting narrative set during WWII.'
        },
        {
          id: 3,
          title: 'Sherlock’s First Case: Why "A Study in Scarlet" Still Holds Up',
          date: 'August 15, 2025',
          summary: 'A look at Holmes’ debut and the clever structure that made this mystery unforgettable.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.blog-page {
  padding: 3rem 2rem;
  font-family: 'Merriweather', serif;
  background-color: #fdfaf6;
  color: #2c3e50;
}

.blog-header {
  text-align: center;
  margin-bottom: 2rem;
}

.blog-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.intro {
  font-size: 1.1rem;
  color: #555;
}

.blog-posts {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
}

.post-card {
  background-color: #fff;
  padding: 1.5rem;
  border-left: 4px solid #42b983;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  border-radius: 6px;
}

.post-card h2 {
  margin: 0;
  font-size: 1.6rem;
}

.date {
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 0.5rem;
}

.summary {
  font-size: 1rem;
  color: #444;
  margin-bottom: 1rem;
}

.read-more {
  color: #42b983;
  font-weight: bold;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
