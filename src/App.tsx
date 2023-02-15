// import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import * as grpcWeb from 'grpc-web';
import { HelloReq, HelloRes } from './proto/energy_pb';
import { SolarServiceClient } from './proto/EnergyServiceClientPb';

const echoService = new SolarServiceClient('http://localhost:8081');

const request = new HelloReq();
request.setName('World');

const call = echoService.seyHello(request, {"Access-Control-Allow-Origin": "*"}, (err: grpcWeb.RpcError, response: HelloRes) => {
    console.log(response);
    if(err) {
        console.log(err)
    }
});
call.on('status', (status: grpcWeb.Status) => {
    console.log(status);
});

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
