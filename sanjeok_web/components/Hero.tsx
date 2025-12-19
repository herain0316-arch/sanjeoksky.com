import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* 
          Using scale-110 and object-position to slightly zoom in and crop the bottom edges.
          This effectively hides the timestamp text at the bottom right of the original photo.
        */}
        <img 
          src="/sanjeok_bg.jpg" 
          alt="Sanjeok Sky Truck working at building" 
          className="w-full h-full object-cover scale-[1.15] origin-center"
        />
        {/* Adjusted overlay opacity to 0.6 to let the blue building show through better */}
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-blue-400 font-bold tracking-widest text-sm md:text-base mb-4 uppercase animate-fade-in-up">
          {COMPANY_INFO.slogan}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          높은 곳을 향한<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            가장 안전한 선택
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          좁은 골목부터 고층 작업까지, 1군 현장 서류 완비.<br className="hidden md:block"/>
          고객의 안전과 성공적인 작업을 최우선으로 생각합니다.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
          >
            <PhoneCall size={20} />
            전화 상담하기
          </a>
          <a 
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            서비스 보기
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;