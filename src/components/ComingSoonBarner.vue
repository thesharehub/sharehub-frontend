<template>
  <div class="barner">
    <span class="new">Coming soon</span>
    <p>We are coming to you soon</p>
  </div>
</template>
<style scoped>
.barner {
  background-color: #f3f4f6;
  padding: .5rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #9d9d9d;
}
.new{
    background-color: #dcfce7;
    color: #166534;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-right: 1rem; 
    font-weight: 700;
    font-size: .5rem;
}




@media (max-width: 768px) {
  .barner {
    padding: .5rem 2rem;
  }
  .new{
    font-size: .5rem;
  }
  .barner p{
    font-size: .5rem;
  }
}
</style>
