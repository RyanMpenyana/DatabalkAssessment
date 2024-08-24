import KnusWonenLogo from "./assets/logo.png";
import search from "./assets/search.svg";
import userIcon from "./assets/user.svg";

const Header = () => {
  return (
    <>
      <nav className="nav px-8 py-2 flex w-full justify-between lg:pl-[143px] lg:pr-[132px] lg:h-20 ">
        <div className="flex items-center">
          <img
            className="logo w-32 md:w-full"
            src={KnusWonenLogo}
            alt=""
          />
        </div>
          <ul className="nav-items hidden md:flex gap-6 text-[#39468C] xl:mr-[150px] font-semibold  items-center">
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
        
        <div className="flex gap-5 items-center">
          <img className="w-7" src={search} alt="" />
            <div className="flex md:hidden flex-col gap-2">
              <span className="block h-0.5 w-8  bg-gray-600"></span>
              <span className="block h-0.5 w-8  bg-gray-600"></span>
              <span className="block h-0.5 w-8  bg-gray-600"></span>
            </div>
            <img className="hidden md:inline-block w-7" src={userIcon} />
        </div>
      </nav>
    </>
  );
};

export default Header;
