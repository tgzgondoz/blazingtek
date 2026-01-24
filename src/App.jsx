import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Services from './pages/Services';
import Community from './pages/Community';
import Partnerships from './pages/Partnerships';
import News from './pages/News';
import Contact from './pages/Contact';
import Research from './pages/Research';
import SustainableRobotics from './pages/SustainableRobotics';
import LabProjects from './pages/LabProjects';
import AdminUpload from './pages/admin/AdminUpload';
// Import service detail pages
import RoboticsKits from './pages/services/RoboticsKits';
import Workshops from './pages/services/Workshops';
import CustomSolutions from './pages/services/CustomSolutions';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Abouts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/robotics-kits" element={<RoboticsKits />} />
            <Route path="/services/workshops" element={<Workshops />} />
            <Route path="/services/custom-solutions" element={<CustomSolutions />} />
            <Route path="/community" element={<Community />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/sustainability" element={<SustainableRobotics />} />
            <Route path="/research/lab" element={<LabProjects />} />
            
            {/* Admin Route */}
            <Route path="/admin/upload" element={<AdminUpload />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;