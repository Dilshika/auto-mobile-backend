/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Vehicle, VehicleDataConn } from '../../graphql';
import { gql,request } from 'graphql-request';
import { UpdateVehicleDto } from '../dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
     endpoint='http://localhost:5000/graphql';

    async getFilteredVehicles(orderBy:string,first:number,offset:number,VehicleModel:string):Promise<[VehicleDataConn]>{
        
        const query=gql`
        query findAll($first:Int!,$offset:Int!,$orderBy:[VehiclesOrderBy!],$VehicleModel:String!) {
            allVehicles( 
                first:$first
                offset:$offset
                orderBy:$orderBy
                filter:{carModel:{startsWith:$VehicleModel}}
            ){
                nodes{
                    id
                    firstName
                    lastName
                    email
                    carMake
                    carModel
                    manufacturedDate
                    vinNumber
                    ageOfVehicle
                }
            totalCount
            }
        }

        `;
        const variables={
            "orderBy":orderBy,
            "first":first,
            "offset":offset,
            "VehicleModel":VehicleModel
        };

        const response= await request(this.endpoint,query,variables);
        return response.allVehicles;
    }

    async findOne(id:number):Promise<Vehicle>{
        const query=gql`
        query getVehicle($id:Int){
            vehicleById(id:$id){
                nodes{
                    id
                    firstName
                    lastName
                    email
                    carMake
                    carModel
                    manufacturedDate
                    vinNumber
                    ageOfVehicle 
                }
            }
        }`

        const variables={
            "id":id
        }

        const response=await request(this.endpoint,query,variables);
        return response.vehicleById.nodes;
    }

    async updateVehicle(id:number,updateVehicleInput:UpdateVehicleDto){
        const query=gql`
        mutation update($id:Int!,$updateVehicleInput:UpdateVehicleInput!) {
            updateVehicleById(
                id:$id
                input: {vehiclePatch: {$updateVehicleInput}
                ) {
              vehicle {
                ageOfVehicle
                carMake
                carModel
                email
                firstName
                id
                lastName
                manufacturedDate
                nodeId
                vinNumber
              }
            }
          }
        `
        const variables={
            "id":id,
            "updateVehicleInput":updateVehicleInput
        }
        const response=await request(this.endpoint,query,variables);
        return `${id} vehicle Updated Sucessfully`;
        
    }

    async deleteVehicle(id: number) {
        const query=gql`
        mutation delete($id:Int!){
          deleteVehicleById(input:{id:$id})
        }`

        const variables={
            "id":id
        }
        await request('http://localhost:5000/graphql',query,variables);
        return `Deleted ${id} vehicle`;
      }


}
