import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Process from "./components/process/Process";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import "./App.css";


function App() {
	return (
            <Router>
				<Nav />
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/process" component={Process} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                    <Footer/>
                </div>
            </Router>
	);
}

export default App;