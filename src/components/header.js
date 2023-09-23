import * as React from "react"
import { Link } from "gatsby"
import { LiaDev } from "react-icons/lia"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Header = () => {
  return (
    <Parallax pages={1}>
      <ParallaxLayer offset={0} speed={0.5}>
        <header className="bg-red-300 flex flex-row justify-around h-[90px] w-full">
          <div className="flex items-center">
            <LiaDev size={80} />
          </div>

          <div>
            <ul className="flex flex-row w-full items-center h-full gap-10">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>
      </ParallaxLayer>
    </Parallax>
  )
}

export default Header
