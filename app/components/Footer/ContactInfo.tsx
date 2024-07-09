import React from 'react';

const ContactInfo: React.FC = () => (
  <section className="flex flex-col mt-1 max-md:mt-16">
    <div className="flex flex-col justify-center px-5 py-0.5">
      <h3 className="text-sm tracking-wider leading-5 uppercase text-gray-500">
        Drop us a line
      </h3>
      <a href="mailto:mail@forssdigital.com" className="justify-center mt-7 text-xl  text-white whitespace-nowrap">
        mail@forssdigital.com
      </a>
    </div>
    <div className="flex flex-col justify-center px-5 mt-9 text-neutral-100">
      <h3 className="text-sm tracking-wider leading-5 uppercase text-gray-500">
        Our address
      </h3>
      <address className="mt-5 text-xl  max-md:mt-10 not-italic">
        Vallgatan 8
      </address>
    </div>
  </section>
);

export default ContactInfo;