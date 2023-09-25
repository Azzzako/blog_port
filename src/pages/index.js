import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ParallaxLayer, Parallax } from "@react-spring/parallax"
import code from "../images/code.png"
import pc from "../images/pc.png"
import "./index.css"

const IndexPage = () => {
  return (
    <Parallax pages={2}>
      <ParallaxLayer
        style={{ top: "0", left: "0" }}
        offset={0}
        speed={1.5}
        
      >
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="flex justify-center items-center w-full h-full">
            <h1>Take 1</h1>{" "}
          </div>
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={1.5}

      >
       
          <div className="flex justify-center items-center w-full h-full">
            <h1>Take 2</h1>{" "}
          </div>
        
      </ParallaxLayer>
    </Parallax>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
