<template>
  <div class="about-page">
    <header class="about-header">
      <h1>About Me</h1>
      <p class="tagline">Sebastian Canlas • Book Enthusiast • Storyteller • Creative Collaborator</p>
    </header>

    <section class="bio">
      <h2>My Journey</h2>
      <p>
        I'm Sebastian Canlas, a passionate reader and literary advocate based in Angeles City, Philippines. My love for books began in childhood and has grown into a lifelong pursuit of stories that challenge, inspire, and connect us.
      </p>
      <p>
        Whether it's reviewing the latest fiction, helping authors refine their manuscripts, or curating book recommendations, I believe in the transformative power of literature. My goal is to create a space where readers and writers can discover, share, and celebrate the written word.
      </p>
    </section>

    <section class="values">
      <h2>What I Believe</h2>
      <ul>
        <li>📚 Books are bridges between minds and cultures.</li>
        <li>✍️ Every story deserves to be told with clarity and heart.</li>
        <li>🤝 Collaboration fuels creativity and growth.</li>
      </ul>
    </section>

    <footer class="about-footer">
      <p>Want to collaborate or just talk books?</p>
      <a href="/contact" class="cta-button">Reach Out</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-page {
  padding: 3rem 2rem;
  font-family: 'Merriweather', serif;
  background-color: #fdfaf6;
  color: #2c3e50;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.2rem;
  color: #555;
}

.bio, .values {
  max-width: 800px;
  margin: 0 auto 3rem;
}

.bio h2, .values h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.bio p {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.values ul {
  list-style: none;
  padding: 0;
}

.values li {
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.about-footer {
  text-align: center;
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
</style>
