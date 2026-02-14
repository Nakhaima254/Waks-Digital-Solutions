import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Wallet } from "lucide-react";
import { toast } from "sonner";

const coins = [
  { name: "BTC", full: "Bitcoin" },
  { name: "ETH", full: "Ethereum" },
  { name: "SOL", full: "Solana" },
  { name: "AVAX", full: "Avalanche" },
  { name: "ADA", full: "Cardano" },
  { name: "DOGE", full: "Dogecoin" },
  { name: "BNB", full: "BNB" },
  { name: "XRP", full: "Ripple" },
  { name: "MATIC", full: "Polygon" },
  { name: "USDT", full: "Tether" },
];

const WALLET_ADDRESS = "0x1ae2349ac387403fa068f34f9fdff71f580f0ee7";

const CryptoPaymentSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-500/10 text-amber-600 border-amber-500/20">
            <Wallet className="w-3 h-3 mr-1" />
            Crypto Payments
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Accept Cryptocurrency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pay for any of our services using cryptocurrency via BEP20 (BSC Smart Chain). We accept the following coins:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10">
          {coins.map((coin) => (
            <div key={coin.name} className="text-center p-4 rounded-xl bg-muted/50 border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300">
              <p className="font-bold text-foreground text-lg">{coin.name}</p>
              <p className="text-xs text-muted-foreground">{coin.full}</p>
            </div>
          ))}
        </div>

        <Card className="p-6 border-2 border-amber-500/30 bg-amber-500/5">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-foreground mb-1">BEP20 (BSC Smart Chain) Wallet Address</p>
            <p className="text-xs text-muted-foreground">Send only BEP20-compatible tokens to this address</p>
          </div>
          <div className="flex items-center gap-3 bg-background rounded-lg p-4 border border-border">
            <code className="flex-1 text-sm font-mono text-foreground break-all select-all">
              {WALLET_ADDRESS}
            </code>
            <Button
              variant="outline"
              size="sm"
              className="shrink-0"
              onClick={() => {
                navigator.clipboard.writeText(WALLET_ADDRESS);
                toast.success("Wallet address copied to clipboard!");
              }}
            >
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            After sending payment, please contact us with your transaction hash for confirmation.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default CryptoPaymentSection;
