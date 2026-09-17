import React from 'react';

interface FooterProps {
  onOpenEpaper: () => void;
  onOpenSubscribe: () => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEpaper,
  onOpenSubscribe,
  onSelectCategory
}) => {
  return (
    <footer
      className="bg-[#0b1726] text-gray-300 text-xs mt-12 pt-10 pb-12 border-t border-gray-800"
      data-purpose="page-footer"
      id="main-page-footer"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top Branding & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-gray-800 gap-4">
          <div>
            <span className="font-masthead text-2xl text-white tracking-normal font-bold">
              THE STRAITS TIMES
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-400">
            <button
              onClick={onOpenEpaper}
              className="hover:text-white cursor-pointer transition-colors"
            >
              E-paper
            </button>
            <button
              onClick={onOpenSubscribe}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Newsletters
            </button>
            <button
              onClick={() => onSelectCategory('Podcasts')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Podcasts
            </button>
            <a href="#rss" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              RSS Feeds
            </a>
            <a href="#about" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              About Us
            </a>
            <a href="#contact" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* SPH Media Network Publications */}
        <div className="py-6 border-b border-gray-800">
          <h5 className="text-[11px] font-bold uppercase text-gray-400 mb-2.5 tracking-wider">
            SPH Media Network Publications
          </h5>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-gray-400 text-[11px]">
            <span className="text-white font-medium">The Straits Times</span>
            <a className="hover:text-gray-200 transition-colors" href="#bt" onClick={(e) => e.preventDefault()}>
              The Business Times
            </a>
            <a className="hover:text-gray-200 transition-colors" href="#zb" onClick={(e) => e.preventDefault()}>
              Lianhe Zaobao
            </a>
            <a className="hover:text-gray-200 transition-colors" href="#bh" onClick={(e) => e.preventDefault()}>
              Berita Harian
            </a>
            <a className="hover:text-gray-200 transition-colors" href="#tm" onClick={(e) => e.preventDefault()}>
              Tamil Murasu
            </a>
            <a className="hover:text-gray-200 transition-colors" href="#hwz" onClick={(e) => e.preventDefault()}>
              HardwareZone
            </a>
            <a className="hover:text-gray-200 transition-colors" href="#tabla" onClick={(e) => e.preventDefault()}>
              tabla!
            </a>
            <a className="hover:text-gray-200 transition-colors" href="#zbsg" onClick={(e) => e.preventDefault()}>
              Zaobao SG
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[11px]">
          <p>
            Copyright © 2025 SPH Media Limited. Co. Reg. No. 202120748H. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">Singapore Press Holdings Media publication</p>
        </div>
      </div>
    </footer>
  );
};
