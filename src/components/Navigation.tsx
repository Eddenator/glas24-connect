import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-primary hover:text-[#FFD700] transition-colors">Hem</Link>
            <Link to="/omraden" className="text-primary hover:text-[#FFD700] transition-colors">Områden</Link>
            <Link to="/om-oss" className="text-primary hover:text-[#FFD700] transition-colors">Om Oss</Link>
            <Link to="/kontakt" className="text-primary hover:text-[#FFD700] transition-colors">Kontakt</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-primary hover:text-[#FFD700] transition-colors">Hem</Link>
            <Link to="/omraden" className="block text-primary hover:text-[#FFD700] transition-colors">Områden</Link>
            <Link to="/om-oss" className="block text-primary hover:text-[#FFD700] transition-colors">Om Oss</Link>
            <Link to="/kontakt" className="block text-primary hover:text-[#FFD700] transition-colors">Kontakt</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;