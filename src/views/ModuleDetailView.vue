<script setup>
import { ref, onMounted } from "vue";
import ModuleSkeleton from "../components/Skeleton/ModuleSkeleton.vue";

const props = defineProps({
  moduleSlug: {
    type: String,
    required: true,
  },
  pathSlug: {
    type: String,
    required: true,
  },
});

const moduleSlug = ref(props.moduleSlug);
const pathSlug = ref(props.pathSlug);

const moduleDetails = ref(null);

const fetchModuleDetails = async () => {
  const response = await fetch(
    `http://localhost:5000/api/v1/learning-paths/${pathSlug.value}/modules/${moduleSlug.value}`
  );
  const result = await response.json();
  moduleDetails.value = result.data;
  console.log(moduleDetails.value);
};

onMounted(() => {
  setTimeout(() => {
    fetchModuleDetails();
  }, 500);
});
</script>

<template>
  <section class="module-detail-container" v-if="moduleDetails">
    <div class="module-detail-main">
      <h2>{{ moduleDetails.name }}</h2>
      <p>{{ moduleDetails.description }}</p>
    </div>
    <div class="module-lessons">
      <h3 class="lesson-main">Lessons</h3>
      <router-link
        class="module-lesson"
        v-for="lesson in moduleDetails.subsections"
        :key="lesson.id"
        to=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>

        <p>{{ lesson.name }}</p>
      </router-link>
    </div>
  </section>
  <section v-else>
    <ModuleSkeleton />
  </section>
</template>

<style scoped>
.module-detail-container {
  padding: 5rem 2rem;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
}

.module-detail-main {
  margin-bottom: 2rem;
}

.module-detail-main h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.module-detail-main p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
}

.module-lessons {
  margin-top: 2rem;
}

.module-lessons h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.module-lesson {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  background-color: #f5f5f5;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #000;
}

/* .module-lesson {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #000;
} */

.module-lesson svg {
  margin-right: 1rem;
  width: 1.5rem;
}

.module-lesson p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
}
</style>
