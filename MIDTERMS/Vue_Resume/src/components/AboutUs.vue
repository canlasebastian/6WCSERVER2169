<template>
  <div id="about-us">
    <div id="todo-card">
      <div class="container">
        <div class="alert alert-primary" role="alert">
          <ul class="skills-list">
            <li v-for="(skill, index) in skills" :key="index">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="stars">{{ '★'.repeat(skill.rating) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-us',
  data() {
    return {
      skills: [
        { name: 'HTML & CSS', rating: 5 },
        { name: 'JavaScript', rating: 5 },
        { name: 'Vue.js', rating: 4 },
        { name: 'React', rating: 4 },
        { name: 'Node.js', rating: 3 },
        { name: 'Git & GitHub', rating: 4 },
        { name: 'Responsive Design', rating: 5 }
      ]
    }
  }
}
</script>

<style scoped>
.skills-list {
  list-style: none;
  padding: 0;
}

.skills-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
}

.stars {
  color: #6a0dad;
}
</style>
