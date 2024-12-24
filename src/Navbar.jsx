import React from 'react'
import { Link,NavLink} from 'react-router-dom'

function Navbar() {
  return (
  <>
  <ul className='list-none flex justify-center gap-20  p-5 py-6 bg-[#2E4053] text-white fixed top-0 w-[1200px] rounded-lg '>
    <li><NavLink to="/" className={({isActive})=> `border border-black px-5 py-3 rounded-lg ${isActive ? "bg-blue-900": "bg-orange-600"} hover:bg-blue-900  hover:px-6`}>Home</NavLink></li>
    <li><NavLink to="/favoriteList" className={({isActive})=>`border border-black px-3 py-3 rounded-lg  ${isActive ? "bg-blue-900":"bg-orange-600"} hover:bg-blue-900  hover:px-6`} >Favorite</NavLink></li>
  </ul>
  </>
  )
}

export default Navbar