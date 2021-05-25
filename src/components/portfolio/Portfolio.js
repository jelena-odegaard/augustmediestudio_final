import Heading from "../layout/Heading";
import Jumbotron from 'react-bootstrap/Jumbotron';
import background_camera from './../images/background_camera.jpg';
import VideoStamina from './VideoStamina';
import VideoTransport from './VideoTransport';
import VideoHelse from './VideoHelse';
import VideoSafety from "./VideoSafety";
import greenscreen from './../images/greenscreen.jpg';
import editedvideo from './../images/editedvideo.jpg';


export default function Portfolio() {
	return (
		<>
			<Jumbotron className="white-title" jumbotron-fluid="true" style={{ backgroundImage: `url(${background_camera})`, backgroundSize: 'cover' }}>
				<Heading content="Ta en titt i vårt arbeid" />
			</Jumbotron>
			<div className="portfolio-container">
				<Heading size="4" content="Før & etter videoredigering"/>
				<div className="portfolio-img" fluid="true">
					<img id="green-screen" src={greenscreen} alt="Man being filmed in front of the greenscreen"/>
					<img src={editedvideo} alt="Screenshot of the edited video shoot"/>
				</div>
				<Heading size="3" content="Her kan du få innblikk i våre ferdige videomateriale"/>
				<div className="video-wrapper">
					<div className="videoGroupOne">
						<VideoStamina/>
						<VideoTransport/>
					</div>
					<div className="videoGroupTwo">
						<VideoHelse/>
						<VideoSafety/>
					</div>
				</div>
			</div>
		</>
	);
}