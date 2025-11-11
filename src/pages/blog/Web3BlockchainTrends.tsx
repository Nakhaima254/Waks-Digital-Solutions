import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import web3Hero from "@/assets/blog-web3-blockchain-hero.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const Web3BlockchainTrends = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" /><span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Waks Digital Team</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>January 10, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Web3 and Blockchain: Trends Shaping the Decentralized Web</h1>
            <p className="text-xl text-primary-foreground/80">Understanding the evolution of blockchain technology and its impact on web development in Africa.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={web3Hero} alt="Web3 and Blockchain Technology" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                Web3 represents the next evolution of the internet—a decentralized, blockchain-based ecosystem that promises to return data ownership and control to users. As Africa embraces digital transformation, understanding Web3 becomes increasingly crucial.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">What is Web3?</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Web3, or Web 3.0, is the third generation of internet services that utilizes blockchain technology to create decentralized applications (dApps). Unlike Web2, where tech giants control user data, Web3 enables peer-to-peer interactions without intermediaries.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Key Components of Web3</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Blockchain Technology</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The foundational layer providing transparent, immutable, and distributed record-keeping. Ethereum, Solana, and Polygon are leading platforms for building Web3 applications.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Cryptocurrency and Tokens</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Digital currencies and tokens facilitate transactions, governance, and value exchange within decentralized networks.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Smart Contracts</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Self-executing code that runs on blockchain networks, enabling trustless transactions and automated agreements.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Decentralized Storage</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Distributed storage solutions like IPFS provide alternatives to centralized cloud storage.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Blockchain Applications in Africa</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Digital Identity:</strong> Secure, self-sovereign identity solutions for unbanked populations</li>
                <li><strong>Supply Chain:</strong> Transparency in agricultural and manufacturing supply chains</li>
                <li><strong>Remittances:</strong> Faster, cheaper cross-border payments</li>
                <li><strong>Land Registry:</strong> Immutable property ownership records</li>
                <li><strong>Healthcare:</strong> Secure medical records management</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Web3 Development Tools</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Ethereum & Solidity:</strong> Most popular smart contract platform</li>
                <li><strong>Hardhat & Truffle:</strong> Development frameworks</li>
                <li><strong>MetaMask:</strong> Wallet integration for dApps</li>
                <li><strong>The Graph:</strong> Indexing protocol for blockchain data</li>
                <li><strong>WalletConnect:</strong> Open protocol for connecting wallets</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Challenges and Considerations</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Despite its promise, Web3 faces challenges including scalability issues, high transaction costs, complex user experiences, regulatory uncertainty, and environmental concerns around energy consumption.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Future Outlook</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                As blockchain technology matures, we expect to see more practical applications, improved scalability, better user experiences, and clearer regulatory frameworks emerging globally and in Africa.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Ready to Explore Web3?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions can help you understand and implement blockchain technologies for your business.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Let's Discuss Your Project
                </Link>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Industry News" />
        </div>
      </div>
    </div>
  );
};

export default Web3BlockchainTrends;