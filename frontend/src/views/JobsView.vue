<template>
  <main class="">
    <!-- filters section -->
    <JobsFilter />
    <!-- <h1 class="text-center">Browse Jobs</h1> -->
    <AllJobs />
  </main>
</template>

<script>
import Labels from '@/components/Jobs/Labels.vue'
import Navbar from '@/components/Jobs/Navbar.vue'
import JobsFilter from '@/components/Jobs/JobsFilter.vue'
import AllJobs from '@/components/Jobs/AllJobs.vue'

export default {
  components: {
    JobsFilter,
    Labels,
    Navbar,
    AllJobs
  }
}
</script>
