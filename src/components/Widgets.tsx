import '../styles/_widgets.scss'

const HighestConsumption = ({ region, value }: {region: string, value: Number}): JSX.Element => {
	return (
		<div className="widget">
			<div className="widget-title">
				<h3>Highest Consumption</h3>
			</div>
			<div className="widget-content">
                <p>{region}</p>
                <p><>{value}</></p>
            </div>
		</div>
	);
};

export { HighestConsumption };
