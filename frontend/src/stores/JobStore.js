import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getJobs } from '../services/JobsService';

export const useJobStore = defineStore('jobs', () => {
    const jobList = ref([]);

    async function fetchJobs() {
        const { data } = await getJobs();
        jobList.value = data.records;
    }

    //   const filterInterviewer = computed(() =>
    //   schedules.value.filter((user) => user.role == 'Interviewer')
    //   );

    return { jobList, fetchJobs };
});

