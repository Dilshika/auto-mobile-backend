
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateVehicleInput {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vinNumber: string;
    manufacturedDate: string;
    ageOfVehicle: number;
}

export class UpdateVehicleInput {
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vinNumber: string;
    manufacturedDate: string;
    ageOfVehicle: number;
}

export abstract class IQuery {
    abstract findAll(orderBy: string, first: number, offset: number): Vehicle[] | Promise<Vehicle[]>;

    abstract getFilteredVehicles(orderBy: string, first: number, offset: number, VehicleModel: string): VehicleDataConn | Promise<VehicleDataConn>;

    abstract findOne(id: number): Vehicle | Promise<Vehicle>;
}

export abstract class IMutation {
    abstract createVehicle(CreateVehicleInput: CreateVehicleInput): Vehicle | Promise<Vehicle>;

    abstract updateVehicle(updateVehicleInput: UpdateVehicleInput): Vehicle | Promise<Vehicle>;

    abstract deleteVehicle(id: number): Vehicle | Promise<Vehicle>;
}

export class VehicleDataConn {
    nodes: Vehicle[];
    totalCount: number;
}

export class Vehicle {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    carMake: string;
    carModel: string;
    vinNumber: string;
    manufacturedDate: string;
    ageOfVehicle: number;
}
