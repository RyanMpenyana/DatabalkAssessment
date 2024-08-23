import KnusWonenLogo from "../assets/logo.png";
import search from "../assets/search.svg";
import userIcon from "../assets/user.svg";
import { useEffect, useState } from "react";
import MobileModal from "../MobileModal";
const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible , setIsVisible] = useState(false) 

  const handleModal = () => {
        if(!isVisible){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
  }
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    
      <nav className="flex w-full justify-between h-20 ">
        <div className="flex items-center">
          <img
            className="logo"
            src={KnusWonenLogo}
            alt=""
          />
        </div>
        {width >= 768 ? (
          <ul className="nav-items flex gap-6 font-poppins text-tertiary font-semibold  items-center">
            <li>
              <a href="">Ik huur</a>
            </li>
            <li>
              <a href="">Ik zoek</a>
            </li>
            <li>
              <a href="">Over ons</a>
            </li>
            <li>
              <a href="">Projecten</a>
            </li>
          </ul>
        ) : (
          ""
        )}
        <div className="flex gap-5 items-center">
          <img className="w-7" src={search} alt="" />
          {width < 768 ? (
            <div onClick={handleModal} className="flex flex-col gap-2">
              <span className="block h-0.5 w-8  bg-gray-600"></span>
              <span className="block h-0.5 w-8  bg-gray-600"></span>
              <span className="block h-0.5 w-8  bg-gray-600"></span>
            </div>
          ) : (
            <img className="w-7" src={userIcon} />
          )}
        </div>
      </nav>
    
  );
};

export default Navbar;
