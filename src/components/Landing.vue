<script setup></script>
<template>
  <section class="landing">
    <span class="random"></span>
    <span class="random"></span>
    <span class="random"></span>
    <span class="random"></span>
    <span class="random"></span>
    <span class="random"></span>
    <span class="random"></span>
    <h1 class="landing-info-title">Start Your Development Journey Today</h1>
    <p class="landing-info-sub">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, quos, voluptate quod quia quae voluptatibus
      voluptas quas quibusdam, quos, voluptate quod quia quae voluptatibus
      voluptas quas
    </p>
    <button>Start Learning</button>
  </section>
</template>
<style scoped>
.landing {
  padding: 0 5rem;
  margin: 5rem 0;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.random {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 50%;
  opacity: 0.2;
}

.random:nth-child(1) {
  top: 80%;
  left: 10%;
  width: 40px;
  height: 40px;
}

.random:nth-child(2) {
  top: 20%;
  left: 70%;
  width: 20px;
  height: 20px;
}

.random:nth-child(3) {
  top: 40%;
  left: 20%;
  width: 20px;
  height: 20px;
}

.random:nth-child(4) {
  top: 60%;
  left: 60%;
  width: 20px;
  height: 20px;
}

.random:nth-child(5) {
  top: 80%;
  left: 40%;
  width: 20px;
  height: 20px;
}

.random:nth-child(6) {
  top: 10%;
  left: 40%;
  width: 20px;
  height: 20px;
}

.random:nth-child(7) {
  top: 50%;
  left: 80%;
  width: 20px;
  height: 20px;
}

.landing-info-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.landing-info-sub {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 2rem;
}

.landing button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .landing {
    padding: 0 2rem;
  }
}
</style>
