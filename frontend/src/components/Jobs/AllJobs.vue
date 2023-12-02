<template>
  <div class="flex">
    <div
      :class="{
        'w-full transition-all duration-300 ease-in-out': !jobClicked,
        'w-3/4 transition-all duration-300 ease-in-out': jobClicked
      }"
      class="flex flex-col gap-5 py-3 transform origin-left"
    >
      <SingleJob
        v-for="job in jobs.jobList"
        :key="job._id"
        @jobClick="handleJobClick"
        :selected="selectedJob === index + 1"
        :job="job"
      />
    </div>
    <JobDetails :selectedJob="selectedJob" v-if="jobClicked" @closeDetails="handleCloseDetails" />
  </div>
</template>

<script>
import JobDetails from './JobDetails.vue'
import SingleJob from './SingleJob.vue'
import { getJobs } from '../../services/JobsService'
import { useJobStore } from '../../stores/JobStore'

export default {
  components: {
    SingleJob,
    JobDetails
  },
  data() {
    return {
      jobClicked: false,
      selectedJob: null,
      jobs: {}
    }
  },
  computed: {
    sortedJobs() {
      return this.jobs.records.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
  },
  async created() {
    // try {
    //   const response = await getJobs()
    //   // const response = await axios.get('http://localhost:8000/api/jobs')
    //   this.jobs = response.data
    // } catch (err) {
    //   console.error('Error fetching jobs:', err)
    // }
    const jobStore = useJobStore()
    await jobStore.fetchJobs()
    this.jobs.jobList = jobStore.jobList
  },
  methods: {
    handleJobClick(jobId) {
      this.jobClicked = true
      this.selectedJob = jobId
    },
    handleCloseDetails() {
      this.jobClicked = false
      this.selectedJob = null
    }
  }
}
</script>

<style>
</style>