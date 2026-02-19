import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, X, Send, Bot, Trash2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  quickReplies?: string[];
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "waks-chat-history";
const TOOLTIP_SHOWN_KEY = "waks-fab-tooltip-shown";
const DEFAULT_QUICK_REPLIES = [
  "Tell me about your services",
  "I need a website",
  "What are your prices?",
  "Pay with Crypto",
  "Contact support"
];

// Quick replies that are links (navigate instead of sending a message)
const LINK_QUICK_REPLIES: Record<string, string> = {
  "Pay with Crypto": "/pricing/web-development#crypto",
  "See crypto payment details": "/pricing/web-development#crypto",
  "Crypto payment info": "/pricing/web-development#crypto",
  "View all pricing": "/pricing",
  "View pricing": "/pricing",
  "See our services": "/services",
  "See all services": "/services",
  "View our portfolio": "/portfolio",
  "Our portfolio": "/portfolio",
  "FAQ": "/faq",
  "Submit a ticket": "/ticket",
};
const DEFAULT_MESSAGE: Message = { 
  id: 1, 
  text: "Hi! 👋 Welcome to Waks Digital. How can I help you today?", 
  isBot: true,
  quickReplies: DEFAULT_QUICK_REPLIES
};

// Typing sound using Web Audio API
const playTypingSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(520, audioContext.currentTime + 0.05);
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  } catch (e) {
    console.log("Audio notification not available");
  }
};

const FloatingActions = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [DEFAULT_MESSAGE];
      }
    }
    return [DEFAULT_MESSAGE];
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const phoneNumber = "254750509252";
  const whatsappMessage = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailAddress = "info@waksdigital.co.ke";

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Show tooltip on first visit
  useEffect(() => {
    const tooltipShown = localStorage.getItem(TOOLTIP_SHOWN_KEY);
    if (!tooltipShown) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissTooltip = () => {
    setShowTooltip(false);
    localStorage.setItem(TOOLTIP_SHOWN_KEY, "true");
  };

  const clearHistory = () => {
    setMessages([DEFAULT_MESSAGE]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    playTypingSound();

    try {
      const chatHistory: ChatMessage[] = messages
        .filter(m => m.id > 1)
        .map(m => ({
          role: m.isBot ? "assistant" : "user",
          content: m.text
        }));
      
      chatHistory.push({ role: "user", content: messageText });

      const { data, error } = await supabase.functions.invoke("chatbot", {
        body: { messages: chatHistory }
      });

      if (error) throw error;

      const botMessage: Message = {
        id: messages.length + 2,
        text: data.content || "I apologize, I couldn't process that request.",
        isBot: true,
        quickReplies: data.quickReplies || []
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive"
      });
      
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I'm having trouble connecting right now. Please try again or contact us directly.",
        isBot: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const openChat = () => {
    setIsChatOpen(true);
    setIsExpanded(false);
  };

  return (
    <>
      {/* First Visit Tooltip */}
      <AnimatePresence>
        {showTooltip && !isChatOpen && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-20 bottom-4 sm:right-24 sm:bottom-6 z-[100] bg-background border border-border rounded-lg shadow-lg p-3 max-w-[200px]"
          >
            <button
              onClick={dismissTooltip}
              className="absolute -top-2 -right-2 bg-muted rounded-full p-1 hover:bg-muted/80"
            >
              <X className="h-3 w-3" />
            </button>
            <p className="text-xs text-muted-foreground">
              Need help? Click here to chat with our bot, WhatsApp, or email us!
            </p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="border-8 border-transparent border-l-border" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => {
          setIsExpanded(!isExpanded);
          dismissTooltip();
        }}
        className={`fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[100] p-3 sm:p-4 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-shadow ${isChatOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: isExpanded ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.button>

      {/* Expanded Action Buttons */}
      <AnimatePresence>
        {isExpanded && !isChatOpen && (
          <div className="fixed right-4 bottom-20 sm:right-6 sm:bottom-24 z-[100] flex flex-col gap-3">
            {/* Waks Bot */}
            <motion.button
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              onClick={openChat}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Bot className="h-5 w-5" />
              <span className="text-sm font-medium whitespace-nowrap">Waks Bot</span>
            </motion.button>

            {/* WhatsApp */}
            <motion.a
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ delay: 0.15 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-sm font-medium">WhatsApp</span>
            </motion.a>

            {/* Email */}
            <motion.a
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm font-medium">Email</span>
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[100] w-[calc(100vw-2rem)] sm:w-[380px] h-[70vh] sm:h-[500px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary-foreground/20 p-2 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Waks Bot</h3>
                  <p className="text-xs opacity-80">Online • Usually replies instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearHistory}
                  className="p-1.5 hover:bg-primary-foreground/20 rounded-full transition-colors"
                  title="Clear chat history"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-1.5 hover:bg-primary-foreground/20 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 overscroll-contain" style={{ minHeight: 0 }}>
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
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-muted text-muted-foreground p-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                      <motion.span
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Dynamic Quick Replies */}
              {!isLoading && messages.length > 0 && (() => {
                const lastBotMessage = [...messages].reverse().find(m => m.isBot);
                const replies = lastBotMessage?.quickReplies || [];
                if (replies.length === 0) return null;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {replies.map((reply, index) => {
                      const linkUrl = LINK_QUICK_REPLIES[reply];
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            if (linkUrl) {
                              navigate(linkUrl);
                              setIsChatOpen(false);
                            } else {
                              handleSend(reply);
                            }
                          }}
                          className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors flex items-center gap-1"
                        >
                          {reply}
                          {linkUrl && <span className="text-primary/60">↗</span>}
                        </button>
                      );
                    })}
                  </motion.div>
                );
              })()}
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

export default FloatingActions;
