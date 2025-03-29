
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isAcademicsOpen) setIsAcademicsOpen(false);
  };

  const toggleAcademics = () => {
    setIsAcademicsOpen(!isAcademicsOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-school-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">BM</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-display font-bold text-school-dark">
              Brilliant Minds <span className="text-school-primary">Academy</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-school-dark hover:text-school-primary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button 
              onClick={toggleAcademics}
              className="flex items-center font-medium text-school-dark hover:text-school-primary transition-colors"
            >
              Academics
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1">
                <Link to="/academics/playgroup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-school-light">Playgroup</Link>
                <Link to="/academics/primary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-school-light">Primary (1-5)</Link>
                <Link to="/academics/middle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-school-light">Middle (6-8)</Link>
                <Link to="/academics/secondary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-school-light">Secondary (9-10)</Link>
              </div>
            </div>
          </div>
          <Link to="/facilities" className="font-medium text-school-dark hover:text-school-primary transition-colors">
            Facilities
          </Link>
          <Link to="/transportation" className="font-medium text-school-dark hover:text-school-primary transition-colors">
            Transportation
          </Link>
          <Link to="/hostel" className="font-medium text-school-dark hover:text-school-primary transition-colors">
            Hostel
          </Link>
          <Link to="/about" className="font-medium text-school-dark hover:text-school-primary transition-colors">
            About Us
          </Link>
          <Link to="/contact">
            <Button className="bg-school-primary hover:bg-school-secondary text-white">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-school-dark hover:text-school-primary focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-school-dark hover:text-school-primary py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div>
              <button 
                onClick={toggleAcademics}
                className="flex items-center justify-between w-full font-medium text-school-dark hover:text-school-primary py-2 border-b border-gray-100"
              >
                Academics
                <ChevronDown className={`h-4 w-4 transition-transform ${isAcademicsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAcademicsOpen && (
                <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                  <Link 
                    to="/academics/playgroup" 
                    className="block py-1 text-gray-700 hover:text-school-primary"
                    onClick={toggleMenu}
                  >
                    Playgroup
                  </Link>
                  <Link 
                    to="/academics/primary" 
                    className="block py-1 text-gray-700 hover:text-school-primary"
                    onClick={toggleMenu}
                  >
                    Primary (1-5)
                  </Link>
                  <Link 
                    to="/academics/middle" 
                    className="block py-1 text-gray-700 hover:text-school-primary"
                    onClick={toggleMenu}
                  >
                    Middle (6-8)
                  </Link>
                  <Link 
                    to="/academics/secondary" 
                    className="block py-1 text-gray-700 hover:text-school-primary"
                    onClick={toggleMenu}
                  >
                    Secondary (9-10)
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/facilities" 
              className="font-medium text-school-dark hover:text-school-primary py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Facilities
            </Link>
            <Link 
              to="/transportation" 
              className="font-medium text-school-dark hover:text-school-primary py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Transportation
            </Link>
            <Link 
              to="/hostel" 
              className="font-medium text-school-dark hover:text-school-primary py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Hostel
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-school-dark hover:text-school-primary py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              <Button className="w-full bg-school-primary hover:bg-school-secondary text-white">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
