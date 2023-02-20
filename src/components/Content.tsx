import { PowerChart } from './ComposedChart';
import '../styles/_content.scss';
import { useEffect, useState } from 'react';
import * as grpcWeb from 'grpc-web';
import {
	PowerConsumptionRequest,
	PowerFromHomes,
	EcoEnergyRequest,
	EcoEnergy,
} from '../proto/energy_pb';
import { SolarServiceClient } from '../proto/EnergyServiceClientPb';
import { HighestConsumption } from './Widgets';

const SolarService = new SolarServiceClient('https://localhost:8080');

export const Content = () => {
	const [PowerFromHomesResponse, setPowerFromHomesResponse] = useState<
		Array<PowerFromHomes.AsObject>
	>([]);
	const [EcoEnergyResponse, setEcoEnergyResponse] = useState<
		Array<EcoEnergy.AsObject>
	>([]);
	const NewPowerRequest = (
		year: number,
		responseAmount: number,
		region: string,
		character: string
	) => {
		const Request = new PowerConsumptionRequest();
		const ResponseArray: Array<PowerFromHomes.AsObject> = [];
		Request.setYear(year);
		Request.setResponseamount(responseAmount);
		Request.setRegion(region);
		Request.setCharacter(character);
		const stream = SolarService.getEnergyFromHomesByParams(Request, {});
		stream.on('data', (response: PowerFromHomes) => {
			ResponseArray.push(response.toObject());
		});
		stream.on('status', (status: grpcWeb.Status) => {
			console.log(status);
		});
		stream.on('error', (err: grpcWeb.RpcError) => {
			console.log(err);
		});
		stream.on('end', () => {
			stream.cancel();
			setPowerFromHomesResponse(ResponseArray);
		});
	};
	const NewEcoRequest = (
		year: number,
		responseAmount: number,
		type: string,
		unit: string
	) => {
		const Request = new EcoEnergyRequest();
		const ResponseArray: Array<EcoEnergy.AsObject> = [];
		Request.setYear(year);
		Request.setResponseamount(responseAmount);
		Request.setUnit(unit);
		Request.setType(type);
		const stream = SolarService.getEcoEnergyByParams(Request, {});
		stream.on('data', (response: EcoEnergy) => {
			ResponseArray.push(response.toObject());
		});
		stream.on('status', (status: grpcWeb.Status) => {
			console.log(status);
		});
		stream.on('error', (err: grpcWeb.RpcError) => {
			console.log(err);
		});
		stream.on('end', () => {
			stream.cancel();
			setEcoEnergyResponse(ResponseArray);
		});
	};
	useEffect(() => {
		NewPowerRequest(2020, 204, '', '');
	}, []);
	useEffect(() => {
		console.log(PowerFromHomesResponse, PowerFromHomesResponse.length);
	}, [PowerFromHomesResponse]);
	useEffect(() => {
		console.log(EcoEnergyResponse, EcoEnergyResponse.length);
	}, [EcoEnergyResponse]);
	return (
		<div className="content">
			<PowerChart
				width="100%"
				height="60%"
				data={PowerFromHomesResponse.filter(
					(item) =>
						item.unit === '[MWh]' && item.character === 'Ogółem' && item.region !== 'POLSKA'
				)}
			/>
			<div className="content-wrapper">
				<div className="content-wrapper-left"></div>
				<div className="content-wrapper-right">
					<HighestConsumption value={10} region="POLSKA" />
				</div>
			</div>
		</div>
	);
};
