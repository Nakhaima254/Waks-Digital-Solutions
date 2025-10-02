import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "@/assets/Waks Tech-04.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={Logo}
                      alt="Waks Digital Partner Logo"
                      className="h-20 w-auto"
                      style={{ maxWidth: 350 }}
                    />
                  </div>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Your Digital Growth Partner. We build websites that grow your business and help Kenyan SMEs thrive in the digital space.
                  </p>
                  {/* ...social icons... */}
                </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your Digital Growth Partner. We build websites that grow your business and help Kenyan SMEs thrive in the digital space.
            </p>
            {/* <div className="flex space-x-4 pt-2">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/web-development"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Custom Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/wordpress-design"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  WordPress Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ecommerce-solutions"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/seo-services"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@waksdigital.co.ke" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  info@waksdigital.co.ke
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="tel:+254718098165" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  +254 718 098 165
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Waks Digital Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;