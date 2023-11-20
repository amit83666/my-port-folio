import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "./components/Nav";
import Footer from './components/footer';
function App() {
  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/techstack" component={TechStack} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* <Route component={Error} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
