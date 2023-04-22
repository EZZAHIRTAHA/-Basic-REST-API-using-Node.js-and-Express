const asyncHandler = require('express-async-handler')

const Goal = require('../models/GoalsModel') 
const User = require('../models/UserModel')
//@desc Get Goals
//@route GET api/Goals
//@access Private => After adding middleware 'auth'
const getGoals =  asyncHandler( async (req, res) => {
            // Protect Routes => { user: req.user.id }
    const goals = await Goal.find({ user: req.user.id })

    res.status(200).json(goals)  
    })

const getGoal =  asyncHandler( async (req, res) => {
    // const goal = await Goal.findOne(req.params.id)
    const goal = await Goal.findOne({ _id: req.user.id });


    res.status(200).json(goal)  
    })

    
    


//@desc Create Goals
//@route POST api/Goals
//@access Private => After adding middleware 'auth'
const setGoal =  asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)/*.json({message: "Please Add A Text Field"})*/
        throw new Error("Please Add A Text Field")  
    }
        const goal = await Goal.create({
            text: req.body.text,
            // Protect Routes
            user: req.user.id
        })
    res.status(200).json(goal)  
})


//@desc Update Goal
//@route PUT api/Goals/:id
//@access Private => After adding middleware 'auth'
const updateGoal = asyncHandler (async  (req, res) => {

    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(404)
        throw new Error('aie aie aie! Goal Not Found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User Not Authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json({updatedGoal})  
    })

//@desc Delete Goal
//@route DELETE api/Goals/:id
//@access Private => After adding middleware 'auth'
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      return res.status(404).json({ error: 'Goal not found' });
    }
    
    

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User Not Authorized')
    }




    await Goal.deleteOne({ _id: req.params.id });
    return res.status(200).json({ id: req.params.id });
  });
  
module.exports = {
    getGoals,
    getGoal,
    setGoal,
    deleteGoal, 
    updateGoal
}

