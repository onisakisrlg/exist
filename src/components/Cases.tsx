import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

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
  },
  {
    id: 5,
    title: '【浴室ドア修理】',
    beforeImage: 'https://i.postimg.cc/SxFdx07M/image.png',
    afterImage: 'https://i.postimg.cc/j5KBwwH2/image.png'
  },
  {
    id: 6,
    title: '【洗濯パン設置】',
    beforeImage: 'https://i.postimg.cc/qRQTLXQC/image.png',
    afterImage: 'https://i.postimg.cc/TYK6VbDH/image.png'
  },
  {
    id: 7,
    title: '【室内ドアシート貼り】',
    beforeImage: 'https://i.postimg.cc/xCpZ8stq/image.png',
    afterImage: 'https://i.postimg.cc/GtB5yk56/image.png'
  },
  {
    id: 8,
    title: '【網戸貼り替え】',
    beforeImage: 'https://i.postimg.cc/dQdXw9G8/image.png',
    afterImage: 'https://i.postimg.cc/dtjxTtHt/image.png'
  },
  {
    id: 9,
    title: '【浴室シート貼り】',
    beforeImage: 'https://i.postimg.cc/FzZV119g/image.png',
    afterImage: 'https://i.postimg.cc/kXJyzNcH/image.png'
  },
  {
    id: 10,
    title: '【洗面台水栓交換】',
    beforeImage: 'https://i.postimg.cc/V6FCWT3Q/image.png',
    afterImage: 'https://i.postimg.cc/YCJYrQ6r/image.png'
  },
  {
    id: 11,
    title: '【キッチンパネル施工】',
    beforeImage: 'https://i.postimg.cc/nzdLztyq/image.png',
    afterImage: 'https://i.postimg.cc/pV6TMRQ4/image.png'
  },
  {
    id: 12,
    title: '【CF上貼り】',
    beforeImage: 'https://i.postimg.cc/0QrTY6WY/image.png',
    afterImage: 'https://i.postimg.cc/3r0MWvDJ/image.png'
  },
  {
    id: 13,
    title: '【下駄箱シート貼り】',
    beforeImage: 'https://i.postimg.cc/kX7yLrCL/image.png',
    afterImage: 'https://i.postimg.cc/dtWGXL4m/image.png'
  }
];

function ImageComparisonView({ item, isModal = false }: { item: typeof cases[0], isModal?: boolean }) {
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
    if (!isModal) {
      setSliderPosition(50);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none cursor-ew-resize ${isModal ? 'h-[60vh] md:h-[80vh] rounded-none md:rounded-xl' : 'h-[220px] rounded-2xl shadow border border-gray-100 bg-gray-50'}`}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background After Image */}
      <div className="absolute inset-0 bg-gray-100">
         <span className={`absolute z-10 bg-[#0056D2]/90 text-white font-bold rounded uppercase tracking-wider backdrop-blur-sm shadow-sm ${isModal ? 'top-4 right-4 text-xs px-3 py-1' : 'top-2 right-2 text-[10px] px-2 py-0.5'}`}>After</span>
         <img src={item.afterImage} alt={`${item.title} after`} className={`w-full h-full ${isModal ? 'object-contain' : 'object-cover'}`} />
      </div>

      {/* Foreground Before Image (Clipped) */}
      <div 
        className="absolute inset-0 z-0 bg-gray-200"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <span className={`absolute z-10 bg-gray-600/80 text-white font-bold rounded uppercase tracking-wider backdrop-blur-sm shadow-sm ${isModal ? 'top-4 left-4 text-xs px-3 py-1' : 'top-2 left-2 text-[10px] px-2 py-0.5'}`}>Before</span>
        <img src={item.beforeImage} alt={`${item.title} before`} className={`w-full h-full grayscale-[15%] ${isModal ? 'object-contain' : 'object-cover'}`} />
        
        {/* Divider Line Attached to the clipped edge */}
        <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]"></div>
      </div>

      {/* Handle Graphic */}
      <div 
        className="absolute top-1/2 pointer-events-none z-10 transition-transform duration-100"
        style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
      >
        <div className={`bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 ${isModal ? 'w-12 h-12' : 'w-8 h-8'}`}>
          <ChevronLeft size={isModal ? 24 : 16} className="text-[#0056D2] absolute left-0.5" />
          <ChevronRight size={isModal ? 24 : 16} className="text-[#0056D2] absolute right-0.5" />
        </div>
      </div>
    </div>
  );
}

function ImageComparisonCard({ item, onClick }: { item: typeof cases[0], onClick: () => void, key?: any }) {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="relative" onClick={onClick}>
        <ImageComparisonView item={item} />
        {/* Maximize Icon Overlay */}
        <div className="absolute bottom-2 right-2 z-20 bg-white/80 backdrop-blur pointer-events-none p-1.5 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
           <Maximize2 size={16} className="text-gray-700" />
        </div>
      </div>
      <h3 className="text-center font-bold text-gray-900 group-hover:text-[#0056D2] transition-colors cursor-pointer" onClick={onClick}>{item.title}</h3>
    </div>
  );
}

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCase(null);
    };
    if (selectedCase) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCase]);

  const visibleCases = showAll ? cases : cases.slice(0, 4);

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
          
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="flex items-center text-[#0056D2] hover:text-[#0043A8] font-bold text-sm group cursor-pointer"
          >
            {showAll ? '閉じる' : 'すべての施工事例を見る'}
            <ArrowRight size={16} className={`ml-1 transition-transform ${showAll ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>
        
        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCases.map((item) => (
            <ImageComparisonCard key={item.id} item={item} onClick={() => setSelectedCase(item)} />
          ))}
        </div>

        {/* Bottom Expand Button */}
        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border border-[#0056D2] text-[#0056D2] hover:bg-blue-50 px-8 py-3 rounded-full transition-colors font-bold text-sm cursor-pointer shadow-sm"
            >
              新しい施工事例をもっと見る
              <ArrowRight size={16} className="translate-y-[0.5px]" />
            </button>
          </div>
        )}
        
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8" onClick={() => setSelectedCase(null)}>
          <div 
            className="w-full max-w-5xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 bg-black/50 absolute top-0 w-full z-50">
              <h3 className="text-white font-bold text-lg">{selectedCase.title}</h3>
              <button 
                onClick={() => setSelectedCase(null)}
                className="text-gray-300 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="mt-14 w-full h-full flex-grow flex items-center justify-center p-2 md:p-4 pb-0 bg-gray-900">
               <ImageComparisonView item={selectedCase} isModal={true} />
            </div>
            
            <div className="p-4 bg-gray-900 text-center text-gray-400 text-sm">
              画像を左右にスワイプまたはドラッグで比較できます
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

