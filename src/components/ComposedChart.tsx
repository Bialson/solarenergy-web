import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
    Line,
	Tooltip,
	Legend,
	ResponsiveContainer,
    ComposedChart,
} from 'recharts';

const data = [
	{
		name: 'Page A',
		uv: 590,
		amt: 1400,
	},
	{
		name: 'Page B',
		uv: 868,
		amt: 1506,
	},
	{
		name: 'Page C',
		uv: 1397,
		amt: 989,
	},
	{
		name: 'Page D',
		uv: 1480,
		amt: 1228,
	},
	{
		name: 'Page E',
		uv: 1520,
		amt: 1100,
	},
	{
		name: 'Page F',
		uv: 1400,
		amt: 1700,
	},
];

export const Chart = ({ width, height }: { width: string; height: string }) => {
	return (
		<ResponsiveContainer
			width={width}
			height={height}
			className="responsive-container"
		>
			<ComposedChart
				width={600}
				height={300}
				data={data}
				layout="vertical"
				margin={{ top: 40, right: 40, left: 20, bottom: 20 }}
			>
				<XAxis type="number" tickMargin={10} stroke="#aaaaaa"/>
				<YAxis type="category" dataKey="name" tickMargin={10} stroke="#aaaaaa"/>
				<Tooltip cursor={{fill: "#81829181"}} labelStyle={{color: "#000"}}/>
				<Legend />
				<Bar dataKey="uv" fill="#2BEBC8" barSize={15} />
                <Line dataKey="uv" stroke="#6846EC" />
			</ComposedChart>
		</ResponsiveContainer>
	);
};
