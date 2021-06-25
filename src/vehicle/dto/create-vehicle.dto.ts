/* eslint-disable prettier/prettier */
import { CreateVehicleInput } from "../../graphql";

export class CreateVehicleDto extends CreateVehicleInput{
    id:number
    firstName:string
    lastName:string
    email:string
    carMake:string
    carModel:string
    vinNumber:string
    manufacturedDate:string
    ageOfVehicle:number
}