<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import AboutUs from './components/AboutUs.vue'
import WelcomeItem from './components/WelcomeItem.vue'
import DocumentationIcon from './components/icons/IconDocumentation.vue'
import ToolingIcon from './components/icons/IconTooling.vue'
import EcosystemIcon from './components/icons/IconEcosystem.vue'
import CommunityIcon from './components/icons/IconCommunity.vue'
import SupportIcon from './components/icons/IconSupport.vue'

const msg = 'Experiences'
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <main>
    <!-- Top-level heading -->
    <div class="resume-title">
      <h1>My Resume</h1>
    </div>

    <header>
      <img alt="Pfp Logo" class="logo" src="./assets/pfp.png" width="125" height="125" />
      <div class="wrapper">
        <HelloWorld msg="Welcome!" />
      </div>
    </header>

    <TheWelcome />

    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
      <h3>
        List of information about me.
      </h3>
    </div>

    <WelcomeItem>
      <template #icon><DocumentationIcon /></template>
      <template #heading>Contact</template>
      <ul>
        <li>09491273241</li>
        <li>sccanlas1@student.hau.edu.ph</li>
        <li>City of San Fernando</li>
      </ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon><ToolingIcon /></template>
      <template #heading>Education</template>
      <ul>
        <li>2022–2027</li>
        <li>Bachelor of Science in Information Technology</li>
        <li>Holy Angel University</li>
      </ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon><EcosystemIcon /></template>
      <template #heading>Links</template>
      <ul>
        <li><a href="https://sebastiancanlas.com" target="_blank">sebastiancanlas.com</a></li>
        <li><a href="https://linkedin.com/in/sebastiancanlas" target="_blank">LinkedIn</a></li>
        <li><a href="https://facebook.com/sbcnls" target="_blank">Facebook</a></li>
      </ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon><CommunityIcon /></template>
      <template #heading>Internships</template>
      <ul>
        <li>
          <strong>Web Development Intern</strong> – ABC Tech Solutions<br />
          <em>June 2023 – August 2023</em><br />
          Assisted in building responsive websites using HTML, CSS, and Vue.js.
        </li>
        <li>
          <strong>IT Support Intern</strong> – XYZ Corporation<br />
          <em>January 2023 – April 2023</em><br />
          Provided technical support and helped maintain internal systems.
        </li>
        <li>
          <strong>Digital Marketing Intern</strong> – Creativa Agency<br />
          <em>July 2022 – September 2022</em><br />
          Managed social media campaigns and analyzed engagement metrics.
        </li>
      </ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon><SupportIcon /></template>
      <template #heading>Skills</template>
      <AboutUs />
    </WelcomeItem>
  </main>
</template>

<style scoped>
.resume-title {
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.greetings {
  margin: 2rem 0;
  text-align: center;
}

.greetings h1 {
  font-weight: 500;
  font-size: 2.6rem;
  margin-bottom: 0.5rem;
}

.greetings h3 {
  font-size: 1.2rem;
  color: #555;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .greetings {
    text-align: left;
  }
}

</style>
