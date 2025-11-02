import { MessageCircle } from "lucide-react";

const WhatsAppFloater = () => {
  const phoneNumber = "254723014032"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
    </a>
  );
};

export default WhatsAppFloater;
