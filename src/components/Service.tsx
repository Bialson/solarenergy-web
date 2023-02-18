import * as grpcWeb from 'grpc-web';
import { PowerConsumptionRequest, PowerFromHomes } from '../proto/energy_pb';
import { SolarServiceClient } from '../proto/EnergyServiceClientPb';

const SolarService = new SolarServiceClient('https://localhost:8080');

const PowerFromHomesRequest = (
	year: number,
	responseAmount: number,
	region: string,
	character: string
) => {
	const request = new PowerConsumptionRequest();
	request.setYear(year);
	request.setResponseamount(responseAmount);
	request.setRegion(region);
	request.setCharacter(character);
	const stream = SolarService.getEnergyFromHomesByParams(request, {});
	stream.on('data', (response: PowerFromHomes) => {
		console.log(response);
	});
	stream.on('status', (status: grpcWeb.Status) => {
		console.log(status);
	});
	stream.on('error', (err: grpcWeb.RpcError) => {
		console.log(err);
	});
	stream.on('end', () => {
		stream.cancel();
	});
};

export { PowerFromHomesRequest }