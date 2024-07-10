import React from "react";

const Newsletter: React.FC = () => (
  <section className="flex flex-col py-1  max-md:max-w-full">
    <h1 className="justify-center px-5  text-xl xl:text-2xl  text-neutral-100 max-md:max-w-full">
      Subscribe to our newsletter to stay <br /> in touch with the latest.
    </h1>
    <form
      className="flex gap-5 justify-between py-3 pr-6 pl-7 mt-16 text-base mb-10
     leading-4 border border-solid border-white border-opacity-80 rounded-[316.8px] text-white text-opacity-60
      max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <label htmlFor="email" className="sr-only">
        Your email address
      </label>
      <input
        type="email"
        id="email"
        placeholder="Your email address"
        className="justify-center my-auto bg-transparent border-none outline-none"
      />
      <button type="submit" aria-label="Subscribe">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e89e921e19cad44f13732f03a0523f3f2d21416ca5df47abf8147ef7362ac3f7?apiKey=4be6ea9d4a03451ab3e59888e2e13dcc&"
          alt=""
          className="shrink-0 w-8 aspect-[1.03]"
        />
      </button>
    </form>
  </section>
);

export default Newsletter;
