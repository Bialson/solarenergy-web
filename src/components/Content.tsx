import { Chart } from "./ComposedChart";
import '../styles/_content.scss'
import { useEffect } from "react";
import { PowerFromHomesRequest } from "./Service";

const EnergyResponse = [];
const EnergyPerHome = [];
const EnergyPerPerson = [];

const MAX_REQUESTS = 204;

export const Content = () => {
    useEffect(() => {
        PowerFromHomesRequest(2020, MAX_REQUESTS, "", "");
    }, []);
    return (
        <div className="content">
            <Chart width="50%" height="50%"/>
        </div>
    );
};