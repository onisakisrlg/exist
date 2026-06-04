import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: '【リフォーム】',
    beforeImage: 'https://i.postimg.cc/kG8nhxzf/1000011501.jpg',
    afterImage: 'https://i.postimg.cc/rF1V1NS5/1000011502.jpg'
  },
  {
    id: 2,
    title: '【リノベーション】',
    beforeImage: 'https://i.postimg.cc/BvcHRF9j/1000011497.jpg',
    afterImage: 'https://i.postimg.cc/xTwmC59K/1000011562.png'
  },
  {
    id: 3,
    title: '【間仕切り工事】',
    beforeImage: 'https://i.postimg.cc/xd4Jw3pJ/1000011504.jpg',
    afterImage: 'https://i.postimg.cc/6qd8GJWd/1000011503.jpg'
  },
  {
    id: 4,
    title: '【ドアシート貼り】',
    beforeImage: 'https://i.postimg.cc/N09fHqDW/1000011500.jpg',
    afterImage: 'https://i.postimg.cc/8PN5nYkJ/1000011499.jpg'
  }
];

function ImageComparisonCard({ item }: { item: typeof cases[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }
    
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseLeave = () => {
    // Return to default center position when mouse leaves the image
    setSliderPosition(50);
  };

  return (
    <div className="flex flex-col gap-4 group">
      <div 
        ref={containerRef}
        className="relative h-[220px] w-full rounded-2xl overflow-hidden shadow border border-gray-100 bg-gray-50 select-none cursor-ew-resize"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background After Image */}
        <div className="absolute inset-0">
           <span className="absolute top-2 right-2 z-10 bg-[#0056D2]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm shadow-sm">After</span>
           <img src={item.afterImage} alt={`${item.title} after`} className="w-full h-full object-cover" />
        </div>

        {/* Foreground Before Image (Clipped) */}
        <div 
          className="absolute inset-0 z-0 bg-gray-200"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <span className="absolute top-2 left-2 z-10 bg-gray-600/80 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm shadow-sm">Before</span>
          <img src={item.beforeImage} alt={`${item.title} before`} className="w-full h-full object-cover grayscale-[15%]" />
          
          {/* Divider Line Attached to the clipped edge */}
          <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]"></div>
        </div>

        {/* Handle Graphic */}
        <div 
          className="absolute top-1/2 pointer-events-none z-10 transition-transform duration-100"
          style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
            <ChevronLeft size={16} className="text-[#0056D2] absolute left-0.5" />
            <ChevronRight size={16} className="text-[#0056D2] absolute right-0.5" />
          </div>
        </div>
      </div>
      
      <h3 className="text-center font-bold text-gray-900 group-hover:text-[#0056D2] transition-colors cursor-pointer">{item.title}</h3>
    </div>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & View All */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-center md:text-left flex-1 flex justify-center md:justify-start">
            <h2 className="text-3xl font-bold text-gray-900 inline-block relative pr-6">
              施工事例
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-1 bg-[#0056D2] rounded-full"></div>
            </h2>
          </div>
          
          <a href="#" className="flex items-center text-[#0056D2] hover:text-[#0043A8] font-bold text-sm group">
            すべての施工事例を見る 
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item) => (
            <ImageComparisonCard key={item.id} item={item} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

