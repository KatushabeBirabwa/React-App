import { FaGithub, FaLinkedin } from 'react-icons/fa';

import React from 'react';

export default function Footer() {
  const socialMediaHandles = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/katubirabwa/",
      icon: <FaLinkedin />
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/KatushabeBirabwa",
      icon: <FaGithub />
    }
  ];

  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Katushabe Birabwa <span>Portfolio</span>
      </p>
      <div className="social-media">
        {socialMediaHandles.map(handle => (
          <a
            key={handle.id}
            href={handle.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={handle.name}
          >
            {handle.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
