import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { InfoContext } from '../context/InfoContext';
import { Modal } from '../components/Modal';
import { Content } from '../components/PowerConsumption';

export const Dashboard = () => {
	const [showInfo, setInfoShow] = useState<boolean>(false);
	useEffect(() => {
		console.log(showInfo);
	}, [showInfo]);
	return (
		<div className="dashboard">
			<InfoContext.Provider value={{ showInfo, setInfoShow }}>
				{showInfo && (
					<div
						className="fade"
						onClick={() => setInfoShow((current) => !current)}
					></div>
				)}
				<Navbar>{showInfo && <Modal />}</Navbar>
			</InfoContext.Provider>
			<Content />
		</div>
	);
};
