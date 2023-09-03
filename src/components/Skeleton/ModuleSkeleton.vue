<template>
  <section class="skeleton-container skeleton-loader">
    <div class="path-detail-main">
      <div class="skeleton-text skeleton-text-long pulse"></div>
      <div class="skeleton-text skeleton-text-short pulse"></div>
    </div>
    <div class="skeleton-modules-container pulse">
        <SkeletonLoader v-for="index in 4" :key="index" />
    </div>
  </section>
</template>

<script setup>
import SkeletonLoader from './SkeletonLoader.vue';
</script>

<style scoped>



.skeleton-container {
  padding: 5rem 2rem;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
}

.skeleton-modules-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skeleton-text {
  background-color: #e0e0e0;
  height: 1rem;
  border-radius: 3px;
}

.skeleton-text-long {
  width: 80%;
  margin-bottom: 0.5rem;
}

.skeleton-text-short {
  width: 50%;
}

.module-card-skeleton {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}


@keyframes pulse-animation {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
}

.pulse {
  animation: pulse-animation 1.5s infinite;
}
</style>
