const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, getAllUser, updateUser, deleteUser, addAdmin } = require('../../controllers/userController')
const { protect } = require('../../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/', protect, getAllUser)
router.put('/:id', protect, updateUser)
router.post('/addadmin', protect, addAdmin)
router.delete('/:id', protect, deleteUser)


module.exports = router