import { Link, } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./../images/logo.png";

function Navigation() {
	return (
		
            <Navbar expand="lg" className="navbar">
                    <Navbar.Brand><Link to="/"><img id="am-logo" src={logo} alt="August mediestudio logo" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link" >
                                Hjem
                            </Link>
                            <Link to="/about" className="nav-link" >
                                Om oss
                            </Link>
                            <Link to="/services" className="nav-link">
                                Våre tjenester
                            </Link>
                            <Link to="/process" className="nav-link">
                                Vår prosess
                            </Link>
                            <Link to="/portfolio" className="nav-link">
                                Portfolio
                            </Link>
                            <Link to="/contact" className="nav-link">
                                Kontakt
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
			
			
		
	);
}

export default Navigation;