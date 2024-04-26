import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  role: { type: String, required: true,default:"user" },
  name: { type: String, required: true },
  company: { type: String, required: true },
  addresses: { type: [mongoose.Schema.Types.Mixed] },
  orders: { type: [mongoose.Schema.Types.Mixed] },
});

userSchema.virtual("id").get(function () {
  return this._id;
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const Users = mongoose.model("User", userSchema);
