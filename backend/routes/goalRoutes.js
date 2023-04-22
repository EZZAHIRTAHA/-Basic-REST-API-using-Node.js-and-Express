
const express = require('express')
const { getGoals, setGoal, updateGoal, deleteGoal, getGoal } = require('../controllers/goalController')
const router = express.Router()
const { protect } = require('../middlewears/authMiddleware')

// => clean code 
// Two lines
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal).get(getGoal)



// Four lines
// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)



module.exports = router

