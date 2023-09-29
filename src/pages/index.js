import * as React from "react"
import Seo from "../components/seo"
import { ParallaxLayer, Parallax } from "@react-spring/parallax"
import floating from "../images/floating.png"
import graphs from "../images/graphs.png"
import robot from "../images/robot.png"
import chat from "../images/chat.png"
import chat2 from "../images/chat2.png"
import sitting from "../images/sitting.png"
import "./index.css"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoGithub,
  IoFolder
} from "react-icons/io5"
import { BsArrowUpCircle, BsLinkedin } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"
import { SiRedux, SiTailwindcss } from "react-icons/si"
import { certifications, experience } from "../components/helpers/helpers"
import { Link } from "gatsby"
import CV from '../images/cv.pdf'

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
  const [astro, setAstro] = useState(false)
  const parallax = useRef(null)

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

  const exp = experience.map(element => {
    return (
      <div className="text-white text-center flex flex-col">
        <h1
          style={{ fontFamily: "Roboto1" }}
          className="text-xl md:text-3xl text-red-500"
        >
          {element.empresa}
        </h1>
        <span className="text-xl md:text-2xl">{element.puesto}</span>
        <span className="text-xl md:text-2xl">{element.tiempo}</span>
      </div>
    )
  })

  const course = certifications.map(element => {
    return (
      <div className="text-white text-center flex flex-col px-4 md:px-8">
        <h1
          style={{ fontFamily: "Roboto1" }}
          className="text-lg md:text-3xl text-red-500"
        >
          {element.curso}
        </h1>
        <span className="text-lg md:text-2xl">{element.tiempo}</span>
      </div>
    )
  })

  return (
    <div className="w-full h-full">
      <Parallax
        pages={6}
        ref={parallax}
        style={{ overflow: "hidden", scrollbarWidth: "0" }}
      >
        <ParallaxLayer
          offset={0.1}
          speed={0}
          factor={6}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <div className="flex justify-center items-center flex-col sm:flex-row w-full h-full gap-12">
          <ParallaxLayer
            offset={0.1}
            speed={-0.3}
            className="w-full h-full flex"
          >
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

          <div>
            <ParallaxLayer
              offset={0}
              speed={-1}
              className="w-full h-full flex justify-center items-center"
            >
              <div
                className={`rounded-full rotate-12 transform transition-all w-full ${
                  astro ? "mr-[24em] h-0" : "h-80"
                } `}
              >
                <img
                  src={floating}
                  alt="profile"
                  className="w-full h-full object-contain rounded-full animate-shake animate-normal animate-infinite animate-duration-[18000ms] animate-ease"
                />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={1.2}
              factor={0.8}
              className="w-full h-full flex justify-center items-center"
            >
              <div className="rounded-full h-80 transform rotate-12 scale-x-[-1]">
                <img
                  src={chat}
                  alt="profile"
                  className="w-full h-full object-contain rounded-full animate-shake animate-normal animate-infinite animate-duration-[24000ms] animate-ease"
                />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={1.2}
              factor={0.8}
              className="w-full h-full flex justify-center items-center"
            >
              <div
                className={`rounded-full h-48 transform rotate-12 scale-x-[-1] mb-[60em] ml-[25em]`}
              >
                <img
                  src={chat2}
                  alt="profile"
                  className="w-full h-full object-contain rounded-full animate-shake animate-normal animate-infinite animate-duration-[14000ms] animate-ease"
                />
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.5} speed={0.2}>
              <div className="font-bold text-yellow-600 flex flex-col justify-center items-center rotate-180 mr-[12em] mt-[12em] md:mt-[14em] lg:mt-[12em]">
                <BsArrowUpCircle className="fill-white text-5xl animate-jump animate-infinite animate-duration-[1000ms] animate-ease-linear animate-normal animate-fill-forwards" />
              </div>
            </ParallaxLayer>
          </div>

          <ParallaxLayer
            offset={0.3}
            speed={1}
            className="w-full h-full flex justify-center items-center"
          >
            <div
              className="w-full sm:w-[50%]"
              onClick={() => (parallax.current.scrollTo(0.8), setAstro(true))}
            >
              <h1
                className="text-center text-6xl md:text-7xl cursor-pointer text-red-600"
                style={{ fontFamily: "Barriecito" }}
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

        <div className="w-full" onClick={() => parallax.current.scrollTo(1.6)}>
          <ParallaxLayer
            offset={0.9}
            speed={0.4}
            factor={0.6}
            className="flex flex-col justify-center "
          >
            <h1
              className="text-white text-center text-6xl md:text-8xl"
              style={{ fontFamily: "Barriecito" }}
            >
              <span className="text-red-700 p-4">Hi</span>, Everyone
            </h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.2}
            speed={0.6}
            factor={0}
            className="flex flex-col justify-center items-center"
          >
            <span
              className="text-white text-center text-md md:text-2xl p-6 md:p-12"
              style={{ fontFamily: "Roboto1" }}
            >
              I'm <span className="text-red-700 font-bold">ASAEL</span>
              , a Frontend Developer with a passion for generating innovative
              ideas to enhance the user experience. <br />
              <br />
              I consider myself a hardworking individual who is eager to
              continuously improve my development skills. In my journey as a
              Frontend Developer, I've had the opportunity to work on a variety
              of projects, ranging from creating responsive websites to
              developing interactive web applications. <br />
              <br />
              My goal is to craft digital experiences that not only meet
              functional requirements but also leave a lasting impression on
              users. Whether it's through creating intuitive navigation,
              optimizing performance, or ensuring cross-browser compatibility, I
              strive to make the web a more user-friendly place.
            </span>
          </ParallaxLayer>
        </div>

        <div className="w-full" onClick={() => parallax.current.scrollTo(2)}>
          <ParallaxLayer
            offset={1.9}
            speed={1.4}
            className="flex flex-col justify-center"
          >
            <h1
              className="text-white text-center text-6xl md:text-8xl pt-60"
              style={{ fontFamily: "Barriecito" }}
            >
              <span className="text-red-600"> My </span>Skills
            </h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={2.1}
            factor={2.9}
            className="flex flex-col justify-center lg:items-center"
          >
            <div className="flex -rotate-12 ml-16 md:ml-48 lg:ml-[25em]">
              <IoLogoJavascript className="fill-yellow-500 text-5xl md:text-8xl animate-shake animate-normal animate-infinite animate-duration-[20000ms] animate-ease" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={1.5}
            factor={2.5}
            className="flex flex-col justify-center lg:items-center"
          >
            <div className="flex rotate-12 ml-40 md:ml-96 lg:mr-96">
              <IoLogoReact className="fill-blue-500 text-5xl md:text-8xl animate-shake animate-normal animate-infinite animate-duration-[18000ms] animate-ease" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={2}
            factor={2.9}
            className="flex flex-col justify-center lg:items-center"
          >
            <div className="flex rotate-45 ml-[2em] md:ml-[4em] lg:mr-96">
              <IoLogoNodejs className="fill-green-700 text-5xl md:text-8xl animate-shake animate-normal animate-infinite animate-duration-[22000ms] animate-ease" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={2.2}
            factor={2.9}
            className="flex flex-col justify-center lg:items-center"
          >
            <div className="flex ml-64 md:ml-[22em] lg:mr-96">
              <IoLogoHtml5 className="fill-orange-400 text-5xl md:text-8xl animate-shake animate-normal animate-infinite animate-duration-[30000ms] animate-ease" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={1.6}
            factor={2.2}
            className="flex flex-col justify-center lg:items-center"
          >
            <div className="flex rotate-12 ml-44 md:ml-[33em] lg:mr-[79em]">
              <IoLogoCss3 className="fill-blue-400 text-5xl md:text-8xl animate-shake animate-normal animate-infinite animate-duration-[25000ms] animate-ease" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={1.6}
            factor={2.5}
            className="flex flex-col justify-center lg:items-center"
          >
            <div className="flex rotate-12 ml-[18em] md:ml-[35em] lg:ml-[49em]">
              <SiRedux className="fill-purple-500 text-5xl md:text-8xl animate-shake animate-normal animate-infinite animate-duration-[25000ms] animate-ease" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.8}
            speed={1.7}
            factor={2.2}
            className="flex flex-col justify-center lg:items-center"
          >
            <div className="flex rotate-12 mt-[14em] ml-[11em] md:ml-[15em] lg:ml-[49em] lg:mt-[32em] lg:mb-[32em]">
              <SiTailwindcss className="fill-teal-400 text-5xl md:text-8xl animate-shake animate-normal animate-infinite animate-duration-[25000ms] animate-ease" />
            </div>

            <ParallaxLayer
              offset={1}
              speed={1}
              factor={2.5}
              className="flex flex-col justify-center lg:items-center"
            >
              <span
                className="text-white text-center text-lg md:text-2xl p-6 lg:p-56"
                style={{ fontFamily: "Roboto1" }}
              >
                Throughout my professional training, I have acquired a set of
                <span className="text-red-600"> skills</span> for building
                high-quality websites, tools that facilitate the creation of
                intuitive sites
              </span>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={1}
              className="w-full h-full flex justify-center items-center"
            >
              <div
                className={`rounded-full rotate-12 transform transition-all w-full ${
                  astro ? "mr-[24em] h-0" : "h-80"
                } `}
              >
                <img
                  src={floating}
                  alt="profile"
                  className="w-full h-full object-contain rounded-full animate-shake animate-normal animate-infinite animate-duration-[18000ms] animate-ease"
                />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1.7}
              speed={2.1}
              factor={1.7}
              className="flex flex-col justify-center lg:items-center"
            >
              <img
                src={graphs}
                alt="workspace"
                className="opacity-10 w-full h-full object-contain"
              />
            </ParallaxLayer>
          </ParallaxLayer>
        </div>

        <div
          className="w-full h-full"
          onClick={() => parallax.current.scrollTo(3)}
        >
          <ParallaxLayer offset={2} speed={2.5}>
            <div className=" flex justify-center items-center flex-col p-8">
              <h1
                className="text-white text-center text-6xl md:text-8xl"
                style={{ fontFamily: "Barriecito" }}
              >
                <span className="text-red-600">My</span>
                <br />
                Experience
              </h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.2} speed={1.5}>
            <div className="flex flex-col justify-center items-center gap-6 p-16 lg:px-96">
              {exp}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.8} speed={1.7}>
            <h1
              className="text-white text-2xl text-center p-6"
              style={{ fontFamily: "Roboto1" }}
            >
              Click on any project to go to its repository
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={2.5} speed={0.8}>
            <div className="rotate-90 relative right-[15em] md:right-[35em] lg:right-[75em]">
              <img
                src={sitting}
                alt="sitting"
                className="w-full md:w-[50%] h-full object-contain opacity-25"
              />
            </div>
          </ParallaxLayer>
        </div>

        <div
          className="w-full h-full"
          onClick={() => (parallax.current.scrollTo(4), setAstro(false))}
        >
          <ParallaxLayer offset={3.05} speed={0.8}>
            <div className="flex flex-col w-full h-full  gap-16">
              <h1
                className="text-white text-center text-6xl md:text-8xl"
                style={{ fontFamily: "Barriecito" }}
              >
                <span className="text-red-600">My</span> <br />
                Certifications
              </h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3.25} speed={-0.1}>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 md:py-12 lg:py-24">
              {course}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3.9} speed={0.9}>
            <div className="text-center">
              <span
                className="text-white text-xs md:text-2xl"
                style={{ fontFamily: "Roboto1" }}
              >
                You can find all the information about these certifications on
                my LinkedIn profile
              </span>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={2}
            factor={1.7}
            className="flex flex-col justify-center lg:items-center"
          >
            <img
              src={robot}
              alt="robot"
              className="opacity-10 w-full h-full object-contain"
            />
          </ParallaxLayer>
        </div>

        <div className="w-full h-full">
          <ParallaxLayer offset={4.56} speed={2}>
            <img
              src={url("earth")}
              alt="rearth"
              className="w-full h-full md:h-[80%] object-contain"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={2}>
            <BsArrowUpCircle
              onClick={() => parallax.current.scrollTo(0)}
              className="fill-white text-5xl animate-jump animate-infinite animate-duration-[1000ms] animate-ease-linear animate-normal animate-fill-forwards cursor-pointer m-2"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={4.05} speed={1.8}>
            <div className="w-full h-full">
              <h1
                className="text-white text-center text-6xl md:text-8xl"
                style={{ fontFamily: "Barriecito" }}
              >
                Let's
                <br />{" "}
                <span className="text-red-600">
                  {" "}
                  work
                 
                </span>{" "}
                Toghether
              </h1>

                <div className="flex justify-center items-center py-96 md:py-96 lg:py-72 gap-4 md:gap-10">
                <a href="mailto:zanduva@gmail.com"><BiLogoGmail className="fill-red-500 text-7xl text-center flex justify-center items-center" /></a>
                <Link to="https://www.linkedin.com/in/asael-hernandez-diaz/" target="_blank"><BsLinkedin className="fill-blue-600 text-7xl text-center flex justify-center items-center" /></Link>
                <Link to="https://www.github.com/Azzzako" target="_blank"><IoLogoGithub className="fill-white text-7xl text-center flex justify-center items-center" /></Link>
                <a href={CV} download><IoFolder className="fill-yellow-500 text-7xl text-center flex justify-center items-center" /></a>
                </div>
            </div>
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
