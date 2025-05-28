import React from 'react'
import { useState, useEffect } from 'react'
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  function clickfunction (){
    setToggle(prev=>!prev);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // `md` breakpoint is 768px
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);

  return (
    <nav className=" w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt='logo' className=" w-[124px] h-[32px]"/>
       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle?close:menu}
         alt='toggler'
         className="w-[28px] h-[28px] object-contain"
         onClick={clickfunction}
         />
      </div>
      <div 
      className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
           <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
