import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Star,
  Heart,
  Smile,
  Sun,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
   const testimonials = [
    {
      text: "My child has become more confident and happy since joining Active Kids. The teachers are incredibly caring.",
      parent: "Priya Sharma",
      student: "Aarav (Nursery)",
    },
    {
      text: "The school environment feels like a second home. We truly appreciate the personal attention given to each child.",
      parent: "Rahul Mehta",
      student: "Anaya (LKG)",
    },
    {
      text: "Amazing activities and learning methods! My son learns while having fun every single day.",
      parent: "Sneha Verma",
      student: "Kabir (UKG)",
    },
    {
      text: "Safety and hygiene are top notch. We feel completely relaxed sending our daughter here.",
      parent: "Neha Gupta",
      student: "Myra (Playgroup)",
    },
    {
      text: "We’ve seen huge improvement in communication and confidence. Truly the best preschool experience.",
      parent: "Amit Singh",
      student: "Vihaan (Nursery)",
    },
    {
      text: "Perfect balance of learning and fun. Highly recommended to every parent!",
      parent: "Ritika Kapoor",
      student: "Ishaan (UKG)",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

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
                Where Learning Meets with<br></br> <span className="text-[hsl(var(--primary-blue))]">Fun</span> & <span className="text-[hsl(var(--primary-green))]">Growth</span>
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
                    src="https://i.ibb.co/k6yTD7Sm/kids-2985782-1280.jpg" 
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

      {/* About / Why Active Kids Section */}
<section className="py-16 md:py-24 bg-white relative overflow-hidden">

  {/* soft blobs */}
  <div className="absolute -top-32 -left-32 w-80 h-80 md:w-96 md:h-96 bg-[hsl(var(--primary-yellow))/20] rounded-full blur-3xl" />
  <div className="absolute -bottom-32 -right-32 w-80 h-80 md:w-96 md:h-96 bg-[hsl(var(--primary-blue))/20] rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* better responsive grid */}
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center lg:text-left"
      >
        <span className="text-[hsl(var(--primary-red))] font-bold uppercase tracking-wider text-sm">
          About Active Kids
        </span>

        {/* responsive heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 mb-5 leading-tight">
          A Happy Place Where{" "}
          <span className="text-[hsl(var(--primary-green))]">
            Kids Learn, Play & Grow
          </span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          We create a joyful and safe space where children explore, imagine,
          and build confidence every day through play-based learning and
          loving teachers.
        </p>

        {/* Features → card style (better UI than plain list) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            "Safe & Caring Environment",
            "Smart Classrooms",
            "Play-Based Learning",
            "Qualified Loving Teachers",
            "Life Skills Focus",
            "Parent Involvement",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 px-4 py-3 rounded-xl transition"
            >
              <div className="w-6 h-6 rounded-full bg-[hsl(var(--primary-green))] text-white text-xs flex items-center justify-center">
                ✓
              </div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <Link href="/about">
          <Button className="rounded-full px-8 h-12 shadow-md hover:shadow-lg bg-[hsl(var(--primary-blue))] hover:bg-[hsl(var(--primary-blue))/90]">
            Learn More About Us
          </Button>
        </Link>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
      >
        {/* controlled responsive size */}
        <img
          src="/school.png"
          alt="Kids learning"
          className="
            rounded-3xl shadow-2xl
            w-[80%] sm:w-[70%] md:w-[60%] lg:w-[90%]
            max-w-sm md:max-w-md lg:max-w-lg
            object-cover
            hover:scale-105 transition-transform duration-300
          "
        />

        {/* floating badge */}
        <div className="absolute bottom-2 left-6 md:-bottom-5 md:-left-5 bg-white shadow-lg rounded-xl px-4 py-2 text-sm font-semibold">
          🎉 500+ Happy Kids
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
              <span className="text-[hsl(var(--primary-red))] font-bold uppercase tracking-wider">Our Activities & Celebrations</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Learning Through Play</h2>
            </div>
            <Link href="/activities">
              <Button variant="ghost" className="text-[hsl(var(--primary-blue))] font-bold hover:bg-[hsl(var(--primary-blue))/10] mt-4 md:mt-0">
                View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Music & Dance", img: "https://res.cloudinary.com/ddvmdrxaz/image/upload/v1769228952/activeschool/IMG-20260122-WA0030_tbd6as.jpg" },
              { title: "Art & Craft", img: "https://res.cloudinary.com/ddvmdrxaz/image/upload/v1769228945/activeschool/IMG-20260122-WA0034_rpofns.jpg" },
              { title: "Republic Day", img: "https://res.cloudinary.com/ddvmdrxaz/image/upload/v1769228943/activeschool/IMG-20260122-WA0026_df1v5b.jpg" },
              { title: "Janmashtami", img: "https://res.cloudinary.com/ddvmdrxaz/image/upload/v1769228944/activeschool/IMG-20260122-WA0029_eyg8cy.jpg" },
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
      <section className="py-16 md:py-24 bg-[hsl(var(--primary-yellow))/5] relative overflow-hidden">

  {/* soft background blobs */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[hsl(var(--primary-blue))/15] rounded-full blur-3xl" />
  <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[hsl(var(--primary-red))/15] rounded-full blur-3xl" />

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

    {/* Heading */}
    <div className="mb-12 md:mb-16">
      <span className="text-[hsl(var(--primary-blue))] font-bold uppercase tracking-wider text-sm">
        What Our Parents Say
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-2">
        Loved by Families ❤️
      </h2>
    </div>


    {/* Slider wrapper */}
    <div className="relative flex items-center justify-center">

      {/* Left arrow */}
      <button
        onClick={prev}
        className="
          hidden sm:flex
          absolute -left-4 md:-left-10
          bg-white shadow-lg p-3 rounded-full
          hover:scale-110 transition
        "
      >
        <ChevronLeft className="w-5 h-5" />
      </button>


      {/* Card */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          bg-white
          rounded-3xl
          p-6 sm:p-10 md:p-14
          shadow-xl
          border border-gray-100
          w-full
          max-w-xl md:max-w-2xl
          min-h-[260px] md:min-h-[300px]
          flex flex-col justify-between
        "
      >
        {/* stars */}
        <div className="flex justify-center mb-4 text-yellow-400">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400" />
            ))}
        </div>

        {/* text */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-6">
          “{testimonials[index].text}”
        </p>

        {/* parent info */}
        <div>
          <h4 className="font-bold text-md md:text-lg">
            {testimonials[index].parent}
          </h4>
          <p className="text-xs md:text-sm text-muted-foreground">
            Parent of {testimonials[index].student}
          </p>
        </div>
      </motion.div>


      {/* Right arrow */}
      <button
        onClick={next}
        className="
          hidden sm:flex
          absolute -right-4 md:-right-10
          bg-white shadow-lg p-3 rounded-full
          hover:scale-110 transition
        "
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>


    {/* Mobile dots indicator */}
    <div className="flex justify-center gap-2 mt-6 sm:hidden">
      {testimonials.map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${
            i === index
              ? "bg-[hsl(var(--primary-blue))]"
              : "bg-gray-300"
          }`}
        />
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
