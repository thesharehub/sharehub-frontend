<script setup></script>
<template>
  <section class="qoute-how">
    <div class="qoute">
      <h1>“The key to a succesful learning environment is structure”</h1>
      <p>Cara Carroll</p>
    </div>

    <div class="step-container">
      <div class="step-container-item">
        <div class="step-container-img">
          <img src="../assets/chpath.svg" alt="" />
        </div>
        <p>Choose your path</p>
      </div>

      <div class="step-container-item">
        <div class="step-container-img">
          <img src="../assets/seRes.svg" alt="" />
        </div>
        <p>See the resources</p>
      </div>

      <div class="step-container-item">
        <div class="step-container-img">
          <img src="../assets/fopath.svg" alt="" />
        </div>
        <p>Follow the path</p>
      </div>
    </div>
  </section>
</template>
<style scoped>

.qoute-how {
  padding: 0 5rem;
  margin: 5rem 0;
}

.qoute {
  text-align: center;
  margin-bottom: 5rem;
  width: 50%;
  margin: 0 auto;
}

.qoute h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.qoute p {
  font-size: 1rem;
  font-weight: 300;
}

.step-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 5rem;
}

.step-container-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.step-container-img {
  width: 60px;
  height: 60px;
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.step-container-img img {
  width: 100%;
}

.step-container-item p {
  font-size: 1rem;
  font-weight: 300;
}

@media screen and (max-width: 1024px) {
  .qoute-how {
    padding: 0 2rem;
  }

  .qoute {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .qoute-how {
    padding: 0 2rem;
  }

  .qoute {
    width: 100%;
  }

  .step-container {
    width: 100%;
    flex-direction: column;
  }

  .step-container-item {
    margin-bottom: 2rem;
  }
}





</style>
