// App.jsx - Updated with new pages
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/about.jsx'
import Services from './pages/Services.jsx'
import Research from './pages/Research.jsx'
import Community from './pages/Community.jsx'
import Partnerships from './pages/Partnerships.jsx'
import News from './pages/News.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/partnerships' element={<Partnerships/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App