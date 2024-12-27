import { useState } from "react";
import { Search, Heart, ShoppingCart, ChevronDown, Menu } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollPosition, scrollDirection } = useScrollPosition();

  const navItems = ["HOME", "PRODUCTS", "ABOUT", "GALLERY"];

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
          opacity: scrollPosition > 500 ? 1 : 1, // Ensure visibility after 100px
          backgroundColor: scrollPosition > 500 ? "#6c757d" : "transparent",
          
        }}
        transition={{ duration: 0.1 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">Cliq</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <div key={item} className="relative group">

                  <button className=" hoverScale inline-flex items-center px-1 pt-1 text-xs  font-medium hover:text-yellow-500 transition-colors text-white">

                    {item}
                    {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                  </button>
                  {/* <div className="absolute hidden group-hover:block w-48 bg-black shadow-lg py-2 mt-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800"
                    >
                      Option 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800"
                    >
                      Option 2
                    </a>
                  </div> */}
                </div>
              ))}
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4 text-white">
              {/* <div className="hidden md:flex items-center">
                <input
                  type="text"
                  placeholder="Search product ..."
                  className="w-64 px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent"
                />
                <Search className="h-5 w-5 -ml-8" />
              </div> */}
              <button className="p-2 hover:text-yellow-500 transition-colors">
                <Heart className="h-6 w-6" />
              </button>
              {/* <button className="p-2 hover:text-blue-400 transition-colors relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button> */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-transparent"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-blue-400 hover:bg-gray-800"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
