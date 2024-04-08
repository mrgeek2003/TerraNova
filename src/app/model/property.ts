import { IProperty } from "../iproperty.interface";
export class Property implements IProperty{
    propertyID: number
    sellRentFlag:number
    propertyLocation:string
    propertyCity:string
    propertyName: string
    propertyImage:string
    propertyPrice: number
    propertyPriceA: string
    propertyStatus:string
    propertyFurnishType:string
    propertyLocationURL:string
    propertyType:string
    propertyBHK:number
    propertySecurity:number  
    builtArea: number
    lotArea: number
    floors: number
    propertyLandMark: string
    readyToMoveFlag:string
    propertyAGE:number
    gatedCommunity:string
    mainEnterance:string
    possessionDate:string
    discription:string
}