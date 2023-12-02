const express = require('express')
const jobRoutes = require('./routes/api/jobRoutes')
const userRoutes=require('./routes/api/userRoutes')
const cors = require('cors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

const app = express()

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/jobs', jobRoutes)
app.use('/api/user',userRoutes)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))