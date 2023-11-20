import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-[#2E2F41] text-gray-200 py-4 fixed top-0 z-50 inset-x-0  px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="gap-12 flex  justify-between items-center">
          <Link
            to="/"
            className="text-2xl flex items-center gap-4 font-bold text-blue-500"
          >
            <span className="">ASOME NEWS</span>
          </Link>

          <ul className="">
            <li className="bg-[#F6AC7A] text-[#404254] px-4 py-2 flex">
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
