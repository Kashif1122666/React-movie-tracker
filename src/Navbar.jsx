import React from 'react'
import { Link} from 'react-router-dom'

function Navbar() {
  return (
  <>
  <ul className='list-none flex justify-center gap-20  p-5 py-6 bg-[#2E4053] text-white fixed top-0 w-[1200px] rounded-lg '>
    <li><Link to="/" className='border border-black px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-700  hover:px-6'>Home</Link></li>
    <li><Link to="/favoriteList" className='border border-black px-3 py-3 rounded-lg bg-orange-600 hover:bg-orange-700  hover:px-6'>Favorite</Link></li>
  </ul>
  </>
  )
}

export default Navbar