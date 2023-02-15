/**
 * @fileoverview gRPC-Web generated client stub for solarservice
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.12.4
// source: energy.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as energy_pb from './energy_pb';


export class SolarServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetEnergyFromHomesByParams = new grpcWeb.MethodDescriptor(
    '/solarservice.SolarService/GetEnergyFromHomesByParams',
    grpcWeb.MethodType.SERVER_STREAMING,
    energy_pb.PowerConsumptionRequest,
    energy_pb.PowerFromHomes,
    (request: energy_pb.PowerConsumptionRequest) => {
      return request.serializeBinary();
    },
    energy_pb.PowerFromHomes.deserializeBinary
  );

  getEnergyFromHomesByParams(
    request: energy_pb.PowerConsumptionRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<energy_pb.PowerFromHomes> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/solarservice.SolarService/GetEnergyFromHomesByParams',
      request,
      metadata || {},
      this.methodDescriptorGetEnergyFromHomesByParams);
  }

  methodDescriptorGetEcoEnergyByParams = new grpcWeb.MethodDescriptor(
    '/solarservice.SolarService/GetEcoEnergyByParams',
    grpcWeb.MethodType.SERVER_STREAMING,
    energy_pb.EcoEnergyRequest,
    energy_pb.EcoEnergy,
    (request: energy_pb.EcoEnergyRequest) => {
      return request.serializeBinary();
    },
    energy_pb.EcoEnergy.deserializeBinary
  );

  getEcoEnergyByParams(
    request: energy_pb.EcoEnergyRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<energy_pb.EcoEnergy> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/solarservice.SolarService/GetEcoEnergyByParams',
      request,
      metadata || {},
      this.methodDescriptorGetEcoEnergyByParams);
  }

  methodDescriptorSeyHello = new grpcWeb.MethodDescriptor(
    '/solarservice.SolarService/SeyHello',
    grpcWeb.MethodType.UNARY,
    energy_pb.HelloReq,
    energy_pb.HelloRes,
    (request: energy_pb.HelloReq) => {
      return request.serializeBinary();
    },
    energy_pb.HelloRes.deserializeBinary
  );

  seyHello(
    request: energy_pb.HelloReq,
    metadata: grpcWeb.Metadata | null): Promise<energy_pb.HelloRes>;

  seyHello(
    request: energy_pb.HelloReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: energy_pb.HelloRes) => void): grpcWeb.ClientReadableStream<energy_pb.HelloRes>;

  seyHello(
    request: energy_pb.HelloReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: energy_pb.HelloRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/solarservice.SolarService/SeyHello',
        request,
        metadata || {},
        this.methodDescriptorSeyHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/solarservice.SolarService/SeyHello',
    request,
    metadata || {},
    this.methodDescriptorSeyHello);
  }

}

