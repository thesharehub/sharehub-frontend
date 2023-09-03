<script setup>
import { ref } from "vue";

const props = defineProps({
  modules: {
    type: Object,
    required: true,
  },
  pathSlug: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="path-modules">
    <div class="path-modules-top">
      <div>
        <h3>
          {{ modules.name }}
        </h3>
        <p>{{ modules.subsections.length }} lessoons</p>
      </div>
      <router-link :to="{ name: 'module', params :{pathSlug: props.pathSlug, moduleSlug: modules.slug }}" class="view-btn">View module</router-link>
    </div>
    <div class="path-modules-bottom">
      <p>{{ modules.description }}</p>
    </div>
  </div>
</template>

<style scoped>
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

.path-modules {
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.path-modules-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

@media screen and (max-width: 1024px) {

}
    
@media screen and (max-width: 768px) {

    .view-btn{
        margin-top: 1rem;
    }

    .path-modules{
        text-align: center;
    }
    .path-modules-top {
        flex-direction: column;
        text-align: center;
    }
}


.path-modules-top h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.path-modules-bottom {
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

</style>
