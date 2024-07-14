const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },   // (unique: true) cause an error 
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: {type:String, enum: ["Male", "Female", "Rather not to say"], default: "Rather not to say"},
    // img: { type: String },
  },
  { timestamps: true }
);

// Pre-save to hash the password
userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords 4 validtion 
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('user', userSchema);