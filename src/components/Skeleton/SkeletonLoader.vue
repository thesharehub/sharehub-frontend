<template>
  <div class="path-modules skeleton-loader">
    <div class="path-modules-top">
      <div>
        <div class="skeleton-text skeleton-text-long"></div>
        <div class="skeleton-text skeleton-text-short"></div>
      </div>
      <div class="skeleton-btn skeleton-btn-long"></div>
    </div>
    <div class="path-modules-bottom">
      <div class="skeleton-text skeleton-text-long"></div>
    </div>
  </div>
</template>

<style scoped>
  
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

.skeleton-btn {
  background-color: #e0e0e0;
  height: 2rem;
  width: 8rem;
  border-radius: 5px;
  margin-left: auto;
}
</style>
