import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getActiveResumePath } from "@/config/resume";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumePath = getActiveResumePath();

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors">
            Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild size="sm">
              <a href={resumePath} download>
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4 animate-fade-in">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild size="sm" className="w-fit">
              <a href={resumePath} download>
                Resume
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
