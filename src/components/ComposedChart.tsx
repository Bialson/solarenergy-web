import {
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	ComposedChart,
	BarChart
} from 'recharts';
import { PowerFromHomes, EcoEnergy } from '../proto/energy_pb';

const CustomizedAxisTick = (props: any): JSX.Element => {
	const { x, y, payload } = props;
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={16}
				textAnchor="end"
				fill="#666"
				transform="rotate(-45)"
				fontWeight={500}
				fontSize={11}
			>
				{payload.value}
			</text>
		</g>
	);
};

export const PowerChart = ({
	width,
	height,
	data,
}: {
	width: string;
	height: string;
	data: Array<PowerFromHomes.AsObject | EcoEnergy.AsObject>;
}) => {
	console.log(data.length);
	return (
		<ResponsiveContainer
			width={width}
			height={height}
			className="responsive-container"
		>
			{/* <ComposedChart
				data={data}
				margin={{ top: 40, right: 60, left: 90, bottom: 20 }}
			>
				<XAxis
					type="category"
					stroke="#aaaaaa"
					dataKey="region"
					tick={<CustomizedAxisTick />}
					minTickGap={1}
				/>
				<YAxis type="number" tickMargin={10} stroke="#aaaaaa" />
				<Tooltip
					cursor={{ fill: '#81829181' }}
					labelStyle={{ color: '#000' }}
				/>
				<Legend />
				<Bar dataKey="value" fill="#2BEBC8" barSize={8} />
			</ComposedChart> */}
			<BarChart
				data={data}
				margin={{ top: 40, right: 40, left: 50, bottom: 20 }}
			>
				<XAxis
					stroke="#aaaaaa"
					dataKey="region"
					tick={<CustomizedAxisTick />}
					height={100}
					padding={{left: 0}}
					interval={0}
					label={{ value: 'Region', position: 'insideBottomRight', offset: 0 }}
				/>
				<YAxis />
				<Tooltip
					cursor={{ fill: '#7e7e7e96' }}
					labelStyle={{ color: '#000' }}
				/>
				<Legend verticalAlign='top' height={36}/>
				<Bar dataKey="value" name='Energia elektryczna [MWh]' fill="#6846EC" barSize={10} />
			</BarChart>
		</ResponsiveContainer>
	);
};
