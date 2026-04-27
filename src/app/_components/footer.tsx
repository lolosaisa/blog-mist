export const Footer = () => {
  const productLinks = [
    { name: "MIST Chamber", href: "https://mist.cash/try-hidemi" },
    { name: "GitHub", href: "https://github.com/mistcash" },

   
  ];

  const communityLinks = [

    { name: "Twitter", href: "https://x.com/_mistcash" },
    { name: "Telegram", href: "https://t.me/+IopcODWeG7wxZDhl" },
  ];

  const companyLinks = [
    { name: "MIST Chamber", href: "https://mist.cash/try-hidemi" },

    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-display font-bold text-primary-foreground">
                M
              </div> */}
              <span className="font-display font-bold text-xl">Mist.cash</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Private, compliant token transfers for the future of Web3 finance.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 FOCBB. Building the private Web3.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  