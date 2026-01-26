import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", color: "hover:text-[hsl(var(--primary-red))]" },
    { href: "/about", label: "About Us", color: "hover:text-[hsl(var(--primary-blue))]" },
    { href: "/admissions", label: "Admissions", color: "hover:text-[hsl(var(--primary-yellow))]" },
    { href: "/gallery", label: "Gallery", color: "hover:text-[hsl(var(--primary-red))]" },
    { href: "/contact", label: "Contact", color: "hover:text-[hsl(var(--primary-blue))]" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b-4 border-[hsl(var(--primary-yellow))] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            
    <img
  src="/logo.png"
  alt="Active Kids Logo"
  className="h-24 w-24 md:h-32 md:w-32 object-contain mx-auto"
/>

            
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-foreground leading-none">
                Active Kids
              </span>
              <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                Play School
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-bold text-lg transition-colors duration-200 relative group py-2",
                  location === link.href ? "text-foreground" : "text-muted-foreground",
                  link.color
                )}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[hsl(var(--primary-red))] rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-[hsl(var(--primary-blue))] hover:bg-[hsl(var(--primary-blue))/90] text-white rounded-full px-6 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Phone className="w-4 h-4 mr-2" />
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b-4 border-[hsl(var(--primary-blue))]"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-3 rounded-xl text-xl font-bold text-center cursor-pointer transition-colors",
                      location === link.href
                        ? "bg-[hsl(var(--primary-yellow))/20] text-foreground"
                        : "text-muted-foreground hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contact">
                  <Button 
                    className="w-full bg-[hsl(var(--primary-red))] hover:bg-[hsl(var(--primary-red))/90] text-white text-lg py-6 rounded-xl shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
