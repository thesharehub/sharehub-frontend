<script setup>
import { ref } from "vue";

const paths = ref([
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Frontend developers create the user interface and look and feel of websites and applications.",
    icon: "../assets/front-end.png",
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "Backend developers are responsible for server-side web application logic and integration of the work front-end developers do.",
    icon: "../assets/backend.png",
  },
  {
    id: 3,
    title: "Cloud Computing",
    description:
      "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.",
    icon: "../assets/cloud-service.png",
  },
]);
</script>
<template>
  <section class="featured-path">
    <h2 class="featured-path-header">Featured Path</h2>
    <div class="feature-grid">
      <div class="feature-card" v-for="path in paths" :key="path.id">
        <img :src="path.icon" alt="" />
        <h3>{{ path.title }}</h3>
        <p>{{ path.description }}</p>
        <button>Explore</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.featured-path {
  padding: 0 5rem;
  margin: 5rem 0;
  /* background: #9d9d9d; */
}

.featured-path-header {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid #9d9d9d;
  border-radius: 5px;
  text-align: center;
}

.feature-card img {
  width: 100px;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.feature-card p {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.feature-card button {
  padding: 1rem 2rem;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .featured-path {
    padding: 0 2rem;
  }
  .feature-grid {
    grid-template-columns: 1fr;
  }
}


</style>
