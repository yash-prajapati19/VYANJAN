const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const AdminSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  accountVerifyToken: String,

  accountVerifyTokenExpiration: Date,

  isVerified: {
    type: Boolean,
    default: false,
  },

},
  { timestamps: true }
)

AdminSchema.pre('save', async function(){
  await bcrypt.hash(this.password, 10)
    .then((data) => {
      this.password = data
    })
    .catch((err)=> {
      console.log(err);
    })
    return
})

const AdminData = new mongoose.model('AdminData', AdminSchema)

module.exports = AdminData