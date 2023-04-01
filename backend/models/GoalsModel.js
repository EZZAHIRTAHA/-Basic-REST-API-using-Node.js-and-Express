
const mongoose = require('mongoose')



const goalSchema = mongoose.Schema({
    // text: String => This or...
    // this
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ReferenceError
    },
    text: {
        type: String,
        required: [true, 'Please Add A Text Value']
    }
}, {
    timestapms: true
})

module.exports = mongoose.model('Goal', goalSchema)