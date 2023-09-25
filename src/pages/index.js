import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ParallaxLayer, Parallax } from "@react-spring/parallax"
import space from "../images/space.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <Parallax pages={2}>
        <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          backgroundImage: `url(${space})`,
          backgroundSize: 'cover',
          
        }}
        >

        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}
  
export const Head = () => <Seo title="Home" />

export default IndexPage
