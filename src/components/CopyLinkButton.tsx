import { Link as LinkIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface CopyLinkButtonProps {
  url?: string;
  className?: string;
}

const CopyLinkButton = ({ url, className = "" }: CopyLinkButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The page link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the URL manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={copyToClipboard}
      className={`gap-2 transition-colors ${className}`}
      title="Copy link"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          <span className="hidden sm:inline">Copied!</span>
          <span className="sm:hidden">Copied</span>
        </>
      ) : (
        <>
          <LinkIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Copy Link</span>
          <span className="sm:hidden">Copy Link</span>
        </>
      )}
    </Button>
  );
};

export default CopyLinkButton;
