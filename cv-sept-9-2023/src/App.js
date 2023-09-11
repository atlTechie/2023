import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";


function App() {
  return (
    <div className="App">
      <div class="navbar">
        <div className="brand">E. Wright</div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <Home/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
