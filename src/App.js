import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";

// main page content that is rendered into the  body element for the html page
function App() {
  return (
    <div className="body">
      {/* router allows to conditionally choose what page to display */}
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
