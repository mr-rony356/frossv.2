import React from "react";
import Newsletter from "./Newsletter";
import Services from "./Services";
import ContactInfo from "./ContactInfo";
import ShowAllServices from "./ShowAllServices";
import Footer from "./Footer";

const MainComponent: React.FC = () => (
  <main className="flex flex-col">
    <div className="w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                <Newsletter />
              </div>
              <div className="flex flex-col ml-5 lg:w-[36%] max-md:ml-0 max-md:w-full">
                <Services />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full ">
          <ContactInfo />
        </div>
      </div>
    </div>
    <ShowAllServices />
    <Footer copyrightYear={new Date().getFullYear()} />
  </main>
);

export default MainComponent;
