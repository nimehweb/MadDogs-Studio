import Link from 'next/link';
import { Instagram, Mail, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">CONTACT</h3>
            <a
              href="mailto:hello@yourbrand.com"
              className="text-sm hover:opacity-60 transition-opacity"
            >
              HELLO@YOURBRAND.COM
            </a>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">FOLLOW</h3>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-60 transition-opacity"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
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
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:opacity-60 transition-opacity"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hover:opacity-60 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M8 12a4 4 0 1 0 8 0" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 pt-12 border-t border-black">
          <p className="text-xs uppercase tracking-widest text-gray-700">
            © 2024 YOUR BRAND NAME. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
