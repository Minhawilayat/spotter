import { Link } from "react-router-dom";
import {
  Home,
  Layers,
  Calculator,
  BarChart2,
  Phone,
  LayoutDashboard
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#dbeafe] via-white to-[#c7d2fe] shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-600 text-transparent bg-clip-text">
          Spotter <span className="text-gray-900">AI</span>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 items-center font-medium text-gray-800">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 px-3 py-1 rounded transition"
            >
              <Home size={18} /> Home
            </Link>
          </li>

          {/* Features Dropdown */}
          <li className="relative group cursor-pointer">
            <span className="flex items-center gap-1 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 px-3 py-1 rounded transition">
              <LayoutDashboard size={18} /> Features
            </span>
            <ul className="absolute hidden group-hover:block bg-gradient-to-br from-white to-indigo-50 shadow-lg mt-2 rounded-lg w-52 p-2 border border-indigo-200 z-10">
              <li>
                <Link
                  to="/lens"
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 transition"
                >
                  <Layers size={16} /> Lens
                </Link>
              </li>
              <li>
                <Link
                  to="/tms"
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 transition"
                >
                  <Layers size={16} /> TMS
                </Link>
              </li>
              <li>
                <Link
                  to="/sentinel"
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 transition"
                >
                  <Layers size={16} /> Sentinel
                </Link>
              </li>
              <li>
                <Link
                  to="/extension"
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 transition"
                >
                  <Layers size={16} /> Extension
                </Link>
              </li>
              <li>
                <Link
                  to="/spotter-app"
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 transition"
                >
                  <Layers size={16} /> Spotter App
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/loan-calculators"
              className="flex items-center gap-1 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 px-3 py-1 rounded transition"
            >
              <Calculator size={18} /> Loan Calculators
            </Link>
          </li>

          <li>
            <Link
              to="/insights"
              className="flex items-center gap-1 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 px-3 py-1 rounded transition"
            >
              <BarChart2 size={18} /> Insights
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="flex items-center gap-1 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 px-3 py-1 rounded transition"
            >
              <Phone size={18} /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
