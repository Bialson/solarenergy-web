import * as grpcWeb from 'grpc-web';
import { useEffect, useState } from 'react';
import { PowerConsumptionRequest, PowerFromHomes } from '../proto/energy_pb';
import { SolarServiceClient } from '../proto/EnergyServiceClientPb';
import { PowerChart, SemiPieChart, RadialChart } from './Charts';
import '../styles/_content.scss';
import { Dropdown } from './Dropdown';
import { YearContext } from '../context/YearContext';
import { Loader } from './Loader';

const SolarService = new SolarServiceClient('https://localhost:8080');

const Colors = ['#2BEBC8', '#FFC700'];

export const Content = () => {
	const [PowerInRegions, setPowerFromRegions] = useState<
		Array<PowerFromHomes.AsObject>
	>([]);
	const [PowerFromRegionsMWH, setPowerFromRegionsMWH] = useState<
		Array<PowerFromHomes.AsObject>
	>([]);
	const [TotalPower, setTotalPower] = useState<
		Array<PowerFromHomes.AsObject>
	>([]);
	const [year, setYear] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
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
		setLoading(true);
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
			setTotalPower(
				ResponseArray.filter((item) => item.region === 'POLSKA').map(
					(item) => {
						item.color =
							item.character === 'Miasto' ? Colors[0] : Colors[1];
						item.key = item.value;
						item.title = item.character;
						return item;
					}
				)
			);
			setPowerFromRegionsMWH(
				ResponseArray.filter(
					(item) => item.unit === '[MWh]' && item.region !== 'POLSKA'
				)
			);
			setPowerFromRegions(
				ResponseArray.filter((item) => item.region !== 'POLSKA')
			);
			setLoading(false);
		});
	};
	useEffect(() => {
		NewPowerRequest(Number(year), 204, '', '');
	}, [year]);
	return (
		<div className="content">
			{loading && <Loader />}
			<YearContext.Provider value={{ year, setYear }}>
				<Dropdown />
			</YearContext.Provider>
			<PowerChart
				width="100%"
				height="60%"
				data={PowerFromRegionsMWH.filter(
					(item) => item.character === 'Ogółem'
				)}
			/>
			<div className="content-wrapper">
				<SemiPieChart
					title="Największe zużycie [MWh]"
					object={PowerFromRegionsMWH.reduce(
						(prev, current) =>
							prev.value > current.value ? prev : current,
						PowerFromRegionsMWH[0]
					)}
				/>
				<SemiPieChart
					title="Całkowite zużycie [MWh]"
					object={
						TotalPower.filter(
							(item) =>
								item.character === 'Ogółem' &&
								item.unit === '[MWh]'
						)[0]
					}
				/>
				<RadialChart
					data={TotalPower.filter(
						(item) =>
							item.character !== 'Ogółem' && item.unit === '[MWh]'
					)}
					title="Rozkład procentowy całkowitego zużycia"
				/>
			</div>
		</div>
	);
};
