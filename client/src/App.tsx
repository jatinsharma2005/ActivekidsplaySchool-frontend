import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

// Layout
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Admissions from "@/pages/Admissions";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

/* ================= Scroll to top ================= */
function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* ================= Backend Warmup ================= */
function WarmupBackend() {
  useEffect(() => {
    // small delay so it doesn't block first paint
    const timer = setTimeout(() => {
      fetch("https://activekidsplayschool-backend.onrender.com/", {
        mode: "no-cors",
      }).catch(() => {});
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

/* ================= Router ================= */
function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

/* ================= App ================= */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">

          <ScrollToTop />
          <WarmupBackend /> {/* ✅ backend wake here */}

          <Navigation />

          <main className="flex-grow">
            <Router />
          </main>

          <Footer />
        </div>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
