import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <div className="w-screen">
      <nav className="text-center p-10 flex flex-wrap items-center justify-between mx-auto bg-transparent text-white">
        <div>
          <NavLink to="/">
            <HomeIcon />
          </NavLink>
        </div>
        <div className="grid justify-center">
          <h1 className="text-2xl font-thin uppercase">
            Easy<span className="font-black">Block</span>
          </h1>
          <p className="text-xs font-thin">ETH Block Explorer</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
