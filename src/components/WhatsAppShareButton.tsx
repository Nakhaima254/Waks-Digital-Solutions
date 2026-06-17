import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppShareButtonProps {
  title: string;
  url?: string;
  description?: string;
  className?: string;
}

const WhatsAppShareButton = ({
  title,
  url,
  description,
  className = "",
}: WhatsAppShareButtonProps) => {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = description
    ? encodeURIComponent(description)
    : encodedTitle;

  const shareText = `${title}\n\n${description || ""}\n\n${shareUrl}`;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  const handleShare = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      className={`gap-2 bg-[#25D366]/10 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors ${className}`}
      title="Share on WhatsApp"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Share on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </Button>
  );
};

export default WhatsAppShareButton;
