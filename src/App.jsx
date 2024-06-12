import "./App.css"
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
            <h2>Designer & Developer</h2>
          </div>
          <nav className="mt-5">
            <ul>
              <li><NavLink to="/" >About Me</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
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
