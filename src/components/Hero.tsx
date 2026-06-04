import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#f8fafd] to-[#e6eff9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-12 lg:py-20 lg:min-h-[500px]">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 z-10 lg:pr-10 relative mt-10 lg:mt-0">
            {/* Subtle Blue left stroke decoration */}
            <div className="absolute left-[-20px] top-2 h-full w-[4px] bg-[#0056D2] rounded-full hidden lg:block"></div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug tracking-tight mb-4">
              住まいを、もっと<span className="text-[#0056D2] font-black">快適</span>に。<br />
              <span className="text-[#0056D2] font-black tracking-wide">暮らし</span>に寄り添うリフォーム。
            </h1>
            
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed mb-8 mt-6">
              小さな工事からリノベーションまで<br />
              丁寧・迅速・安心価格をご提案いたします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://line.me/ti/p/_JpQPp8o-h" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#0056D2] hover:bg-[#0043A8] text-white px-8 py-3.5 rounded shadow-md transition-all text-base font-bold w-full sm:w-auto">
                <MessageCircle size={20} />
                LINEで相談する
              </a>
              <a href="mailto:exist.2022.k@gmail.com" className="flex items-center justify-center gap-2 bg-[#f0f4fc] hover:bg-[#e1e9f6] text-[#0056D2] border border-[#0056D2] px-8 py-3.5 rounded shadow-sm transition-all text-base font-bold w-full sm:w-auto">
                <Mail size={20} />
                お問い合わせはこちら
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 lg:absolute top-0 right-0 h-64 sm:h-96 lg:h-full mt-10 lg:mt-0">
            <div className="h-full w-full mask-image-gradient-left">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern comfortable home interior" 
                className="w-full h-full object-cover rounded-tl-[100px] lg:rounded-none shadow-2xl lg:shadow-none"
              />
            </div>
            {/* Fade overlay mapping target image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e6eff9] via-transparent to-transparent hidden lg:block"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
