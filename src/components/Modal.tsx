import { BoxArrowUpRight } from 'react-bootstrap-icons';
import {
	ReactIcon,
	GolangIcon,
	GithubIcon,
	GrpcIcon,
	LogoIcon,
} from './IconsPath';
import '../styles/_modal.scss';

export const Modal = () => {
	return (
		<div className="modal">
			<div className="logo">
				<img src={LogoIcon} alt="logo" width={50} />
				<h2>solarenergy</h2>
			</div>
			<div className="modal-description">
				<p>
					This tool provides interaction with energy consumption data
					from Poland's Central Statistical Office (GUS) provided by
					API DBW, created also by GUS.
				</p>
				<br />
				<p>For usage instructions check docs.</p>
			</div>
			<h4>Made with:</h4>
			<div className="modal-logos">
				<img src={ReactIcon} alt="React" className="react-icon" />
				<img src={GolangIcon} alt="Go" className="go-icon" />
				<img src={GrpcIcon} alt="gRPC" className="grpc-icon" />
			</div>
			<div className="modal-github">
				<img src={GithubIcon} alt="Github" />
				<a href="https://github.com/Bialson/solarenergy">
					Github <BoxArrowUpRight />
				</a>
			</div>
			<p>Copyright @2023 Solarenergy</p>
		</div>
	);
};
