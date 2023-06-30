import { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="sticky z-10 flex top-0 bg-gradient-to-r from-rose-400 to-pink-500 text-zinc-100">
      <div className="flex items-center p-2 gap-2 justify-between ">
        <img src={logo} alt="logo" className="" width={50} />
        <div className="font-semibold text-2xl font-alkatra ">
          Deep:<span className="text-sky-700 ">Fest</span>
        </div>
        {/* this is for hamburger menu start here */}
      </div>
      {/* this is for mobile menu start here */}
      <div className="flex items-center md:hidden block ml-auto pr-4 my-auto cursor-pointer">
        {nav ? (
          <FaBars onClick={() => setNav(!nav)} size={30} />
        ) : (
          <FaTimes onClick={() => setNav(!nav)} size={30} />
        )}
      </div>

      {nav ? (
        <div className="absolute left-0 top-[62px] w-full bg-gradient-to-r from-rose-500 to-pink-500 md:hidden lg:hidden xl:hidden">
          <div className="menu_items">
            <span>Home</span>
          </div>

          <div className="menu_items">
            <span>Line up</span>
          </div>
          <div className="menu_items group">
            <span>Tickets</span>
            <div className="hidden w-full group-hover:block bg-pink-400 absolute top-full right-0 whitespace-nowrap rounded-b-md text-center">
            <div className="p-4 font-bold hover:bg-white/10 hover:text-zinc-100">
              <span>single day ticket</span>
            </div>
            <div className="p-4 font-bold hover:bg-white/10 hover:text-zinc-100">
              <span>7 day ticket</span>
            </div>
          </div>
          </div>
          <div className="menu_items">
          <span>Support</span>
        </div>
        </div>
      ) : (
        ""
      )}
      {/* this is for mobile menu end here here */}
      <div className="flex-1 hidden md:flex items-center justify-end ">
        <div className="menu_items">
          <span>Home</span>
        </div>

        <div className="menu_items">
          <span>Line up</span>
        </div>

        <div className="menu_items group">
          <span>Ticket</span>

          <div className="hidden group-hover:block bg-pink-400 absolute top-full right-0 whitespace-nowrap rounded-b-md text-right">
            <div className="p-4 font-bold hover:bg-white/10 hover:text-zinc-100">
              <span>single day ticket</span>
            </div>
            <div className="p-4 font-bold hover:bg-white/10 hover:text-zinc-100">
              <span>7 day ticket</span>
            </div>
          </div>
        </div>

        <div className="menu_items">
          <span>Support</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
