import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import * as grpcWeb from 'grpc-web';
import { EcoEnergyRequest, EcoEnergy } from './proto/energy_pb';
import { SolarServiceClient } from './proto/EnergyServiceClientPb';

//Make connetion to grpc server and get stream of messages
const SolarService = new SolarServiceClient('http://localhost:9090');
const request = new EcoEnergyRequest();
request.setYear(2020);

const stream = SolarService.getEcoEnergyByParams(request, {"Access-Control-Allow-Origin": "*"})
stream.on('data', (response: EcoEnergy) => {
	console.log(response.toObject());
});
stream.on('status', (status: grpcWeb.Status) => {
	console.log(status);
});
stream.on('end', () => {
	console.log('end');
});
// stream.cancel();

function App() {
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
