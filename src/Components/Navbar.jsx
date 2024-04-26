import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-base text-[#54A15D] py-1 rounded-lg "
                    : " font-semibold  text-base"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-base  text-[#54A15D]   py-1 rounded-lg "
                    : "font-semibold  text-base"
                }
                to="/alltouristsspot"
              >
                All Tourists Spot
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-base text-[#54A15D]   py-1 rounded-lg "
                    : " font-semibold   text-base"
                }
                to="/addtouristsspot"
              >
                Add Tourists Spot
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-base text-[#54A15D]   py-1 rounded-lg "
                    : " font-semibold   text-base"
                }
                to="/mylist"
              >
                My List
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-base lg:text-3xl font-semibold lg:font-bold text-black">
            <span className="text-[#54A15D] ">Explore</span> ME
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  items-center gap-5">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-base  text-[#54A15D]  px-5 py-3 rounded-lg "
                  : " font-semibold   text-base"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-base  text-[#54A15D]    px-5 py-3 rounded-lg "
                  : "font-semibold   text-base"
              }
              to="/alltouristsspot"
            >
              All Tourists Spot
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-base  text-[#54A15D]  px-5 py-3 rounded-lg "
                  : " font-semibold   text-base"
              }
              to="/addtouristsspot"
            >
              Add Tourists Spot
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-base  text-[#54A15D]  px-5 py-3 rounded-lg "
                  : " font-semibold   text-base"
              }
              to="/mylist"
            >
              My List
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
         
          
           
           <div className="flex gap-2">
           <Link to={"/login"}>
              <a className="btn text-[#54A15D] text-base">Login</a>
            </Link>
            <Link to={"/register"}>
              <a className="btn text-white bg-[#54A15D] text-base">Register</a>
            </Link>
           </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
