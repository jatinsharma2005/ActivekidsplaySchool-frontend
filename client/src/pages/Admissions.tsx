import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, FileText, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Admissions() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Admissions" 
        subtitle="Join the Active Kids family today" 
        color="yellow"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Age Criteria Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Age Criteria</h2>
          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[hsl(var(--primary-blue))/10]">
                <tr>
                  <th className="p-6 font-bold text-lg">Program</th>
                  <th className="p-6 font-bold text-lg">Age Group</th>
                  <th className="p-6 font-bold text-lg">Timings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-6 font-medium text-[hsl(var(--primary-red))]">Play Group</td>
                  <td className="p-6">1.5 - 2.5 Years</td>
                  <td className="p-6">9:00 AM - 12:00 PM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-6 font-medium text-[hsl(var(--primary-blue))]">Nursery</td>
                  <td className="p-6">2.5 - 3.5 Years</td>
                  <td className="p-6">9:00 AM - 12:30 PM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-6 font-medium text-[hsl(var(--primary-green))]">Junior KG</td>
                  <td className="p-6">3.5 - 4.5 Years</td>
                  <td className="p-6">8:30 AM - 1:00 PM</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-6 font-medium text-[hsl(var(--primary-yellow))]">Senior KG</td>
                  <td className="p-6">4.5 - 5.5 Years</td>
                  <td className="p-6">8:30 AM - 1:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
             <h2 className="text-3xl font-display font-bold mb-8">Admission Process</h2>
             <div className="space-y-8">
                {[
                  { step: "01", title: "Fill Enquiry Form", desc: "Submit the online enquiry form or visit our campus." },
                  { step: "02", title: "School Visit", desc: "Schedule a tour to see our facilities and meet teachers." },
                  { step: "03", title: "Interaction", desc: "A brief informal interaction with the child and parents." },
                  { step: "04", title: "Submit Documents", desc: "Submit required documents and fee to confirm seat." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="font-display text-4xl font-bold text-gray-200">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-[hsl(var(--primary-red))/5] p-10 rounded-3xl">
             <h2 className="text-3xl font-display font-bold mb-8">Documents Required</h2>
             <ul className="space-y-4">
                {[
                  "Birth Certificate (Original + Copy)",
                  "Passport size photographs of Child (4)",
                  "Passport size photographs of Parents (2 each)",
                  "Aadhar Card / ID Proof of Parents",
                  "Medical Fitness Certificate",
                  "Transfer Certificate (if applicable)"
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-[hsl(var(--primary-green))]" />
                    <span className="font-medium">{doc}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[hsl(var(--primary-blue))] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3" />
          <h2 className="text-4xl font-display font-bold mb-6 relative z-10">Seats Filling Fast!</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto relative z-10">
            Secure your child's future with Active Kids Play School. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact">
              <Button className="bg-white text-[hsl(var(--primary-blue))] hover:bg-gray-100 h-14 px-8 text-lg rounded-full font-bold">
                Apply Online
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg rounded-full font-bold">
              <FileText className="mr-2 w-5 h-5" /> Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
