import '../styles/_widgets.scss';
import { PieChart } from 'react-minimal-pie-chart';
import {
	PowerFromHomes,
	EcoEnergy,
} from '../proto/energy_pb';

const SemiPieChart = ({
	title,
	value,
	region,
	object,
}: {
	title: string;
	value: number;
	region: string;
	object: PowerFromHomes.AsObject | EcoEnergy.AsObject | undefined;
}): JSX.Element => {
	return (
		<div className="widget">
			<div className="widget-content">
				<div className="widget-title">
					<h3>{title}</h3>
				</div>
				<PieChart
					data={[{ value: value, color: '#2BEBC8' }]}
					lineWidth={15}
					reveal={-100}
					animate
					rounded
					lengthAngle={-180}
					background="#151718"
					style={{ width: '90%' }}
					viewBoxSize={[100, 60]}
					label={({ dataEntry }) => dataEntry.value}
					labelStyle={{
						fontSize: '18px',
						fontFamily: 'sans-serif',
						fill: '#FFF',
					}}
					labelPosition={0}
				/>
				<p className="widget-region">{region}</p>
				<p>{JSON.stringify(object)}</p>
			</div>
		</div>
	);
};

export { SemiPieChart };
