import Heading from "../layout/Heading";
import Jumbotron from 'react-bootstrap/Jumbotron';
import background_lights from './../images/background_lights.jpg';
import { FaHandshake } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import { MdOndemandVideo } from 'react-icons/md';
import portfolio from './../images/portfolio.png';
import list from './../images/list.png';
import clapperboard from './../images/cinema-clapperboard.png';
import movie from './../images/hd-movie.png';


export default function Services() {
	return (
		<>
            <Jumbotron  className="white-title" jumbotron-fluid="true" style={{ backgroundImage: `url(${background_lights})`, backgroundSize: 'cover' }}>
                <Heading content="Hvorfor er et mediestudio" />
                <Heading content="viktig for prosjektet ditt?" />
            </Jumbotron>
            <div className="infoContainer">
                <div>
                    <div className="symbol" >
                        <FaHandshake size={70}/>
                    </div>
                    <ul>
                        <li> Møte: Nøkkelmeldinger, identifiser publikum, angi tidslinjer </li>
                        <li> Forskning: Forstå historier og mål </li>
                        <li> Strategisk visjon: Historieidentifikasjon, storyboarding, <br></br>planlegging og forberedelse av skudd </li> 
                        <li> Video moodboard </li>
                        <li> Budsjett </li>
                        <li> Historievalg </li>
                        <li> Prosjektets tidslinje </li>
                        <li> Skapelse av skript </li>
                        <li> Produksjonsteam / utstyrsbehov</li>
                    </ul>
                </div>
                <div>
                    <div className="symbol" >
                        <BiCameraMovie size={70}/>
                    </div>
                    <ul>
                        <li> Sette opp / belysning / foto / videoutstyr </li>
                        <li> Innholdsoppretting </li>
                        <li> Gjennomføring av separalsettene </li> 
                        <li> Administrere bildet | videoopptak og holde tidslinjen intakt </li>
                        <li> Fange b-roll (ekstra opptak som brukes til å støtte historien din) </li>
                    </ul>
                </div>
                <div>
                    <div className="symbol" >
                        <MdOndemandVideo size={70}/>
                    </div>
                    <ul>
                        <li> Innholdsvurdering: Logging og forhåndsvalg av bildene </li>
                        <li> Forvalg av de beste bildene </li>
                        <li> Musikkvalg</li> 
                        <li> Videoredigering </li>
                        <li> Produserer den siste historien </li>
                        <li> Vurderinger / godkjenninger </li>
                        <li> Siste levering </li>
                    </ul>
                </div>
            </div>
            <div className="snippet">
                <div className="left-side">
                    <h3>Hva er det vi gjør?</h3>
                    <p>Etterspørselen etter e-læringskurs, har den siste tiden vært hovedfokus, men August MedieStudio tilbyr også en rekke andre tjenester, og er behjelpelig med alt innen videoproduksjon for bedrifter og organisasjoner. Vi kan tilby assistanse både for store og små produksjoner. Vi har også kompetanse på produksjon av hjemmesider, e-butikk, musikkproduksjon, lyddesign med mer.</p>
                </div>
                <div className="right-side">
                    <div id="pink">
                        <Heading size="5" content="Kreativ retning"/>
                    </div>
                    <div  id="yellow">
                        <Heading size="5" content="Videooptak"/>
                    </div>
                    <div  id="purple">
                        <Heading size="5" content="Lydoptak"/>
                    </div>
                </div>
            </div>
            <div className="animation-icons-container">
                <div className="loader">
                    <div  className="spinner1"></div>
                    <img className="icon" src={portfolio} alt="Design research board" width="100px"/> 
                </div>
                <div className="loader">
                    <div  className="spinner2"></div>
                    <img className="icon" src={list} alt="Paper list and a pencil"width="100px"/>
                </div>
                <div className="loader">
                    <div  className="spinner3"></div>
                    <img className="icon" src={clapperboard} alt="Filming clapperboard"width="100px"/>
                </div>
                <div className="loader">
                    <div  className="spinner4"></div>
                    <img className="icon" src={movie} alt="HD movie on a screen"width="100px"/>
                </div>
            </div>
            <div className="animation-icons-container">
                <Heading size="5" content="Designforsking"/>
                <Heading size="5" content="Organisasjon"/>
                <Heading size="5" content="Innholdskapping"/>
                <Heading size="5" content="Redigering"/>
            </div>
		</>
	);
}