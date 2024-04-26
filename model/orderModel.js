import mongoose, { mongo } from "mongoose";
const {Schema} =mongoose 

const orderSchema=new Schema({
    
   cart:{type: [mongoose.Schema.Types.Mixed]},
   paymentMethod: { type: String, required: true},
   selectedAddress:{type: [mongoose.Schema.Types.Mixed]},
   status:{ type: String, required: true},
   totalAmount:{type: Number, required: true},
   totalItems:{type: Number, required: true},
   user:{type: [mongoose.Schema.Types.Mixed]}
})

export const Orders=mongoose.model("Order",orderSchema)