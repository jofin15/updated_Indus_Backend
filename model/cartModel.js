// // import mongoose from "mongoose";
// // import { Schema } from "mongoose";

// // const cartSchema = new Schema({
// //     quantity:{type:Number,required:true},
// //     product:{type:mongoose.Schema.ObjectId,ref:"Product",required:true},
// //     user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
// // });

// // //ref part is very important

// // const virtual = cartSchema.virtual("id");
// // virtual.get(function () {
// //   return this._id;
// // });

// // cartSchema.set("toJSON", {
// //   virtuals: true,
// //   versionKey: false,
// //   transform: function (doc, ret) {
// //     delete ret._id;
// //   },
// // });

// // export const Carts = mongoose.model("Carts", cartSchema);

// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const cartSchema = new Schema({
//   quantity: { type: Number, required: true },
//   // product: { type: mongoose.Schema.ObjectId, ref: "product", required: true },
//   // user: { type: mongoose.Schema.ObjectId, ref: "user", required: true },

//   title: { type: String, required: true, unique: true },
//   price: {
//     type: Number,
//     min: [0, "Wrong Price"],
//     max: [100000, "Wrong Max Price"],
//     required: true,
//   },
//   discountPercentage: {
//     type: Number,
//     min: [0, "Wrong min discount"],
//     max: [99, "Wrong Max discount"],
//     required: true,
//   },
//   brand: { type: String, required: true },
//   category: { type: String, required: true },
//   thumbnail: { type: String, required: true },
//   deleted: { type: Boolean, default: false },
//   id: { type: mongoose.Schema.ObjectId, required: true },
//   user: { type: mongoose.Schema.ObjectId, required: true },

// });

// // // Define a virtual for id
// // cartSchema.virtual("id").get(function () {
// //   return this._id.toHexString();
// // });

// // // Ensure virtual fields are included in JSON output and remove the version key
// // cartSchema.set("toJSON", {
// //   virtuals: true,
// //   versionKey: false,
// //   transform: function (doc, ret) {
// //     delete ret._id;
// //     delete ret.__v; // Remove the version key as well
// //   },
// // });


// export const Carts = mongoose.model("Carts", cartSchema);


import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
  quantity: { type: Number, required: true },
  productId: { type: mongoose.Schema.ObjectId, required: true }, // Renamed from id to productId
  title: { type: String, required: true },
  price: {
    type: Number,
    min: [0, "Wrong Price"],
    max: [100000, "Wrong Max Price"],
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong min discount"],
    max: [99, "Wrong Max discount"],
    required: true,
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  deleted: { type: Boolean, default: false },
  user: { type: mongoose.Schema.ObjectId, required: true },
});

// Define a virtual for id
cartSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included in JSON output and remove the version key
cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.__v; // Remove the version key as well
  },
});

export const Carts = mongoose.model("Carts", cartSchema);
