import * as React from "react"
import Seo from "../components/seo"
import { ParallaxLayer, Parallax } from "@react-spring/parallax"
import floating from "../images/floating.png"
import "./index.css"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"

const IndexPage = () => {
  const url = (name, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`

  const fullText = "Asael Hdz | Frontend Developer"
  const [text, setText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const delay = 100

    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [text, currentIndex])

  return (
    <Parallax pages={3} className="overflow-hidden">
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>

      <div className="flex justify-center items-center flex-col sm:flex-row w-full gap-12">
        <ParallaxLayer offset={0.1} speed={-0.3} className="w-full h-full flex">
          <div className="w-full">
            <h1
              className="text-white text-center text-7xl md:text-8xl"
              style={{ fontFamily: "Barriecito" }}
            >
              Welcome
              <span>
                <br></br>To my
              </span>
            </h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.5}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="rounded-full h-80 transform rotate-12">
            <img
              src={floating}
              alt="profile"
              className="w-full h-full object-contain rounded-full animate-shake animate-normal animate-infinite animate-duration-[4000ms] animate-ease"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.3}
          speed={1}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="w-full sm:w-[50%]">
            <h1
              className="text-center text-6xl md:text-7xl cursor-pointer text-red-600"
              style={{ fontFamily: "Barriecito" }}
              // onClick={scrollToSection}
            >
              Port{" "}
              <span className="text-6xl md:text-7xl">
                <br /> folio{" "}
              </span>
            </h1>

            <div className="w-full flex justify-center items-center p-6">
              <span
                className="text-white text-center text-lg md:text-2xl"
                style={{ fontFamily: "Roboto1" }}
              >
                {text}
              </span>
            </div>
          </div>
        </ParallaxLayer>
      </div>

      <div className="w-full">
        <ParallaxLayer
          offset={1}
          speed={0.7}
          factor={1}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className="text-white text-center text-7xl md:text-8xl"
            style={{ fontFamily: "Barriecito" }}
          >
            <span className="text-red-700">Hi</span>, Everyone
          </h1>
          <span
            className="text-white text-center text-lg md:text-2xl p-6 md:px-48 md:py-20"
            style={{ fontFamily: "Roboto1" }}
          >
            <span>Hi</span>, everyone. I'm Asael, a Frontend Developer with a passion for
            generating innovative ideas to enhance the user experience. <br/><br/>
            I consider myself a hardworking individual who is eager to
            continuously improve my development skills.
          </span>
        </ParallaxLayer>
      </div>

      <div className="w-full">
        <ParallaxLayer
          offset={2}
          speed={1.5}
          factor={2}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("earth", true),
          }}
        ></ParallaxLayer>
      </div>
    </Parallax>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
