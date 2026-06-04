import React from 'react';
import { Home, Building2, Building, Droplets, BookOpen, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-12 h-12 text-[#0056D2]" strokeWidth={1} />,
    title: 'リフォーム',
    description: '壁紙・床の張替えや設備交換など、住まいを快適にする工事を行います。'
  },
  {
    icon: <Building2 className="w-12 h-12 text-[#0056D2]" strokeWidth={1} />,
    title: 'リノベーション',
    description: '間取り変更や洋間変更など住まいの価値を高めます。'
  },
  {
    icon: <Building className="w-12 h-12 text-[#0056D2]" strokeWidth={1} />,
    title: '原状回復工事',
    description: '退去後の現状回復や修繕工事を行い、賃貸物件の原状回復に対応します。'
  },
  {
    icon: <Droplets className="w-12 h-12 text-[#0056D2]" strokeWidth={1} />,
    title: '水回り工事',
    description: 'キッチン・浴室・トイレ・洗面台などの交換や改修に対応します。'
  },
  {
    icon: <BookOpen className="w-12 h-12 text-[#0056D2]" strokeWidth={1} />,
    title: 'シート施工',
    description: 'ダイノックシートなどを使用したドア枠などのリメイクに対応します。'
  },
  {
    icon: <Wrench className="w-12 h-12 text-[#0056D2]" strokeWidth={1} />,
    title: '修繕工事',
    description: 'ちょっとした補修や劣化箇所の修繕などお任せください。'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 inline-block relative">
            対応工事
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#0056D2] rounded-full"></div>
          </h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#FAFAFA] border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-6 bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
