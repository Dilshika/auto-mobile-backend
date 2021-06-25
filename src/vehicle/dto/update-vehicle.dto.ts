/* eslint-disable prettier/prettier */
import { UpdateVehicleInput } from "../../graphql";

export class UpdateVehicleDto extends UpdateVehicleInput{
    firstName:string
    lastName:string
    email:string
    carMake:string
    carModel:string
    vinNumber:string
    manufacturedDate:string
    ageOfVehicle:number
}