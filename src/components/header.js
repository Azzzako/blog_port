import * as React from "react"
import { LiaDev } from "react-icons/lia"


const Header = () => {


  
  return (
    <header className="bg-transparent flex flex-row justify-around h-[90px] w-full">
      <div className="flex items-center">
        <LiaDev size={80} />
      </div>

      <div>
        <ul className="flex flex-row gap-10 items-center w-full h-full">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li> 
        </ul>
      </div>
    </header>
  )
}

export default Header