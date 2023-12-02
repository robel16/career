const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')
const { Job, validateJob } = require('../models/jobsModel')

const getJobs = asyncHandler(async (req, res) => {
    let { page, limit, title, experience, location, sortBy } = req.query
    limit = Number(limit) || 10
    page = Number(page) || 1
    const skip = (page - 1) * limit
    const filter = {}
    let query;
    if (title) {
        filter.title = title
    }
    if (experience) {
        filter.experience = experience
    }
    if (location) {
        filter.location = location
    }
    query = await Job.find(filter).skip(skip).limit(Number(limit))
    let totalJobs = await Job.countDocuments(filter);
    const totalPages = Math.ceil(totalJobs / Number(limit))
    const response = {
        allRecords: totalJobs,
        pages: totalPages,
        currentPage: page,
        records: query
    }
    res.status(200).json(response)
})

const getJob = asyncHandler(async (req, res) => {
    let jobId = req.params.id
    if (!mongoose.isValidObjectId(jobId)) {
        return res.status(400).json({ error: 'Invalid job ID format' })
    }
    const job = await Job.findById(jobId)
    if (!job) {
        return res.status(400).json({ error: 'Job not found' })
    }
    return res.status(200).json(job)
})

const createJob = asyncHandler(async (req, res) => {
    const { error } = validateJob(req.body)
    if (error) {
        return res.status(400).json(error.details[0].message)
    }
    const job = await Job.create(req.body)
    return res.status(201).json(job)
})

const updateJob = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: 'Invalid job ID format' })
    }
    const job = await Job.findById(id)
    if (!job) {
        return res.status(404).json({ message: "Job not found" })
    }
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
        new: true
    })
    res.status(200).json(updatedJob)
})

const deleteJob = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: 'Invalid job ID format' })
    }
    const job = await Job.findById(id)
    if (!job) {
        return res.status(404).json({ message: "Job not found" })
    }
    await Job.findByIdAndDelete(id)
    res.status(200).json({
        id: req.params.id,
        name: job.title
    })
})
module.exports = { getJobs, getJob, createJob, updateJob, deleteJob }