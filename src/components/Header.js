import React from 'react'
import {useState} from "react";
import logo from '../assets/p4.png'
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
  const [darkMode,setDarkMode] = useState();
  const toggleDarkMode =()=>{
    setDarkMode(!darkMode);
  }

  const darkModeClass = darkMode ? 'dark-mode' : 'light-mode'
  const [hidden,setHidden] = useState(true);
  const ActiveClass="text-white hover:underline mx-10";
  const inActiveClass="text-white hover:underline mx-10"
  const handleSubmit = (event)=> {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  }
  return (
    <div >
      
       <nav className={`bg-blue-500 p-1 `}>
        
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className='w-20 h-20 sm:mb-0'>
            <img src={logo} alt="Not found" />
           
          </div>
          <a href="#" className="text-white text-2xl font-semibold mb-4 sm:mb-0 pr-8 sm:pr-0">Netflix</a>


          <div className='flex flex-col sm:flex-row text-center '>
            <ul className="list-none p-0 flex space-x-4">
            
        <li><NavLink to="/" className={(isActive)=> isActive ? ActiveClass : inActiveClass}>Home</NavLink></li>
              <li><NavLink to="/movies/popular" className={(isActive)=> isActive ? ActiveClass : inActiveClass}>Popular</NavLink></li>
              <li><NavLink to="/movies/top" className={(isActive)=> isActive ? ActiveClass : inActiveClass}>Toprated</NavLink></li>
              <li><NavLink to="/movies/upcoming" className={(isActive)=> isActive ? ActiveClass : inActiveClass}>Upcoming</NavLink></li>
              <form onSubmit={handleSubmit}>
              <div className="tocenter">
                <input type="text" name="search" id="Search" name =" search this"placeholder='Search' className="w-full sm:w-40 px-2 py-1"></input>
              </div>
              </form>
              
            </ul>
          </div>

        </div>
        
      </nav>
    </div>
  )
}

export default Header
