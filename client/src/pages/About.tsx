import { PageHeader } from "@/components/PageHeader";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="About Active Kids" 
        subtitle="Building a foundation for lifelong learning since 2010" 
        color="blue"
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute top-[-20px] left-[-20px] w-full h-full border-4 border-[hsl(var(--primary-yellow))] rounded-3xl z-0" />
              {/* teacher reading to kids */}
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=600&fit=crop" 
                alt="Our classroom" 
                className="rounded-3xl shadow-lg relative z-10 w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 text-[hsl(var(--primary-red))]">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to create a space where children can explore, learn, and grow at their own pace, Active Kids Play School has become a second home for hundreds of families.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that early childhood is not a race, but a journey of discovery. Our curriculum blends Montessori principles with modern play-based learning techniques to ensure holistic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[hsl(var(--primary-blue))/5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-[hsl(var(--primary-green))/20]">
              <div className="w-12 h-12 bg-[hsl(var(--primary-green))] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To provide a safe, stimulating, and caring environment where every child is encouraged to explore their potential and develop a lifelong love for learning.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-[hsl(var(--primary-red))/20]">
              <div className="w-12 h-12 bg-[hsl(var(--primary-red))] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                To be recognized as a center of excellence in early childhood education, fostering creativity, confidence, and compassion in the leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-16 text-[hsl(var(--primary-yellow))] mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl font-display font-bold mb-8">Principal's Message</h2>
          <p className="text-xl text-muted-foreground italic mb-8 leading-relaxed">
            "At Active Kids, we don't just teach; we inspire. Every child is unique, and our job is to find the key that unlocks their potential. Seeing their smiles every morning is our greatest reward."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
               {/* Headshot placeholder */}
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" alt="Principal" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-lg">Mrs. Sarah Johnson</h4>
              <p className="text-sm text-muted-foreground">Principal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
