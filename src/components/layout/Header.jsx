import { Search, Heart } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import NavbarPhone from "./NavbarPhone";
import SearchDrawer from "../drawer/SearchDrawer";

export function Header() {
  const { scrollPosition, scrollDirection } = useScrollPosition();
  const location = useLocation();

  const navItems = [
    { to: "/", title: "HOME", isActive: true },
    { to: "/products", title: "PRODUCTS", isActive: true },
    { to: "/about", title: "ABOUT", isActive: true },
    { to: "/contact", title: "CONTACT", isActive: true },
  ];

  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/products" ||
    location.pathname === "/contact";

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y:
            scrollDirection === "down" &&
            scrollPosition > 0 &&
            scrollPosition < 500
              ? -100
              : 0,
          backgroundColor:
            !isHomePage || scrollPosition > 500
              ? "rgba(108, 117, 125, 1)" // Solid color for desktop
              : "transparent",
        }}
        transition={{ duration: 0.1 }}
        className="fixed w-full top-0 z-50 md:backdrop-blur-none basic-padding "
        style={{
          backgroundColor:
            !isHomePage || scrollPosition > 500
              ? "rgba(108, 117, 125, 0.95)" // Slightly transparent for mobile
              : "transparent",
        }}
      >
        <div>
          <div className="flex justify-between items-center h-16 ml-4 sm:ml-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">Cliq</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <div key={item?.title} className="relative group">
                  <Link to={item?.isActive && item?.to}>
                    <button className="hoverScale inline-flex items-center px-1 pt-1 text-xs font-medium hover:text-yellow-500 transition-colors text-white">
                      {item?.title}
                    </button>
                  </Link>
                </div>
              ))}
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4 text-white mr-2 sm:mr-0">
              <div className="relative hidden md:flex items-center">
                <Search className="h-5 w-5 absolute left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search product ..."
                  className={`w-64 pl-10 pr-4 py-1   bg-gray-700  rounded-full focus:outline-none focus:text-yellow-500`}
                />
              </div>

              <button className="p-2 hover:text-yellow-500 transition-colors">
                <Heart className="h-6 w-6" />
              </button>
              <div className="sm:hidden">
                <SearchDrawer />
              </div>
              <div className="sm:hidden">
                <NavbarPhone />
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
