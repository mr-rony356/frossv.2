"use client";
import Hero from "./components/hero/Hero";
import Principles from "./components/cta/Principles";
import SelectedWorks from "./components/selected/Selected";
import Services from "./components/services/Services";
import ClientLogos from "./components/Clientslogo/Logo";
import Image from "next/image";
import Folder from "../public/folder-tablet.webp";
// import FolderMobile from "../../public/folder-phone-reverse.webp";
import Crown from "../public/assets/two-circle.png";
import Box from "../public/assets/box.png";
import ContactForm from "./components/contact-form/Contact";
import Footer from "./components/Footer/Footer";
import MainComponent from "./components/Footer";
import ScrollProvider from "./components/hero/ClientLayout";

export default function Home() {
  return (
    <div className="new  flex flex-col gap-20 ">
      {/* <Hero /> */}

      <SelectedWorks />
      {/* <Principles /> */}
      <Services />

      <ClientLogos />
      <div className="text-white grid-container md:mx-16 ">
        <div className="flex flex-col md:flex-row justify-between  gap-6">
          <div className="w-full md:w-3/5">
            <Image
              src="/assets/hot-article.png"
              alt="Logo 1"
              width={120}
              height={50}
              className="mx-auto md:mx-0 mt-6"
            />
          </div>
          <p className="text-xl md:text-3xl w-full text-center md:text-left">
            <span className="block md:inline text-center md:text-right w-full">
              The Forss Digital blog is a treasure{" "}
              <br className="hidden md:inline" />
            </span>
            <span className="block md:inline text-center md:text-left">
              trove of our best technical tips and expert{" "}
              <br className="hidden md:inline" />
              knowledge. Here you will discover all the{" "}
              <br className="hidden md:inline" /> valuable secrets and trends of
              the IT industry.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-10 md:mt-20 px-4 md:px-0">
          <div className="relative align-center w-full md:w-1/2">
            <Image src={Folder} alt="Logo 1" height={500} className="w-full" />
            <div className="w-full flex flex-col justify-center items-center">
              <Image
                src={Crown}
                alt="Logo 1"
                width={250}
                className="absolute md:top-20 -top-5"
              />
              <p className="text-left absolute bottom-12 md:bottom-20 text-xl md:text-2xl left-4 md:left-10">
                How to build a product — a full guide to the product development
                process
              </p>
              <small className="text-left absolute  bottom-4 md:bottom-10 left-4 md:left-10">
                Development
              </small>
            </div>
          </div>
          <div className="relative align-center w-full md:w-1/2">
            <Image src={Folder} alt="Logo 1" height={500} className="w-full" />
            <div className="w-full flex flex-col justify-center items-center">
              <Image
                src={Box}
                alt="Logo 1"
                width={250}
                className="absolute md:top-20 -top-6"
              />
              <p className="text-left absolute bottom-12 md:bottom-20 text-xl md:text-2xl left-4 md:left-10">
                Tech stack for web development: how to arrange it correctly
              </p>
              <small className="text-left absolute  bottom-4 md:bottom-10 left-4 md:left-10">
                Development
              </small>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <div className=" text-white p-4 md:p-10 md:px-20 flex items-center gap-10 justify-between flex-col md:flex-row">
        <div className="md:w-3/5">
          <h1 className="text-4xl md:text-[56px]  mb-4 text-center ">
            READY TO TAKE <br  className="hidden md:inline-block"/> YOUR BRAND TO THE<br  className="hidden md:inline-block"/> 
            NEXT LEVEL
          </h1>
        </div>
        <div>
          <p className="mb-6 text-base text-[#CBD7D7]">
            Get started today to see areas of improvement <br /> that will boost
            your brand's potential.
          </p>
          <button className="bg-white px-6 py-2 rounded-lg inline-flex items-center text-black">
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
