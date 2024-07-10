import React from "react";
import SocialIcon from "./SocialIcon";
import FooterLink from "./FooterLink";

interface FooterProps {
  copyrightYear: number;
}

const Footer: React.FC<FooterProps> = ({ copyrightYear }) => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b14ff245a23e316bcc142521652251e5e0ed88b6b0ad73074881bc219503925a?apiKey=4be6ea9d4a03451ab3e59888e2e13dcc&",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5064f8c8d55e5507b859e56e47ff5c66cf189e742a06885eb7864feeae5e17c4?apiKey=4be6ea9d4a03451ab3e59888e2e13dcc&",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/757f23eff47c422769c9d7c02d44c5e46d7a01a1f6f6cd3f0c3dd30250b0d6f8?apiKey=4be6ea9d4a03451ab3e59888e2e13dcc&",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/68b816bb9acffb341171968fefbb391988446b4ce15ad31d46da3966155fa16d?apiKey=4be6ea9d4a03451ab3e59888e2e13dcc&",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/50167bdf28bd970981915e2b7e0bf1938dcfc5d9bbd7b24eaed7bbf0389973a0?apiKey=4be6ea9d4a03451ab3e59888e2e13dcc&",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca30c94f3da383093f4553d97b4a2100d26e6c5a6a5526b2d7c12b7c260b9632?apiKey=4be6ea9d4a03451ab3e59888e2e13dcc&",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a5ccd806d116bd1c05ae447f3a791a2a8c9947d780945cc2a852853e43281c?apiKey=4be6ea9d4a03451ab3e59888e2e13dcc&",
      alt: "Social media icon",
    },
  ];

  return (
    <footer className="mt-6 w-full max-md:max-w-full mb-2 ">
      <div className="flex gap-5 justify-between items-center  px-2 xl:px-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 self-stretch my-auto text-zinc-400">
          <p className="grow text-xs xl:text-base leading-6">
            © {copyrightYear} Forss Digital. All rights reserved
          </p>
          <FooterLink text="Manage cookies" />
        </div>
        <div className="flex gap-4 self-stretch max-md:flex-wrap">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
        <div className="flex gap-2 justify-between text-xs xl:text-base text-zinc-400">
          <FooterLink text="Terms and Conditions" />
          <FooterLink text="Privacy Policy" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
