import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="company" className="bg-[#f5f8fc] border-t border-gray-100 pt-16 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="w-full lg:w-5/12">
            <div className="flex items-center mb-6">
              <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img 
                  src="https://i.postimg.cc/nrHX7SCS/he-tong-hui-she.jpg" 
                  alt="exist合同会社 Logo" 
                  className="h-12 md:h-14 w-auto object-contain mix-blend-multiply" 
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 leading-none mb-1 text-[#0056D2]">exist合同会社</span>
                  <span className="text-xs text-gray-600 font-medium tracking-wider">リフォーム・原状回復・内装工事</span>
                </div>
              </a>
            </div>
            
            <table className="w-full max-w-sm text-sm text-gray-700">
              <tbody>
                <tr className="border-b border-gray-200/60">
                  <td className="py-3 font-bold w-24 align-top">会社名</td>
                  <td className="py-3 font-medium">exist合同会社</td>
                </tr>
                <tr className="border-b border-gray-200/60">
                  <td className="py-3 font-bold w-24 align-top">代表者</td>
                  <td className="py-3 font-medium">長谷川 恭一</td>
                </tr>
                <tr className="border-b border-gray-200/60">
                  <td className="py-3 font-bold w-24 align-top">所在地</td>
                  <td className="py-3 font-medium">
                    〒210-0846<br />
                    神奈川県川崎市川崎区小田2-18-5<br />
                    メゾン第19むさし1F
                  </td>
                </tr>
                <tr className="border-b border-gray-200/60">
                  <td className="py-3 font-bold w-24 align-top">Mobile</td>
                  <td className="py-3 font-medium">090-1730-0926</td>
                </tr>
                <tr className="border-b border-gray-200/60">
                  <td className="py-3 font-bold w-24 align-top">E-mail</td>
                  <td className="py-3 font-medium">exist.2022.k@gmail.com</td>
                </tr>
                <tr className="border-b border-gray-200/60">
                  <td className="py-3 font-bold w-24 align-top">設立</td>
                  <td className="py-3 font-medium">2024.5.1</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold w-24 align-top">資本金</td>
                  <td className="py-3 font-medium">500万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Decorative Illustration Space */}
          <div className="hidden lg:flex w-2/12 items-end justify-center pb-8">
             <div className="w-40 h-40 opacity-40">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#0056D2] fill-transparent" strokeWidth="2">
                   <path d="M40 160 L40 60 L100 20 L160 60 L160 160 Z" />
                   <rect x="80" y="100" width="40" height="60" />
                   <circle cx="100" cy="50" r="10" />
                   <path d="M10 160 L190 160" />
                </svg>
             </div>
          </div>
          
          {/* CTA Box */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#0056D2] mb-3 text-center lg:text-left">ご相談・お見積りは無料です</h3>
            <p className="text-gray-700 font-medium mb-8 text-center lg:text-left leading-relaxed">
              LINEまたはお問い合わせフォームより<br />
              お気軽にご連絡ください。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://line.me/ti/p/_JpQPp8o-h" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#0056D2] hover:bg-[#0043A8] text-white py-4 rounded shadow-sm transition-all text-base font-bold">
                <MessageCircle size={20} />
                LINEで相談する
              </a>
              <a href="mailto:exist.2022.k@gmail.com" className="flex-1 flex items-center justify-center gap-2 bg-[#f8fafd] hover:bg-[#e1e9f6] text-[#0056D2] border-2 border-[#0056D2] py-4 rounded shadow-sm transition-all text-base font-bold">
                <Mail size={20} />
                お問い合わせフォーム
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#0056D2] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-blue-200 transition-colors">ホーム</a>
            <a href="#services" className="hover:text-blue-200 transition-colors">対応工事</a>
            <a href="#cases" className="hover:text-blue-200 transition-colors">施工事例</a>
            <a href="#company" className="hover:text-blue-200 transition-colors">会社概要</a>
            <a href="#" className="hover:text-blue-200 transition-colors">プライバシーポリシー</a>
          </div>
          <div className="text-blue-100 text-xs">
             &copy; exist LLC All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
