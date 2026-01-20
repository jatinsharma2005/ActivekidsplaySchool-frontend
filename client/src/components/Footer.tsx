import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-bold text-[hsl(var(--primary-red))]">
                Active Kids
              </span>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                Play School
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Nurturing young minds with love, care, and creative learning. Where every day is an adventure!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[hsl(var(--primary-blue))/10] p-2 rounded-full text-[hsl(var(--primary-blue))] hover:bg-[hsl(var(--primary-blue))] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[hsl(var(--primary-red))/10] p-2 rounded-full text-[hsl(var(--primary-red))] hover:bg-[hsl(var(--primary-red))] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[hsl(var(--primary-green))/10] p-2 rounded-full text-[hsl(var(--primary-green))] hover:bg-[hsl(var(--primary-green))] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Admissions", href: "/admissions" },
                { label: "Activities", href: "/activities" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-[hsl(var(--primary-red))] font-medium transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-[hsl(var(--primary-red))] shrink-0 mt-1" />
                <span>123 Sunshine Lane, Happy Valley, City, State - 123456</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-[hsl(var(--primary-green))] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-[hsl(var(--primary-blue))] shrink-0" />
                <span>hello@activekids.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Map placeholder */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">Visit Us</h3>
            <div className="bg-gray-200 rounded-xl h-40 w-full flex items-center justify-center text-gray-400 overflow-hidden">
              {/* map placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.182478546187!2d77.0697!3d28.5042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzE1LjEiTiA3N8KwMDQnMTAuOSJF!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="School Location"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Active Kids Play School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
