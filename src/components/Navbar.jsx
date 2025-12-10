import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white py-3 shadow-2xl'>
          <div className='max-w-6xl max-auto flex flex justify-between items-center'>
            {/* Logo */}
            <div className=''>
                <Link to='/' className='font-bold text-3xl'><span className='text-red-500 font-serif'>B</span><h1>lazingTek</h1></Link>
            </div>
            {/* Nav Links */}
            </div>

          </div>
       
  )
}

export default Navbar