import { useState } from "react"
import { close, logo,   menu } from "../assets"
import { navLinks} from "../constant"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img  src={logo} alt="hoobank" className="w-[124px] h-[32px] "/>
    {/*  */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) =>{
          return (
          <li key={nav.id}
              className={`font-poppins font-normal cursor-pointer hover:text-[#5ce1e6] transition-colors ${index === navLinks.length -1 ? "mr-0" : "mr-10"} text-[16px] text-white`}
              >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
          )
        })}
        
      </ul>
    {/*  */}
      
      <div className="sm:hidden flex flex-1 justify-end item-center">
        <img src={toggle? close: menu} 
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={()=> setToggle((prev)=> !prev)} 
        />
        

        <div
        className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2  min-w-[140px] rounded-xl sidebar `}
        // style="transition:.4s"
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) =>{
              return (
              <li key={nav.id}
                  className={`font-poppins font-normal  cursor-pointer ${index === navLinks.length -1 ? "mr-0" : "mb-4"} text-[16px] text-white hover:text-[#5ce1e6]`}
                  >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
              )
            })}
        
          </ul> 
        </div>
      </div>

    </nav>

    )
}

export default NavBar