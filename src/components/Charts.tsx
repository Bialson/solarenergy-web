import { useState } from 'react';
import {
	PieChart,
} from 'react-minimal-pie-chart';
import {
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	BarChart,
} from 'recharts';
import { PowerFromHomes, EcoEnergy } from '../proto/energy_pb';
import '../styles/_widgets.scss';

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

const PowerChart = ({
	width,
	height,
	data,
}: {
	width: string;
	height: string;
	data: Array<PowerFromHomes.AsObject | EcoEnergy.AsObject>;
}): JSX.Element => {
	console.log(data.length);
	return (
		<ResponsiveContainer
			width={width}
			height={height}
			className="responsive-container"
		>
			<BarChart
				data={data}
				margin={{ top: 40, right: 40, left: 50, bottom: 20 }}
			>
				<XAxis
					stroke="#aaaaaa"
					dataKey="region"
					tick={<CustomizedAxisTick />}
					height={100}
					padding={{ left: 0 }}
					interval={0}
					label={{
						value: 'Region',
						position: 'insideBottomRight',
						offset: 0,
					}}
				/>
				<YAxis />
				<Tooltip
					cursor={{ fill: '#d8d8d844' }}
					labelStyle={{ color: '#000' }}
				/>
				<Legend verticalAlign="top" height={36} />
				<Bar
					dataKey="value"
					name="Energia elektryczna [MWh]"
					fill="#6846EC"
					barSize={10}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

const SemiPieChart = ({
	title,
	object,
}: {
	title: string;
	object: PowerFromHomes.AsObject | EcoEnergy.AsObject | undefined;
}): JSX.Element => {
	console.log(title, object);
	return (
		<div className="widget">
			<div className="widget-content">
				<div className="widget-title">
					<h3>{title}</h3>
				</div>
				<PieChart
					data={[
						{
							value: object === undefined ? 0 : object.value,
							color: '#2BEBC8',
						},
					]}
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
						fontSize: '15px',
						fontFamily: 'sans-serif',
						fill: '#FFF',
					}}
					labelPosition={0}
				/>
				<p className="widget-region">{object?.region}</p>
			</div>
		</div>
	);
};

const RadialChart = ({
	data,
	title,
}: {
	title: string;
	data: Array<any>;
}): JSX.Element => {
	const [hovered, setHovered] = useState<number | undefined>(undefined);
	const dataSet = data.map((entry, index) => {
		if (hovered === index) {
			return {
				...entry,
				color: '#2BEBC8',
			};
		}
		return entry;
	});
	const TotalValue = data.reduce((acc, curr) => acc + curr.value, 0);
	return (
		<div className="widget">
			<div className="widget-content">
				<div className="widget-title">
					<h3>{title}</h3>
				</div>
				<PieChart
					data={dataSet}
					radius={45}
					totalValue={TotalValue}
					animate
					segmentsStyle={{
						transition: 'stroke .3s',
						cursor: 'pointer',
					}}
					label={({ x, y, dx, dy, dataEntry }) => (
						<text
							x={x}
							y={y}
							dx={dx}
							dy={dy}
							dominantBaseline="central"
							textAnchor="middle"
							style={{
								fill: '#fff',
								pointerEvents: 'none',
								fontWeight: 500,
							}}
						>
							<tspan
								x={x}
								y={y}
								dx={dx}
								dy={dy}
								style={{ fontSize: '0.8rem' }}
							>{`${(dataEntry.value / TotalValue * 100).toPrecision(4)}%`}</tspan>
							<tspan
								x={x}
								y={y + 12}
								dx={dx}
								dy={dy}
								style={{ fontSize: '0.4rem' }}
							>
								{dataEntry.title}
							</tspan>
						</text>
					)}
					onMouseOver={(_, index) => {
						setHovered(index);
					}}
					onMouseOut={() => {
						setHovered(undefined);
					}}
				/>
			</div>
		</div>
	);
};

export { PowerChart, SemiPieChart, RadialChart };