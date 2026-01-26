import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

type InsertInquiry = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      return emailjs.send(
        "service_mx3v637",     // 🔴 replace
        "template_tetaelg",    // 🔴 replace
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "EGerCISkMeS7LodfZ"      // 🔴 replace
      );
    },

    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Your enquiry has been sent successfully.",
        className: "bg-[hsl(var(--primary-green))] text-white border-none",
      });
    },

    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send enquiry. Please try again.",
        variant: "destructive",
      });
    },
  });
}
