import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Wallet } from "lucide-react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

        {/* Crypto FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Crypto Payment FAQs
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-bep20">
              <AccordionTrigger>What is BEP20 (BSC Smart Chain)?</AccordionTrigger>
              <AccordionContent>
                BEP20 is a token standard on the Binance Smart Chain (BSC). It allows fast, low-cost transactions compared to other networks. When sending payments, make sure you select the <strong>BEP20 / BSC network</strong> in your wallet or exchange — sending tokens on the wrong network may result in permanent loss of funds.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="supported-tokens">
              <AccordionTrigger>Which tokens do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept 10 major cryptocurrencies via the BEP20 network: <strong>BTC, ETH, SOL, AVAX, ADA, DOGE, BNB, XRP, MATIC,</strong> and <strong>USDT</strong>. These are the BEP20-wrapped versions of each token. If you're unsure whether your token is BEP20-compatible, check with your exchange or wallet provider.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-to-pay">
              <AccordionTrigger>How do I make a crypto payment?</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Choose a service and note the total amount in USD/KES.</li>
                  <li>Copy our BEP20 wallet address above.</li>
                  <li>Open your crypto wallet or exchange (e.g., Binance, Trust Wallet, MetaMask).</li>
                  <li>Send the equivalent amount in your chosen token via the <strong>BEP20 (BSC)</strong> network.</li>
                  <li>Save your <strong>transaction hash (TxID)</strong> and share it with us via our <a href="/contact" className="text-primary underline">Contact page</a> or email for confirmation.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="confirmation-time">
              <AccordionTrigger>How long does payment confirmation take?</AccordionTrigger>
              <AccordionContent>
                BSC transactions typically confirm within <strong>15–30 seconds</strong>. Once you share your transaction hash with us, we'll verify the payment and confirm within <strong>1–2 business hours</strong> during working hours (Mon–Fri, 8 AM – 6 PM EAT).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="exchange-rate">
              <AccordionTrigger>How is the exchange rate calculated?</AccordionTrigger>
              <AccordionContent>
                We use the market rate at the time of payment as shown on <strong>CoinGecko</strong> or <strong>CoinMarketCap</strong>. Please send the exact equivalent or slightly more to account for minor price fluctuations during the transaction.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="wrong-network">
              <AccordionTrigger>What if I send tokens on the wrong network?</AccordionTrigger>
              <AccordionContent>
                Unfortunately, tokens sent on an incompatible network (e.g., ERC20 instead of BEP20) <strong>cannot be recovered</strong>. Always double-check that you've selected the <strong>BEP20 / BSC Smart Chain</strong> network before confirming the transaction.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="refunds">
              <AccordionTrigger>Can I get a refund for crypto payments?</AccordionTrigger>
              <AccordionContent>
                Refunds for crypto payments are processed in the same cryptocurrency and to the same wallet address. Please contact us within <strong>7 days</strong> of payment with your transaction hash. Refund amounts are based on the USD value at the time of the original payment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CryptoPaymentSection;
