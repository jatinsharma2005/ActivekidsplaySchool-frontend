import { PageHeader } from "@/components/PageHeader";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Get In Touch" 
        subtitle="We'd love to hear from you!" 
        color="blue"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-[hsl(var(--primary-blue))]">Visit Us</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-[hsl(var(--primary-red))/10] p-4 rounded-2xl">
                  <MapPin className="w-8 h-8 text-[hsl(var(--primary-red))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Campus</h3>
                  <p className="text-muted-foreground text-lg">
                    123 Sunshine Lane, Happy Valley<br />
                    City, State - 123456
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[hsl(var(--primary-green))/10] p-4 rounded-2xl">
                  <Phone className="w-8 h-8 text-[hsl(var(--primary-green))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-lg">+91 98765 43210</p>
                  <p className="text-muted-foreground text-lg">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[hsl(var(--primary-blue))/10] p-4 rounded-2xl">
                  <Clock className="w-8 h-8 text-[hsl(var(--primary-blue))]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground text-lg">Mon - Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-3xl h-64 w-full overflow-hidden shadow-inner">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.182478546187!2d77.0697!3d28.5042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzE1LjEiTiA3N8KwMDQnMTAuOSJF!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="School Location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-lg">
            <h2 className="text-3xl font-display font-bold mb-6 text-[hsl(var(--primary-red))]">Send an Enquiry</h2>
            <p className="text-muted-foreground mb-8">Fill out the form below and we'll contact you regarding admission.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold">Parent's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-14 rounded-xl border-gray-200 bg-white text-lg focus:border-[hsl(var(--primary-blue))]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-bold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="h-14 rounded-xl border-gray-200 bg-white text-lg focus:border-[hsl(var(--primary-blue))]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-bold">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 9999999999" className="h-14 rounded-xl border-gray-200 bg-white text-lg focus:border-[hsl(var(--primary-blue))]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="I'm interested in admission for my 3-year-old..." 
                          className="min-h-[150px] rounded-xl border-gray-200 bg-white text-lg p-4 focus:border-[hsl(var(--primary-blue))]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-14 text-lg font-bold rounded-xl bg-[hsl(var(--primary-red))] hover:bg-[hsl(var(--primary-red))/90] shadow-lg mt-4"
                >
                  {isPending ? "Sending..." : "Submit Enquiry"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
