import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

import Services from './pages/Services.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/services' element={<Services/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App