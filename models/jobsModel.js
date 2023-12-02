const mongoose = require("mongoose")
const Joi = require('joi')

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    qualifications: {
        type: [String],
        required: false
    },
    createdBy: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: false
    },
    client: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    },
    contract: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    skills: {
        type: [String],
        required: false
    },
    salary: {
        type: String,
        required: false,
        default: "Not Disclosed"
    }

},
    { timestamps: true }
)

const jobValidateSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    qualifications: Joi.array().items(Joi.string()),
    createdBy: Joi.string(),
    department: Joi.string(),
    client: Joi.string(),
    experience: Joi.string(),
    contract: Joi.string(),
    location: Joi.string(),
    skills: Joi.array().items(Joi.string()),
    salary: Joi.string().optional().default("Not Disclosed")
})

const Job = mongoose.model('Job', jobSchema)
const validateJob = (job) => {
    return jobValidateSchema.validate(job)
}

module.exports = { Job, validateJob }