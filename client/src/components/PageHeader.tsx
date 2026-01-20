import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  color?: "red" | "blue" | "green" | "yellow";
}

export function PageHeader({ title, subtitle, color = "blue" }: PageHeaderProps) {
  const colors = {
    red: "bg-[hsl(var(--primary-red))]",
    blue: "bg-[hsl(var(--primary-blue))]",
    green: "bg-[hsl(var(--primary-green))]",
    yellow: "bg-[hsl(var(--primary-yellow))]",
  };

  return (
    <div className={`w-full py-20 ${colors[color]} relative overflow-hidden`}>
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-md"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
