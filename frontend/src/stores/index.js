import { createPinia } from 'pinia';
import { defineStore } from 'pinia';

export const pinia = createPinia();

export const useJobsStore = defineStore('jobs', {
    state: () => ({
        jobs: [],
    }),
    actions: {
        async fetchJobs() {
            try {
                const response = await axios.get('http://localhost:8000/api/jobs');
                this.setJobs(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        },
        setJobs(jobs) {
            this.jobs = jobs;
        },
    },
});