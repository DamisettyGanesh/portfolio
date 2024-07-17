import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icons: <FaGithub />,
    path: "https://github.com/DamisettyGanesh",
  },
  {
    icons: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ganeshchittidamisetty",
  },
];

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icons}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
