<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
<template>
  <footer class="footer-container">
    <div class="footer-top">
      <div class="logo-description">
        <img src="../assets/Logo.png" alt="" />
        <p>
          Creating an open source commuinty for share coding resources and
          education.
        </p>
      </div>
      <div class="same">
        <h3>About Us</h3>
        <ul>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <div class="same">
        <h3>Support</h3>
        <ul>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div class="same">
        <h3>Support</h3>
        <ul>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {{ currentYear }} ShareHub. All rights reserved.</p>
    </div>
  </footer>
</template>
<style scoped>
.footer-container {
  padding: 5rem 5rem 2rem 5rem;
  /* margin: 5rem 0; */
  background: #f4f4f4;
}

.footer-top {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  /* padding-inline: 2rem; */
}

.logo-description {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
}

.logo-description img {
  width: 150px;
  margin-bottom: 1rem;
}

.logo-description p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
}

.same {
  display: flex;
  flex-direction: column;
}

.same h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.same ul {
  list-style: none;
}

.same ul li {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid #9d9d9d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-bottom p {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {

    .footer-container{
        padding: 5rem 2rem 2rem 2rem;
    }
  .footer-top {
    grid-template-columns: repeat(2, 1fr);
  }

  
}

@media (max-width: 500px) {

    .footer-container{
        padding: 2rem;
    }
  .footer-top {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
