import React from 'react';

interface FooterLinkProps {
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <a href="#" className="justify-center text-xs xl:text-base ">{text}</a>
);

export default FooterLink;