import { PageHeader } from "@/components/PageHeader";
import {
  CheckCircle2,
  Calendar,
  FileText,
  School,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Admissions() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Admissions"
        subtitle="Join the Active Kids family today"
        color="yellow"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        {/* ================================= */}
        {/* AGE CRITERIA */}
        {/* ================================= */}
        <section className="mb-24 text-center">

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Age Criteria & Timings
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                name: "Play Group",
                age: "2+ Years",
                icon: "🧸",
                color: "bg-[hsl(var(--primary-red))/10]",
              },
              {
                name: "Nursery",
                age: "3+ Years",
                icon: "🎨",
                color: "bg-[hsl(var(--primary-blue))/10]",
              },
              {
                name: "K.G.",
                age: "4+ Years",
                icon: "📚",
                color: "bg-[hsl(var(--primary-green))/10]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-8"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-5 ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold">{item.name}</h3>

                <p className="text-muted-foreground mt-2 font-medium">
                  Age: {item.age}
                </p>

                <p className="mt-2 text-sm font-semibold text-[hsl(var(--primary-blue))]">
                  ⏰ 9:00 a.m. – 12:00 p.m.
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Same timing for all programs
          </p>
        </section>


        {/* ================================= */}
        {/* PROCESS + DOCUMENTS */}
        {/* ================================= */}
        <section className="grid lg:grid-cols-2 gap-16 mb-24">

          {/* Admission Process (timeline style) */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-10">
              Admission Process
            </h2>

            <div className="space-y-8">

              {[
                {
                  title: "Fill Enquiry Form",
                  desc: "Submit the online enquiry form or visit our campus.",
                  icon: <FileText />,
                },
                {
                  title: "School Visit",
                  desc: "Tour our classrooms & meet our friendly teachers.",
                  icon: <School />,
                },
                {
                  title: "Interaction",
                  desc: "Short interaction with child and parents.",
                  icon: <Users />,
                },
                {
                  title: "Confirm Seat",
                  desc: "Submit documents and fee to reserve admission.",
                  icon: <Calendar />,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[hsl(var(--primary-blue))/10] text-[hsl(var(--primary-blue))]">
                    {step.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


          {/* Documents Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[hsl(var(--primary-red))/5] p-8 md:p-10 rounded-3xl shadow-sm"
          >
            <h2 className="text-3xl font-display font-bold mb-8">
              Documents Required
            </h2>

            <ul className="space-y-4">
              {[
                "Birth Certificate (Original + Copy)",
                "Passport size photographs of Child (4)",
                "Passport size photographs of Parents",
                "Aadhar Card / ID Proof",
                "Medical Fitness Certificate",
                "Transfer Certificate (if applicable)",
              ].map((doc, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--primary-green))]" />
                  <span className="text-sm font-medium">{doc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>


        {/* ================================= */}
        {/* CTA SECTION */}
        {/* ================================= */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--primary-green))] text-white"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Seats Filling Fast!
          </h2>

          <p className="opacity-90 mb-8 max-w-xl mx-auto">
            Give your child the best start with Active Kids Play School.
            Limited seats available for the upcoming session.
          </p>

          <Link href="/contact">
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-10 h-14 font-bold shadow-lg">
              Apply Now
            </Button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
