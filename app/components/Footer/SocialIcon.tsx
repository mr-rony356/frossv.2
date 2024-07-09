import React from 'react';

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <img 
    loading="lazy" 
    src={src} 
    alt={alt}
    className="shrink-0 w-12" 
  />
);

export default SocialIcon;