import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App