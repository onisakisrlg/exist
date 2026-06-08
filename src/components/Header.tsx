import React, { useState } from 'react';
import { MessageCircle, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://i.postimg.cc/nrHX7SCS/he-tong-hui-she.jpg" 
              alt="exist合同会社 Logo" 
              className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none mb-1">exist合同会社</span>
              <span className="text-[10px] sm:text-xs text-gray-600 font-medium tracking-wider">リフォーム・リノベーション・原状回復</span>
            </div>
          </a>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <a href="#home" className="font-bold text-blue-600">ホーム</a>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <a href="#services" className="font-bold text-gray-700 hover:text-blue-600 transition-colors">対応工事</a>
            <a href="#cases" className="font-bold text-gray-700 hover:text-blue-600 transition-colors">施工事例</a>
            <a href="#company" className="font-bold text-gray-700 hover:text-blue-600 transition-colors">会社概要</a>
          </nav>

          {/* Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://line.me/ti/p/_JpQPp8o-h" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0056D2] hover:bg-[#0043A8] text-white px-5 py-2.5 rounded shadow-sm transition-colors text-sm font-bold tracking-wider">
              <MessageCircle size={18} />
              LINEで相談する
            </a>
            <a href="mailto:exist.2022.k@gmail.com" className="flex items-center gap-2 bg-white hover:bg-blue-50 text-[#0056D2] border border-[#0056D2] px-5 py-2.5 rounded shadow-sm transition-colors text-sm font-bold tracking-wider">
              <Mail size={18} />
              お問い合わせ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] border-b border-gray-100 shadow-xl' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white flex flex-col border-t border-gray-50">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-blue-600 bg-blue-50 rounded-md">ホーム</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md transition-colors">対応工事</a>
          <a href="#cases" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md transition-colors">施工事例</a>
          <a href="#company" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md transition-colors">会社概要</a>
          
          <div className="pt-4 flex flex-col gap-3 px-3">
            <a href="https://line.me/ti/p/_JpQPp8o-h" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-[#0056D2] hover:bg-[#0043A8] text-white px-5 py-3.5 rounded shadow-sm transition-colors text-base font-bold tracking-wider w-full">
              <MessageCircle size={20} />
              LINEで相談する
            </a>
            <a href="mailto:exist.2022.k@gmail.com" className="flex justify-center items-center gap-2 bg-white hover:bg-blue-50 text-[#0056D2] border-2 border-[#0056D2] px-5 py-3.5 rounded shadow-sm transition-colors text-base font-bold tracking-wider w-full">
              <Mail size={20} />
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
