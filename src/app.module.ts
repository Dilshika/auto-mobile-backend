/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths:['./**/*.graphql'],
      installSubscriptionHandlers:true,
      definitions:{
        path:join(process.cwd(),'src/graphql.ts'),
        outputAs:'class',
      }
    }),
    VehicleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
