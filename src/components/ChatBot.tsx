import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! 👋 Welcome to Waks Digital Solutions. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickReplies = [
    "Tell me about your services",
    "I need a website",
    "What are your prices?",
    "Contact support"
  ];

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Thanks for your message! Our team will get back to you soon. For immediate assistance, you can also reach us via WhatsApp or email at hello@waksdigital.com";
      
      if (messageText.toLowerCase().includes("service")) {
        botResponse = "We offer Web Development, WordPress Design, E-commerce Solutions, SEO Services, Copywriting, and Web Maintenance. Which service interests you?";
      } else if (messageText.toLowerCase().includes("website")) {
        botResponse = "Great! We'd love to help you build your website. Our packages start from KES 15,000. Would you like to schedule a free consultation?";
      } else if (messageText.toLowerCase().includes("price")) {
        botResponse = "Our pricing varies based on project requirements. Visit our Pricing page or contact us for a custom quote. We have flexible packages for every budget!";
      } else if (messageText.toLowerCase().includes("contact") || messageText.toLowerCase().includes("support")) {
        botResponse = "You can reach us at hello@waksdigital.com or +254 700 000 000. We're here to help Monday-Friday, 9 AM - 6 PM EAT.";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-50 p-3 sm:p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] sm:max-h-[500px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary-foreground/20 p-2 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Waks Assistant</h3>
                  <p className="text-xs opacity-80">Online • Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        message.isBot
                          ? 'bg-muted text-muted-foreground rounded-bl-sm'
                          : 'bg-primary text-primary-foreground rounded-br-sm'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Replies */}
              {messages.length <= 2 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(reply)}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </ScrollArea>

            {/* Input */}
            <div className="p-3 border-t border-border bg-background/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 text-sm"
                />
                <Button type="submit" size="icon" className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
