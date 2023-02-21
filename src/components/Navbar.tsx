import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid1x2, Terminal, FileEarmarkText } from 'react-bootstrap-icons';
import { InfoContext } from '../context/InfoContext';
import { LogoIcon } from './IconsPath';
import '../styles/_navbar.scss';

export const Navbar = ({ children }: any): JSX.Element => {
	const { setInfoShow } = useContext(InfoContext);
	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<img src={LogoIcon} alt="logo" width={50} />
					<h3>solarenergy</h3>
				</div>
				<ul className="nav-menu">
					<li className="menu-item">
						<Grid1x2 size={25} />
						<Link to="/">Dashboard</Link>
					</li>
					<li className="menu-item">
						<FileEarmarkText size={25} />
						<Link to="/docs">Dokumentacja</Link>
					</li>
					<li className="menu-item" onClick={() => setInfoShow(true)}>
						<Terminal size={25} />
						<a href="#about">O aplikacji</a>
					</li>
				</ul>
			</nav>
			{children}
		</>
	);
};
