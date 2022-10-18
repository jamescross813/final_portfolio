import './css/stylesheet.css';
import HeaderComponent from "./components/HeaderComponent";
import NavBarComponent from "./components/NavBarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom"
import AboutComponent from "./components/AboutComponent";
import BlogsComponent from "./components/BlogsComponent";
import ProjectsComponent from "./components/ProjectsComponent";

function App() {
  return (
    <div className="App">
     <div className="container"> 
      <Router>
        
        <Route to exact path = "/" component = {AboutComponent} />
        <Route to exact path ="/blogs" component = {BlogsComponent} />
        <Route to exact path = "/projects" component = {ProjectsComponent} />
      </Router>
    </div>
    </div>
  );
}

export default App;
