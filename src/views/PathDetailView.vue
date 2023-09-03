<script setup>
import { onMounted, ref } from "vue";
import ModuleCard from "../components/ModuleCard.vue";
import ModuleSkeleton from "../components/Skeleton/ModuleSkeleton.vue";
import SkeletonLoader from "../components/Skeleton/SkeletonLoader.vue";

const props = defineProps({
  pathSlug: {
    type: String,
    required: true,
  },
});

const pathSlug = ref(props.pathSlug);

const pathDetails = ref(null);
const pathModules = ref(null);

const fetchPathDetails = async () => {
  const response = await fetch(
    `http://localhost:5000/api/v1/learning-paths/${pathSlug.value}`
  );
  const result = await response.json();
  pathDetails.value = result.data;
  pathModules.value = result.data.modules;
  console.log(pathModules.value);
};

onMounted(() => {
  // wait 3 seconds before fetching data
  setTimeout(() => {
    fetchPathDetails();
  }, 500);
});
</script>
<template>
  <section class="path-detail-container" v-if="pathDetails">
    <div class="path-detail-main">
      <h1>{{ pathDetails.name }}</h1>
      <p>{{ pathDetails.description }}</p>
    </div>
    <div class="path-modules-container">
      <ModuleCard
        v-for="modules in pathModules"
        :key="modules.id"
        :modules="modules"
        :pathSlug="pathSlug"
      />
    </div>
  </section>
  <section v-else>
    <ModuleSkeleton />
  </section>
</template>
<style scoped>
.path-detail-container {
  padding: 5rem 2rem;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
}

.path-detail-main {
  margin-bottom: 5rem;
}

.path-detail-main h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.path-detail-main p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
}

.path-modules-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
