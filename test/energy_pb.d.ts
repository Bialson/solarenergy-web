import * as jspb from 'google-protobuf'



export class HelloReq extends jspb.Message {
  getName(): string;
  setName(value: string): HelloReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloReq.AsObject;
  static toObject(includeInstance: boolean, msg: HelloReq): HelloReq.AsObject;
  static serializeBinaryToWriter(message: HelloReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloReq;
  static deserializeBinaryFromReader(message: HelloReq, reader: jspb.BinaryReader): HelloReq;
}

export namespace HelloReq {
  export type AsObject = {
    name: string,
  }
}

export class HelloRes extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRes.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRes): HelloRes.AsObject;
  static serializeBinaryToWriter(message: HelloRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRes;
  static deserializeBinaryFromReader(message: HelloRes, reader: jspb.BinaryReader): HelloRes;
}

export namespace HelloRes {
  export type AsObject = {
    message: string,
  }
}

export class PowerConsumptionRequest extends jspb.Message {
  getYear(): number;
  setYear(value: number): PowerConsumptionRequest;

  getResponseamount(): number;
  setResponseamount(value: number): PowerConsumptionRequest;

  getRegion(): string;
  setRegion(value: string): PowerConsumptionRequest;

  getCharacter(): string;
  setCharacter(value: string): PowerConsumptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowerConsumptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PowerConsumptionRequest): PowerConsumptionRequest.AsObject;
  static serializeBinaryToWriter(message: PowerConsumptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowerConsumptionRequest;
  static deserializeBinaryFromReader(message: PowerConsumptionRequest, reader: jspb.BinaryReader): PowerConsumptionRequest;
}

export namespace PowerConsumptionRequest {
  export type AsObject = {
    year: number,
    responseamount: number,
    region: string,
    character: string,
  }
}

export class PowerFromHomes extends jspb.Message {
  getValue(): number;
  setValue(value: number): PowerFromHomes;

  getPeriod(): string;
  setPeriod(value: string): PowerFromHomes;

  getYear(): number;
  setYear(value: number): PowerFromHomes;

  getUnit(): string;
  setUnit(value: string): PowerFromHomes;

  getPrecision(): number;
  setPrecision(value: number): PowerFromHomes;

  getCharacter(): string;
  setCharacter(value: string): PowerFromHomes;

  getRegion(): string;
  setRegion(value: string): PowerFromHomes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowerFromHomes.AsObject;
  static toObject(includeInstance: boolean, msg: PowerFromHomes): PowerFromHomes.AsObject;
  static serializeBinaryToWriter(message: PowerFromHomes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowerFromHomes;
  static deserializeBinaryFromReader(message: PowerFromHomes, reader: jspb.BinaryReader): PowerFromHomes;
}

export namespace PowerFromHomes {
  export type AsObject = {
    value: number,
    period: string,
    year: number,
    unit: string,
    precision: number,
    character: string,
    region: string,
  }
}

export class EcoEnergyRequest extends jspb.Message {
  getYear(): number;
  setYear(value: number): EcoEnergyRequest;

  getResponseamount(): number;
  setResponseamount(value: number): EcoEnergyRequest;

  getType(): string;
  setType(value: string): EcoEnergyRequest;

  getUnit(): string;
  setUnit(value: string): EcoEnergyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EcoEnergyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EcoEnergyRequest): EcoEnergyRequest.AsObject;
  static serializeBinaryToWriter(message: EcoEnergyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EcoEnergyRequest;
  static deserializeBinaryFromReader(message: EcoEnergyRequest, reader: jspb.BinaryReader): EcoEnergyRequest;
}

export namespace EcoEnergyRequest {
  export type AsObject = {
    year: number,
    responseamount: number,
    type: string,
    unit: string,
  }
}

export class EcoEnergy extends jspb.Message {
  getValue(): number;
  setValue(value: number): EcoEnergy;

  getPeriod(): string;
  setPeriod(value: string): EcoEnergy;

  getYear(): number;
  setYear(value: number): EcoEnergy;

  getUnit(): string;
  setUnit(value: string): EcoEnergy;

  getPrecision(): number;
  setPrecision(value: number): EcoEnergy;

  getType(): string;
  setType(value: string): EcoEnergy;

  getRegion(): string;
  setRegion(value: string): EcoEnergy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EcoEnergy.AsObject;
  static toObject(includeInstance: boolean, msg: EcoEnergy): EcoEnergy.AsObject;
  static serializeBinaryToWriter(message: EcoEnergy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EcoEnergy;
  static deserializeBinaryFromReader(message: EcoEnergy, reader: jspb.BinaryReader): EcoEnergy;
}

export namespace EcoEnergy {
  export type AsObject = {
    value: number,
    period: string,
    year: number,
    unit: string,
    precision: number,
    type: string,
    region: string,
  }
}

