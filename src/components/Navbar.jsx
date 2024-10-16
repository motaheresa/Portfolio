import { useState } from "react";
import { LINKS } from "../constants";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpened(false);
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto md:my-2 bg-stone-950/30  p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/">Mohamed Taher</a>
        </div>
        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            aria-label={isMenuOpened ? "Close Menu" : "Open Menu"}
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          >
            {isMenuOpened ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpened && (
        <div className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400  transition duration-300"
              onClick={handleMenuClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
