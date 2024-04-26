import mongoose from "mongoose"
import { Schema } from "mongoose"

const productSchema=new Schema({
title:{type:String,required:true,unique:true},
description:{type:String,required:true},
price:{type:Number,min:[0,"Wrong Price"],max:[100000,"Wrong Max Price"], required:true},
discountPercentage:{type:Number,min:[0,"Wrong min discount"],max:[99,"Wrong Max discount"],required:true},
rating:{type:Number,min:[0,"wrong min rating"],max:[5,"wrong max rating"],required:true,default:0},
stock:{type:Number,required:true,min:[0,"Wrong Min Stock "],default:0},
brand:{type:String,required:true}, 
category:{type:String,required:true},
thumbnail:{type:String,required:true},
images:{type:[String],required:true},
deleted:{type:Boolean,default:false}


})

const virtual=productSchema.virtual("productId");
virtual.get(function () {
    return this._id
})

productSchema.set("toJSON",{
    virtuals:true,
    versionKey:false,
    transform:function (doc,ret) {delete ret._id}
})

export const Products=mongoose.model("Products",productSchema)