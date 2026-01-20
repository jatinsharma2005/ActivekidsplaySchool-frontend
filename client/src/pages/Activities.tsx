import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Music, Palette, BookOpen, User } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      title: "Music & Movement",
      description: "Rhythm, songs, and dance help children develop coordination and express themselves creatively.",
      icon: <Music className="w-8 h-8 text-white" />,
      color: "bg-[hsl(var(--primary-red))]",
      img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop"
    },
    {
      title: "Art & Creativity",
      description: "Exploring colors, textures, and shapes through painting, crafting, and messy play.",
      icon: <Palette className="w-8 h-8 text-white" />,
      color: "bg-[hsl(var(--primary-blue))]",
      img: "https://images.unsplash.com/photo-1596464716127-f9a0859b4b53?w=600&h=400&fit=crop"
    },
    {
      title: "Storytelling & Drama",
      description: "Bringing stories to life through puppets, role-play, and interactive reading sessions.",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: "bg-[hsl(var(--primary-green))]",
      img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=600&h=400&fit=crop"
    },
    {
      title: "Physical Education",
      description: "Outdoor games, yoga, and obstacle courses to build strength, balance, and teamwork.",
      icon: <User className="w-8 h-8 text-white" />,
      color: "bg-[hsl(var(--primary-yellow))]",
      img: "https://images.unsplash.com/photo-1610817928734-e4c34a974b7c?w=600&h=400&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Our Activities" 
        subtitle="Learning happens best when it's fun!" 
        color="green"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                 <div className={`absolute top-4 left-4 ${activity.color} p-3 rounded-2xl shadow-lg z-10`}>
                    {activity.icon}
                 </div>
                 <img 
                   src={activity.img} 
                   alt={activity.title} 
                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                 />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
