<script setup>
import { onMounted, ref } from "vue";

const paths = ref(null);

const fetchFeaturedPath = async () => {
  const response = await fetch("http://localhost:5000/api/v1/learning-paths");
  // only display the paths that has featured set to true
  const result = await response.json();
  paths.value = result.data.filter((path) => path.featured === true);
};

onMounted(() => {
  fetchFeaturedPath();
});
</script>
<template>
  <section class="featured-path">
    <h2 class="featured-path-header">Featured Path</h2>
    <div class="feature-grid">
      <div class="feature-card" v-for="path in paths" :key="path.id">
        <img
          src="../assets/front-end.png"
          alt=""
          v-if="path.name === 'Frontend Development'"
        />
        <img
          src="../assets/backend.png"
          alt=""
          v-if="path.name === 'Backend Development'"
        />
        <h3>{{ path.name }}</h3>
        <p>{{ path.description }}</p>
        <router-link
          :to="{ name: 'path', params: { pathSlug: path.slug } }"
          class="view-btn"
          >Get Started</router-link
        >
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

.view-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: transparent;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 300;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
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
