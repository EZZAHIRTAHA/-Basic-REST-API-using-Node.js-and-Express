const express = require('express')
const { getGoals, setGoal, updateGoal, deleteGoal, getGoal } = require('../controllers/goalController')
const router = express.Router()

// => clean code 
// Two lines
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal).get(getGoal)



// Four lines
// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)



module.exports = router

