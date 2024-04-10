const mongoose=require('mongoose')

const PropertySchema=mongoose.Schema({
    propertyID: {
        type:Number,
        required:[true,'Please enter ID']
    },
    sellRentFlag:{
        type:Number,
        required:[true,'Please enter sell/rent status']
    },
    propertyLocation:{
        type:String,
        required:[true,'Please enter property location']
    },
    propertyCity:{
        type:String,
        required:[true,'Please enter property city']
    },
    propertyName: {
        type:String,
        required:[true,'Please enter propert name']
    },
    propertyImage:{
        type:String,
        required:[true,'Please upload property image']
    },
    propertyPrice: {
        type:Number,
        required:[true,'Please enter property price']
    },
    propertyPriceA: {
        type:String,
        required:[true,'Please enter property price']
    },
    propertyStatus:{
        type:String,
        required:[true,'Please enter property status']
    },
    propertyFurnishType:{
        type:String,
        required:[true,'Please enter property furnish type']
    },
    propertyLocationURL:{
        type:String,
        required:[true,'Please enter property location url']
    },
    propertyType:{
        type:String,
        required:[true,'Please enter property type']
    },
    propertyBHK:{
        type:Number,
        required:[true,'Please enter property bhk']
    },
    propertySecurity:{
        type:Number,
        required:[true,'Please enter property security']
    }  ,
    builtArea: {
        type:Number,
        required:[true,'Please enter build area']
    },
    lotArea: {
        type:Number,
        required:[true,'Please enter lot area']
    },
    floors:{
        type:Number,
        required:[true,'Please enter floors']
    },
    propertyLandMark: {
        type:String,
        required:[true,'Please enter property landmark']
    },
    readyToMoveFlag:{
        type:String,
        required:[true,'Ready to move or not']
    },
    propertyAGE:{
        type:Number,
        required:[true,'Please enter property age']
    },
    gatedCommunity:{
        type:String,
        required:[true,'Please enter details regarding gated community']
    },
    mainEnterance:{
        type:String,
        required:[true,'Please enter information of main enterence']
    },
    possessionDate:{
        type:String,
        required:[true,'Please enter possession date']
    },
    discription:{
        type:String,
        required:[true,'Please enter discription']
    }    
})
const Property=mongoose.model("Property",PropertySchema)
module.exports=Property