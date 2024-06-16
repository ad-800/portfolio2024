import { NavLink, Routes, Route } from 'react-router-dom'
import AboutMe from "./links/AboutMe"
import Projects from "./links/Projects"
import Contact from "./links/Contact"

function App() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col w-1/3 justify-between m-10">
        <div>
          <div>
            <h1>Adalyne Cummins</h1>
            <h2 className="mt-2">Designer & Developer</h2>
          </div>
          <nav className="nav-links mt-5 ml-4">
            <ul>
              <li><NavLink to="/" className="nav-link">About Me</NavLink></li>
              <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
              <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              <div className="dot mr-3"/>
            </ul>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <div className="border border-white w-2/3"></div>
    </div>
  );
}

export default App;
