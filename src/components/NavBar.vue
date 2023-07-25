<script setup>
</script>
<template>
    <nav>
        <div>
            <router-link to="/">
                <img src="../assets/Logo.svg" alt="">
            </router-link>
        </div>
        <ul>
            <router-link to="/path">All Paths</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </ul>

    </nav>
</template>
<style scoped>

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    height: 10vh;
    background-color: #fff;
    /* border-bottom: 2px solid #9D9D9D; */
}

nav div{
    display: flex;
    align-items: center;
}

nav div img{
    width: 150px;
}

nav ul{
    display: flex;
    align-items: center;
}


nav ul a{
    margin-left: 2rem;
    text-decoration: none;
    color: #9D9D9D;
    font-weight: 300;
    font-size: 1rem;
}

nav ul a:hover{
    color: #9D9D9D;
}

nav ul a.router-link-exact-active{
    color: #000;
}

nav ul a.router-link-exact-active:hover{
    color: #000;
}



</style>