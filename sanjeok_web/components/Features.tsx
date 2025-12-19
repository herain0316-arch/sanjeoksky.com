import React from 'react';
import { WHY_CHOOSE_US } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            왜 산적스카이인가?
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">
            신속한 배차와 완벽한 일처리로 고객님의 신뢰에 보답합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;