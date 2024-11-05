import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    phonenumber: { type: String, required: true },
    nationality: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
