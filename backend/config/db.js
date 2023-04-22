const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/mernApp')
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log('Error !')
        process.exit(1)
    }
}
module.exports =  connectDB



// const mongoose = require('mongoose')

// const connectDB = async() => {
//     try{
//         const conn = await mongoose.connect('mongodb://127.0.0.1:27017/mernApp')
//         console.log(`MongoDB connected:${conn.connection.host}`);
//     }
//     catch{
//         console.log('Error !');
//         process.exit(1)
//     }
// }
// module.exports = connectDB