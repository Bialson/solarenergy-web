import '../styles/_modal.scss';

export const Modal = () => {
	return (
		<div className="modal">
			<div className="logo">
				<img
					src="/src/assets/icons/logo512.png"
					alt="logo"
					width={50}
				/>
				<h2>solarenergy</h2>
			</div>
			<h4>Made with:</h4>
			<div className="modal-logos">
				<img
					src="/src/assets/react.svg"
					alt="React"
					className="react-icon"
				/>
				<img src="/public/vite.svg" alt="Vite" className="vite-icon" />
			</div>
		</div>
	);
};
