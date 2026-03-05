import Link from 'next/link';
import { Instagram, Mail, Youtube } from 'lucide-react';
import { FaWhatsapp, FaXTwitter, FaPinterest } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="bg-white border-t border-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">CONTACT</h3>
            <a
              href="mailto:maddogstudio27@gmail.com"
              className="text-sm hover:opacity-60 transition-opacity"
            >
              maddogstudio27@gmail.com
            </a>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">FOLLOW</h3>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/mad_dogstudios?igsh=MXd3eXg0c3JqMWJweQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-60 transition-opacity"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@maddogstudios?_r=1&_t=ZS-94QiLY5qC0r"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:opacity-60 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-3.47V7.5a8.13 8.13 0 0 0 5.73 2.16v-3.4a4.85 4.85 0 0 1-.59-.05z" />
                </svg>
              </a>
              <a
                href="https://x.com/mad_dogstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:opacity-60 transition-opacity"
              >
               <FaXTwitter size={20} />
              </a>
              <a
                href="https://wa.me/08164297768"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:opacity-60 transition-opacity"
              >
               <FaWhatsapp size={20} />
              </a>
              <a
                href="https://pin.it/6zGk5EMDM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hover:opacity-60 transition-opacity"
              >
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 pt-12 border-t border-black">
          <p className="text-xs uppercase tracking-widest text-gray-700">
            © 2024 MAD DOGS STUDIO . ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
