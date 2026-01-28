import { PageHeader } from "@/components/PageHeader";
import { Quote, Heart, Shield, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white">

      <PageHeader
        title="About Active Kids Play School"
        subtitle="Where little steps become big dreams"
        color="blue"
      />

      {/* ================================= */}
      {/* STORY / ABOUT SCHOOL */}
      {/* ================================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              {/* YOUR SCHOOL IMAGE */}
<img
  src="/school.png"
  alt="Active Kids School"
  className="rounded-3xl shadow-2xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-lg object-cover"
/>


              {/* floating badge */}
             
            </motion.div>





            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-[hsl(var(--primary-red))]">
                Our Story
              </h2>

              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Active Kids Play School was created with one simple dream —
                to give every child a joyful, safe and inspiring place to grow.
                What started as a small classroom has now become a loving
                second home for hundreds of families.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We combine play-based learning, creativity, and personal care
                so children develop confidence, curiosity, and life skills —
                not just academics.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 text-center lg:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--primary-blue))]">50+</h3>
                  <p className="text-sm text-muted-foreground">Happy Kids</p>
                </div>
               
              </div>
            </motion.div>
          </div>
        </div>
      </section>



{/* ================================= */}
{/* FEATURED FOUNDERS (HIGHLIGHT SECTION) */}
{/* ================================= */}
<section className="relative py-20 md:py-28 overflow-hidden">

  {/* soft gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary-yellow))/15] via-white to-[hsl(var(--primary-blue))/10]" />

  {/* decorative blobs */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-[hsl(var(--primary-yellow))/20] rounded-full blur-3xl" />
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[hsl(var(--primary-blue))/20] rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* CARD CONTAINER (makes it pop) */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur rounded-[2.5rem] shadow-2xl p-8 md:p-14"
    >

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          <span className="inline-block px-4 py-1 mb-5 text-xl font-semibold rounded-full bg-[hsl(var(--primary-blue))/10] text-red-600">
            Our Founder's
          </span>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Meet The Hearts <br className="hidden md:block" />
            Behind Active Kids
          </h2>

          <h3 className="text-xl font-semibold text-[hsl(var(--primary-blue))] mb-6">
            Bhawna Gupta & Renu Sharma
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Active Kids Play School was created with one beautiful dream —
            to give every child a joyful, safe and loving place to grow.
            Their passion and dedication shape everything we do each day.
          </p>

          <div className="flex gap-4 items-start justify-center lg:justify-start">
            <Quote className="w-8 h-8 text-[hsl(var(--primary-yellow))] mt-1" />
            <p className="italic text-muted-foreground">
              “Every child deserves care, confidence and the freedom to explore.
              We nurture not just students, but little dreams.”
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative">

          {/* soft background card effect */}
          <div className="absolute inset-0 scale-105 rounded-3xl bg-[hsl(var(--primary-blue))/10] blur-2xl" />

          <img
            src="/founders.jpeg"
            alt="Founders of Active Kids Play School"
            className="relative rounded-3xl shadow-2xl w-[95%] md:w-full max-w-lg object-cover border-4 border-white"
          />
        </div>

      </div>
    </motion.div>
  </div>
</section>




      {/* ================================= */}
      {/* WHY PARENTS TRUST US (better than mission/vision plain boxes) */}
      {/* ================================= */}
      <section className="py-16 md:py-24 bg-[hsl(var(--primary-blue))/5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Why Parents Trust Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: <Heart />,
                title: "Caring Teachers",
                text: "Warm, loving mentors who treat every child like family",
                color: "bg-[hsl(var(--primary-red))]"
              },
              {
                icon: <Shield />,
                title: "Safe Campus",
                text: "Secure, hygienic & child-friendly environment",
                color: "bg-[hsl(var(--primary-blue))]"
              },
              {
                icon: <Sparkles />,
                title: "Fun Learning",
                text: "Play-based activities that make learning exciting",
                color: "bg-[hsl(var(--primary-green))]"
              },
              {
                icon: <Users />,
                title: "Parent Connect",
                text: "Regular updates & strong parent involvement",
                color: "bg-[hsl(var(--primary-yellow))]"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 shadow-md text-center"
              >
                <div className={`${item.color} w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* ================================= */}
      {/* PRINCIPAL MESSAGE (clean + modern) */}
      {/* ================================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <Quote className="w-14 h-14 mx-auto mb-6 text-[hsl(var(--primary-yellow))] opacity-50" />

          <h2 className="text-3xl font-display font-bold mb-6">
            Principal’s Message
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-8">
            "Every child is unique and full of potential. Our goal is to nurture
            their curiosity, build confidence, and create memories they will
            cherish for life. At Active Kids, learning is always joyful."
          </p>

          <div className="font-semibold">
            — The Active Kids Team
          </div>
        </div>
      </section>

    </div>
  );
}
