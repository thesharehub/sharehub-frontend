<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import ComingSoonBarner from "./components/ComingSoonBarner.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>

    <ComingSoonBarner />
    <header>
      <NavBar />
    </header>
    <RouterView class="content"/>
    <Footer />
  </div>
</template>

<style scoped>

</style>
