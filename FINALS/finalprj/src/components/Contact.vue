<template>
  <div class="contact-page">
    <header class="contact-header">
      <h1>Contact Me</h1>
      <p class="intro">
        Whether you're an author, publisher, fellow reader, or literary enthusiast—I'd love to hear from you.
        Let's connect and bring stories to life.
      </p>
    </header>

    <section class="contact-info">
      <h2>Reach Out</h2>
      <ul>
        <li><strong>Name:</strong> Sebastian Canlas</li>
        <li><strong>Email:</strong> <a href="mailto:sebastian@example.com">sebastian@example.com</a></li>
        <li><strong>Location:</strong> Angeles City, Philippines</li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sebastiancanlas" target="_blank">linkedin.com/in/sebastiancanlas</a></li>
      </ul>
    </section>

    <form class="contact-form" @submit.prevent="handleSubmit">
      <h2>Send a Message</h2>

      <div class="form-group">
        <label for="name">Your Name</label>
        <input v-model="form.name" type="text" id="name" required />
      </div>

      <div class="form-group">
        <label for="email">Your Email</label>
        <input v-model="form.email" type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="form.message" id="message" rows="6" required></textarea>
      </div>

      <button type="submit">Send Message</button>
      <p v-if="submitted" class="success-message">Thank you! Your message has been sent.</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    handleSubmit() {
      // Placeholder for backend integration
      console.log('Message submitted:', this.form)
      this.submitted = true
      this.form = { name: '', email: '', message: '' }
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 3rem 2rem;
  font-family: 'Merriweather', serif;
  background-color: #fdfaf6;
  color: #2c3e50;
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.intro {
  font-size: 1.1rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

.contact-info {
  max-width: 700px;
  margin: 2rem auto;
  background-color: #fff;
  padding: 1.5rem;
  border-left: 4px solid #42b983;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  border-radius: 6px;
}

.contact-info h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.contact-info a {
  color: #42b983;
  text-decoration: none;
}

.contact-form {
  max-width: 700px;
  margin: 2rem auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.contact-form h2 {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button[type="submit"] {
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button[type="submit"]:hover {
  background-color: #369f6b;
}

.success-message {
  margin-top: 1rem;
  color: #2ecc71;
  font-weight: bold;
}
</style>
