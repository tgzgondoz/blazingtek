import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Abouts from './pages/Abouts';  // Changed from About to Abouts
import Services from './pages/Services';
import Community from './pages/Community';
import Partnerships from './pages/Partnerships';
import News from './pages/News';
import Contact from './pages/Contact';
import Research from './pages/Research';
import SustainableRobotics from './pages/SustainableRobotics';
import LabProjects from './pages/LabProjects';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Abouts />} />  {/* Updated to Abouts */}
            <Route path="/services" element={<Services />} />
            <Route path="/community" element={<Community />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/sustainability" element={<SustainableRobotics />} />
            <Route path="/research/lab" element={<LabProjects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;