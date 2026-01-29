
import { Github, Linkedin, Mail } from 'lucide-react';

// Custom X (Twitter) Icon Component
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const footerLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: XIcon, href: '#', label: 'X (Twitter)' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer id="contact" className="bg-[var(--cyan-turquoise)] text-white">
      {/* Content */}
      <div className="px-5 md:px-[120px] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto">
          {/* Desktop Layout: 3 Columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: CTA */}
            <div>
              <h3 className="font-['Montserrat'] font-bold text-3xl mb-4">
                Let's Create
                <br />
                Something Amazing
              </h3>
              <p className="text-white/80 text-base">
                Interested in transforming your data into stunning visual stories?
              </p>
            </div>

            {/* Column 2: Links */}
            <div>
              <h4 className="font-['Montserrat'] font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Socials */}
            <div>
              <h4 className="font-['Montserrat'] font-semibold text-lg mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout: Stacked */}
          <div className="md:hidden space-y-8 mb-8">
            {/* CTA */}
            <div className="text-center">
              <h3 className="font-['Montserrat'] font-bold text-2xl mb-3">
                Let's Create
                <br />
                Something Amazing
              </h3>
              <p className="text-white/80 text-base">
                Interested in transforming your data into stunning visual stories?
              </p>
            </div>

            {/* Socials */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center active:bg-white/20 transition-colors min-h-[44px] min-w-[44px]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-['Montserrat'] font-bold text-xl">SYNAPSE</p>
              <p className="text-white/70 text-sm text-center md:text-left">
                © 2026. Designed for all screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}