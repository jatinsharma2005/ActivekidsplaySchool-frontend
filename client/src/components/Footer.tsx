import { Link, useLocation } from "wouter";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const [location] = useLocation(); // 👈 detect route change

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* ================================= */}
          {/* BRAND */}
          {/* ================================= */}
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-bold text-[hsl(var(--primary-red))]">
              Active Kids Play School
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Nurturing young minds with love, care, and creative learning.
              Where every day is an adventure!
            </p>

            <a
              href="https://www.instagram.com/active_kids_play_school"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[hsl(var(--primary-red))/10] p-2 rounded-full text-[hsl(var(--primary-red))] hover:bg-[hsl(var(--primary-red))] hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* ================================= */}
          {/* QUICK LINKS */}
          {/* ================================= */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>

            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Admissions", href: "/admissions" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[hsl(var(--primary-red))] font-medium transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================= */}
          {/* CONTACT INFO */}
          {/* ================================= */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>

            <ul className="space-y-4 text-gray-600">

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--primary-red))] mt-1" />
                <span>
                  Jyoti Nagar Road, Shahdara <br />
                  Delhi – 110093
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--primary-green))]" />
                +91 97115 29616
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--primary-green))]" />
                +91 98111 68383
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--primary-blue))]" />
                tg798283@gmail.com
              </li>
            </ul>
          </div>

          {/* ================================= */}
          {/* MAP (ALWAYS VISIBLE + FIXED) */}
          {/* ================================= */}
          <div>
            <h3 className="text-xl font-bold mb-6">Visit Us</h3>

            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <div className="relative w-full aspect-[16/10]">

                <iframe
                  key={location}   // 🔥 forces remount on every route change (FIX)
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d874.981532220483!2d77.29388219838498!3d28.69185628347829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzMwLjciTiA3N8KwMTcnMzguMCJF!5e0!3m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="School Location"
                />

              </div>
            </div>
          </div>

        </div>

        {/* ================================= */}
        {/* COPYRIGHT */}
        {/* ================================= */}
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Active Kids Play School. All rights reserved. | Developed by{" "}
          <a
            href="https://jatin-portfolio-2005.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--primary-blue))] font-semibold hover:underline"
          >
            Jatin Kumar
          </a>
        </div>

      </div>
    </footer>
  );
}
