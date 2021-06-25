/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VehicleService } from './service/vehicle.service';
import { VehicleResolver } from './resolver/vehicle.resolver';

@Module({
  providers: [VehicleService, VehicleResolver]
})
export class VehicleModule {}
