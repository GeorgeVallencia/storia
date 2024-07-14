import { Link } from "react-router-dom";

function Header() {
  return(
    <div className="flex mx-auto items-center">
      <div className="flex mx-auto space-x-10 sm:space-x-20 md:space-x-30 lg-space-x-50 xl:space-x-80 py-10 px-5 items-center">
        <div className="cursor-pointer hover:text-teal-500 border border-teal-300 shadow-lg px-3 py-2">
          <Link to='/' className="font-bold text-teal-500 text-2xl">STORIA.COM</Link>
        </div>
        <div className="list-none mx-auto items-center flex space-x-8 border rounded-2xl py-1 px-4 shadow-lg cursor-pointer">
          <Link to='/articles' className="hover:text-teal-500 mx-auto items-center">Articles</Link>
          <Link to='/products' className="hover:text-teal-500 mx-auto items-center">Products</Link>
          <Link to='/packages' className="hover:text-teal-500 mx-auto items-center">Packages</Link>
        </div>
        <Link to="/signin"  className="cursor-pointer items-center">
          <button className="group hover:bg-teal-500 flex mx-auto">
            <p className="text-teal-500 group-hover:text-white font-bold border border-teal-500 py-1 px-4">Sign In</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;