/* eslint-disable prettier/prettier */
import { Args, Resolver,Query, Mutation } from '@nestjs/graphql';
import { VehicleDataConn } from 'src/graphql';
import { UpdateVehicleDto } from '../dto/update-vehicle.dto';
import { VehicleService } from '../service/vehicle.service';

@Resolver('Vehicle')
export class VehicleResolver {

    constructor(private readonly vehicleService:VehicleService){}

    @Query(()=>[VehicleDataConn])
    async getFilteredVehicles
    (@Args('orderBy') orderBy:string,
    @Args('first') first:number, 
    @Args('offset') offset:number,
    @Args('VehicleModel') VehicleModel:string){
        return (await this.vehicleService.getFilteredVehicles(orderBy,first,offset,VehicleModel));
    }

    @Mutation(()=>String)
    async deleteVehicle(@Args('id') id:number){
        return this.vehicleService.deleteVehicle(id).catch(
            (error)=>{
                throw new Error(error);
            }
        )
    }

    @Mutation(()=>String)
    async updateVehicle(@Args('id') id:number, @Args('updateVehicleInput') updateVehicleInput:UpdateVehicleDto){
        return this.vehicleService.updateVehicle(id,updateVehicleInput);
    }

}
