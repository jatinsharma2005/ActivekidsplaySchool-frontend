import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Heart, Smile, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[hsl(var(--primary-yellow))/10] pt-20 pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--primary-blue))/10] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(var(--primary-red))/10] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <span className="text-[hsl(var(--primary-red))] font-bold tracking-wide text-sm">Welcome to Active Kids</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6">
                Where Learning Meets <span className="text-[hsl(var(--primary-blue))]">Fun</span> & <span className="text-[hsl(var(--primary-green))]">Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                A colorful world of discovery for your little ones. We provide a safe, nurturing environment where every child can bloom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/admissions">
                  <Button className="h-14 px-8 text-lg rounded-full bg-[hsl(var(--primary-red))] hover:bg-[hsl(var(--primary-red))/90] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all btn-bounce">
                    Join Our Family <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-white/50 transition-all btn-bounce">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  {/* playing with blocks */}
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=800&fit=crop" 
                    alt="Kids playing blocks"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-300" 
                  />
                  {/* drawing class */}
                  <img 
                    src="https://pixabay.com/get/g2bbcb1e2d92abc7dcc8e9587518a21737064986e40c4f821ebe5457a67bf9d7ecb2af306ff24562801d993fa9b0d8c5f0bc7bc522f0757f7b41e48292dd85d8d_1280.jpg" 
                    alt="Art class"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transform rotate-2 hover:rotate-0 transition-transform duration-300" 
                  />
                </div>
                <div className="space-y-4">
                  {/* happy child */}
                  <img 
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=800&fit=crop" 
                    alt="Happy child smiling"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transform rotate-3 hover:rotate-0 transition-transform duration-300" 
                  />
                  {/* outdoor play */}
                  <img 
                    src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=800&fit=crop" 
                    alt="Outdoor play"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[hsl(var(--primary-blue))] font-bold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Nurturing Tomorrow's Leaders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Star className="w-10 h-10 text-white" />, 
                title: "Expert Teachers", 
                desc: "Qualified and caring educators dedicated to your child's growth.",
                bg: "bg-[hsl(var(--primary-red))]" 
              },
              { 
                icon: <Heart className="w-10 h-10 text-white" />, 
                title: "Safe Environment", 
                desc: "Secure, clean, and child-friendly spaces for worry-free learning.",
                bg: "bg-[hsl(var(--primary-blue))]" 
              },
              { 
                icon: <Smile className="w-10 h-10 text-white" />, 
                title: "Holistic Growth", 
                desc: "Balanced curriculum focusing on social, emotional, and mental skills.",
                bg: "bg-[hsl(var(--primary-green))]" 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md rotate-3`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-24 bg-[hsl(var(--primary-green))/5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-[hsl(var(--primary-red))] font-bold uppercase tracking-wider">Our Activities</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Learning Through Play</h2>
            </div>
            <Link href="/activities">
              <Button variant="ghost" className="text-[hsl(var(--primary-blue))] font-bold hover:bg-[hsl(var(--primary-blue))/10] mt-4 md:mt-0">
                View All Activities <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Music & Dance", img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&h=600&fit=crop" },
              { title: "Art & Craft", img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=600&fit=crop" },
              { title: "Story Time", img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=600&h=600&fit=crop" },
              { title: "Outdoor Sports", img: "https://images.unsplash.com/photo-1610817928734-e4c34a974b7c?w=600&h=600&fit=crop" },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-white text-xl font-bold font-display">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[hsl(var(--primary-red))] via-[hsl(var(--primary-yellow))] to-[hsl(var(--primary-blue))]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[hsl(var(--primary-yellow))] rounded-full mb-8 shadow-lg animate-bounce">
            <Sun className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to Start the Adventure?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Admissions open for the upcoming academic year. Limited seats available. Give your child the best start!
          </p>
          <Link href="/contact">
            <Button className="h-16 px-10 text-xl rounded-full bg-[hsl(var(--primary-blue))] hover:bg-[hsl(var(--primary-blue))/90] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Enroll Your Child Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
