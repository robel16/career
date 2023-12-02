import { apiClient } from './service';


const getJobs = (params = '') => {
    return apiClient.get(`/jobs${params}`);
};
 
const getJobsById = (id) => {
    return apiClient.get(`/jobs/${id}`);
};

const createJob = (data) => {
    return apiClient.post('/jobs', data);
};

const updateJob = (data) => {
    return apiClient.patch('/jobs', data);
};

export {
    getJobs,
    getJobsById,
    createJob,
    updateJob
};
