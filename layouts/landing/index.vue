<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
</script>
<template>
    <Navbar />
    <NuxtPage />
    <Footer />
</template>
<style>
:root {
    /* root element */
    --header-height: 65px
}
</style>