import React from 'react';
import { Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-glassBorder">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={`${import.meta.env.BASE_URL}assets/ifix-india-logo.png`} alt="iFix India" className="h-10 object-contain" />
            </div>
            <p className="text-secondary mb-6 max-w-sm">
              Premium Apple service center in Bangalore. Expert repairs for iPhone, iPad, MacBook, iMac, and iWatch.
            </p>
            <p className="text-white font-medium">
              Call us: <a href="tel:+917676400900" className="hover:text-[#ED1C24] transition-colors">+91 7676 400 900</a>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">iPhone Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MacBook Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">iPad Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">iWatch Repair</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-secondary">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-glassBorder flex flex-col md:flex-row justify-between items-center gap-4 text-secondary text-sm">
          <p>© 2026 iFix India. All Rights Reserved.</p>
          <p className="text-center md:text-right max-w-2xl text-xs">
            iFix India is a premium service provider for all Apple products. All product names, logos, and images are the property of Apple Inc. We are not, however, associated with or certified by Apple Inc. in any manner.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
