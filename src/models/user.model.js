import mongoose, { Schema } from "mongoose";
import JWT from "jsonwebtoken"
import bcrypt from 'bcrypt'

const userSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
         index: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
      },
      fullName: {
         type: String,
         required: true,
         lowercase: true,
         trim: true,
         index: true,
      },
      avatar: {
         type: String,//cloudlary url: 
         required: true,

      },
      coverImage: {
         type: String,//cloudnary url
      },
      watchHistory: [
         {
            type: Schema.Types.ObjectId,
            ref: "video"
         }
      ],
      password: {
         type: String,
         required: [true, 'password is required']
      },
      refreshToken: {
         type: String,
      },
   },
   {
      timestamps: true
   }
)

userSchema.pre("save", async function (next) {
   if (!this.isModified("password")) return next(); // check of any changes ..
   this.password = await bcrypt.hash(this.password, 10)
   next()
})


userSchema.methods.isPasswordCorrect = async function (password) {

   console.log(password + " " + this.password)
   const haspassword = await bcrypt.compare(password, this.password)
   console.log(haspassword);
   return haspassword;

   // return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
   return JWT.sign(
      {
         _id: this._id,
         email: this.email,
         username: this.username,
         fullName: this.fullName,

      },
      process.env.ACCESS_TOKEN_SECRET,
      {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
   )
}

userSchema.methods.generateRefreshToken = function () {
   return JWT.sign(
      {
         _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
   )
}

export const User = mongoose.model("User", userSchema)