import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop", // playing blocks
    "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=600&fit=crop", // kids running
    "https://images.unsplash.com/photo-1596464716127-f9a0859b4b53?w=800&h=600&fit=crop", // painting
    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop", // outdoor
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&h=600&fit=crop", // smiling
    "https://images.unsplash.com/photo-1610817928734-e4c34a974b7c?w=800&h=600&fit=crop", // sports
    "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&h=600&fit=crop", // reading
    "https://images.unsplash.com/photo-1502086223501-636c9f33b7a1?w=800&h=600&fit=crop", // group
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Captured Moments" 
        subtitle="Glimpses of our little stars in action" 
        color="red"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="break-inside-avoid rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-white p-2 border border-gray-100"
            >
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src={src} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
