import { Chart } from "./ComposedChart";
import '../styles/_content.scss'

export const Content = () => {
    return (
        <div className="content">
            <Chart width="50%" height="50%"/>
        </div>
    );
};