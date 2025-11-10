import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import web3Hero from "@/assets/blog-web3-blockchain-hero.jpg";

const Web3BlockchainTrends = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <header className="mb-8">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      January 10, 2025
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      14 min read
                    </span>
                    <span className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Waks Digital Team
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Web3 and Blockchain: Trends Shaping the Decentralized Web
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Understanding the evolution of blockchain technology and its impact on web development in Africa
                  </p>
                </header>

                <img
                  src={web3Hero}
                  alt="Web3 and Blockchain Technology"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />

                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl mb-6">
                    Web3 represents the next evolution of the internet—a decentralized, blockchain-based ecosystem 
                    that promises to return data ownership and control to users. As Africa embraces digital 
                    transformation, understanding Web3 becomes increasingly crucial.
                  </p>

                  <h2>What is Web3?</h2>
                  <p>
                    Web3, or Web 3.0, is the third generation of internet services that utilizes blockchain 
                    technology to create decentralized applications (dApps). Unlike Web2, where tech giants 
                    control user data, Web3 enables peer-to-peer interactions without intermediaries.
                  </p>

                  <h2>Key Components of Web3</h2>
                  
                  <h3>1. Blockchain Technology</h3>
                  <p>
                    The foundational layer providing transparent, immutable, and distributed record-keeping. 
                    Ethereum, Solana, and Polygon are leading platforms for building Web3 applications.
                  </p>

                  <h3>2. Cryptocurrency and Tokens</h3>
                  <p>
                    Digital currencies and tokens facilitate transactions, governance, and value exchange within 
                    Web3 ecosystems. Kenya's progressive stance on crypto regulation positions it well for Web3 adoption.
                  </p>

                  <h3>3. Smart Contracts</h3>
                  <p>
                    Self-executing contracts with terms directly written into code. They enable trustless 
                    transactions and automated agreements without intermediaries.
                  </p>

                  <h3>4. Decentralized Autonomous Organizations (DAOs)</h3>
                  <p>
                    Community-governed organizations operating through smart contracts, offering new models 
                    for collective decision-making and resource management.
                  </p>

                  <h2>Web3 Trends in 2025</h2>
                  
                  <h3>NFTs Beyond Art</h3>
                  <p>
                    Non-fungible tokens are expanding beyond digital art into:
                  </p>
                  <ul>
                    <li>Digital identity and credentials</li>
                    <li>Real estate tokenization</li>
                    <li>Event ticketing and access control</li>
                    <li>Supply chain authentication</li>
                    <li>Gaming assets and metaverse items</li>
                  </ul>

                  <h3>DeFi (Decentralized Finance)</h3>
                  <p>
                    Financial services built on blockchain are democratizing access to banking, lending, and 
                    investment opportunities—particularly valuable in regions with limited traditional banking infrastructure.
                  </p>

                  <h3>Interoperability Solutions</h3>
                  <p>
                    Cross-chain bridges and layer-2 solutions are making it easier for different blockchain 
                    networks to communicate, improving user experience and reducing transaction costs.
                  </p>

                  <h2>Web3 Opportunities in Kenya</h2>
                  
                  <h3>Financial Inclusion</h3>
                  <p>
                    With M-Pesa already demonstrating Kenyans' readiness for digital finance, Web3 can extend 
                    financial services to the unbanked, offering savings, loans, and investment opportunities.
                  </p>

                  <h3>Digital Identity</h3>
                  <p>
                    Blockchain-based identity systems can provide secure, verifiable credentials for education, 
                    employment, and government services.
                  </p>

                  <h3>Supply Chain Transparency</h3>
                  <p>
                    For Kenya's agricultural and manufacturing sectors, blockchain can verify product authenticity, 
                    track shipments, and ensure fair trade practices.
                  </p>

                  <h2>Challenges and Considerations</h2>
                  <ul>
                    <li><strong>Energy Consumption:</strong> Environmental concerns about blockchain's energy use</li>
                    <li><strong>Regulatory Uncertainty:</strong> Evolving legal frameworks for crypto and Web3</li>
                    <li><strong>User Experience:</strong> Complexity barriers for mainstream adoption</li>
                    <li><strong>Scalability:</strong> Transaction speed and cost challenges</li>
                    <li><strong>Security:</strong> Smart contract vulnerabilities and scams</li>
                  </ul>

                  <h2>Building for Web3</h2>
                  <p>
                    Developers entering the Web3 space should familiarize themselves with:
                  </p>
                  <ul>
                    <li>Solidity and smart contract development</li>
                    <li>Web3.js and ethers.js libraries</li>
                    <li>IPFS for decentralized storage</li>
                    <li>Wallet integration (MetaMask, WalletConnect)</li>
                    <li>Testing frameworks like Hardhat and Truffle</li>
                  </ul>

                  <h2>The Road Ahead</h2>
                  <p>
                    While Web3 is still maturing, its potential to create more equitable, transparent, and 
                    user-centric internet experiences is undeniable. For African entrepreneurs and developers, 
                    Web3 offers opportunities to leapfrog traditional infrastructure and build innovative solutions.
                  </p>

                  <div className="bg-muted p-6 rounded-lg my-8">
                    <h3 className="mt-0">Interested in Web3 Development?</h3>
                    <p className="mb-4">
                      Our team at Waks Digital Solutions can help you explore blockchain integration and 
                      Web3 opportunities for your business.
                    </p>
                    <Link to="/contact">
                      <Button>Discuss Your Web3 Project</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <BlogSidebar currentCategory="Industry News" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Web3BlockchainTrends;