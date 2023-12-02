<script setup>
import Navbar from '@/components/Jobs/Navbar.vue'
</script>

<template>
  <div class="bg-veryLightGrey pb-3 font-sans">
    <header>
      <Navbar />

      <!-- <div class="p-10">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/jobs">Jobs</RouterLink>
        </nav>
      </div> -->
      <RouterView />
    </header>
  </div>
</template>

