"use client";
import Hero from "./components/hero/Hero";
import Principles from "./components/cta/Principles";
import SelectedWorks from "./components/selected/Selected";
import Services from "./components/services/Services";
import ClientLogos from "./components/Clientslogo/Logo";
import Image from "next/image";
import Folder from "../public/assets/folder.png";
import FolderTwo from "../public/folder.webp";
// import FolderMobile from "../../public/folder-phone-reverse.webp";
import Crown from "../public/assets/folderone.svg";
import CrownTwo from "../public/assets/foldertwo.svg";
import Box from "../public/assets/box.png";
import ContactForm from "./components/contact-form/Contact";
import Footer from "./components/Footer/Footer";
import MainComponent from "./components/Footer";
import ScrollProvider from "./components/hero/ClientLayout";
import BlogLayout from "./components/Blog/BlogLayout";

export default function Home() {
  return (
    <div className="new  flex flex-col gap-20  px-4 md:px-10 xl:px-20">
      {/* <Hero /> */}

      <SelectedWorks />
      {/* <Principles /> */}
      <Services />

      <ClientLogos />
      <div className="text-white grid-container">
        <div className="flex flex-col md:flex-row justify-between  gap-6">
          <div className="md:pl-12 lg:pl-16 xl:pl-20">
            <div className="flex  justify-center bg-white text-black h-[50px] w-full rounded-[150px] items-center gap-3 px-0 md:px-6" >
              <span className="justify-center my-auto">HOT ARTICLES</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac4cfda3d7f93a87ba40d74be2a91608e124e66273a2d6f0911b6b8464dffae6?apiKey=4be6ea9d4a03451ab3e59888e2e13dcc&"
                alt=""
                className="shrink-0 w-8 h-8"
              />
            </div>
          </div>
          <div className="w-full md:w-4/6 text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center md:text-left">
            <p className="md:pl-24">The Forss Digital blog is a treasure</p>
            <p>
              trove of our best technical tips and expert knowledge. Here you
              will discover all the 
              <br className="hidden md:block" />
               valuable secrets and trends of the IT
              industry.
            </p>
          </div>
        </div>
      </div>
      <BlogLayout />
      <ContactForm />
      <div className=" text-white  flex items-center gap-10 justify-between flex-col md:flex-row">
        <div className="md:w-3/5">
          <h1 className="text-3xl md:text-4xl xl:text-6xl text-center md:text-left">
            READY TO TAKE
            <br className="hidden md:block" />
            YOUR BRAND TO THE
            <br className="hidden md:block" />
            NEXT LEVEL
          </h1>
        </div>
        <div>
          <p className="mb-4 xl:mb-8 text-left text-sm xl:text-base text-[#CBD7D7]">
            Get started today to see areas of improvement <br /> that will boost
            your brand's potential.
          </p>
          <button className="bg-white w-full md:w-auto px-6 py-2 rounded-lg flex justify-center md:inline-flex items-center text-black ">
            <span>GET STARTED</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
      <MainComponent />
    </div>
  );
}
