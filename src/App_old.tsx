// import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import * as grpcWeb from 'grpc-web';
import { PowerConsumptionRequest, PowerFromHomes} from './proto/energy_pb';
import { SolarServiceClient } from './proto/EnergyServiceClientPb';

const HelloService = new SolarServiceClient('https://localhost:8080');
const req = new PowerConsumptionRequest();
req.setYear(2020);
req.setResponseamount(204);
const stream = HelloService.getEnergyFromHomesByParams(req, {});
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

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
