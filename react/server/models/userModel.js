const mongoose = require('mongoose')

// Firebase
// const userSchema = mongoose.Schema(
//     {
//       name: {
//         type: String,
//         required: true,
//       },
//       email: {
//         type: String,
//         required: true,
//         unique: true,
//       },
//     },
//     {
//       timestamps: true,
//     }
//   );


// module.exports = mongoose.model("User", userSchema);


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name field id required !"]
  },
  email: {
    type: String,
    required: [true, "The email field is required !"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "The password field is required"]
  }
},
{
  timeStamps: true
}
)


module.exports = mongoose.model('User', userSchema)