const Service = () => {
	
console.log('Hello World');
}

export default Service;
// import * as grpcWeb from 'grpc-web';
// import {
// 	PowerConsumptionRequest,
// 	PowerFromHomes,
// 	EcoEnergyRequest,
// 	EcoEnergy,
// } from '../proto/energy_pb';
// import { SolarServiceClient } from '../proto/EnergyServiceClientPb';

// const SolarService = new SolarServiceClient('https://localhost:8080');

// const PowerFromHomesRequest = (
// 	year: number,
// 	responseAmount: number,
// 	region: string,
// 	character: string
// ) => {
// 	const request = new PowerConsumptionRequest();
// 	request.setYear(year);
// 	request.setResponseamount(responseAmount);
// 	request.setRegion(region);
// 	request.setCharacter(character);
// 	const stream = SolarService.getEnergyFromHomesByParams(request, {});
// 	const ResponseArray: Array<PowerFromHomes.AsObject> = [];
// 	stream.on('data', (response: PowerFromHomes) => {
// 		ResponseArray.push(response.toObject());
// 	});
// 	stream.on('status', (status: grpcWeb.Status) => {
// 		console.log(status);
// 	});
// 	stream.on('error', (err: grpcWeb.RpcError) => {
// 		console.log(err);
// 	});
// 	stream.on('end', () => {
// 		stream.cancel();
// 	});
// 	return ResponseArray;
// };

// const EcoEnergyGatherRequest = (
// 	year: number,
// 	responseAmount: number,
// 	type: string,
// 	unit: string
// ) => {
// 	const request = new EcoEnergyRequest();
// 	request.setYear(year);
// 	request.setResponseamount(responseAmount);
// 	request.setUnit(unit);
// 	request.setType(type);
// 	const stream = SolarService.getEcoEnergyByParams(request, {});
// 	const ResponseArray: Array<EcoEnergy.AsObject> = [];
// 	stream.on('data', (response: EcoEnergy) => {
// 		console.log(response.toObject());
// 		ResponseArray.push(response.toObject());
// 	});
// 	stream.on('status', (status: grpcWeb.Status) => {
// 		console.log(status);
// 	});
// 	stream.on('error', (err: grpcWeb.RpcError) => {
// 		console.log(err);
// 	});
// 	stream.on('end', () => {
// 		stream.cancel();
// 	});
// 	return ResponseArray;
// };

// export { PowerFromHomesRequest, EcoEnergyGatherRequest };