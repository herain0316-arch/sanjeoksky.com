import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MAIN_SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              어떤 작업이든 가능합니다
            </h2>
            <p className="text-slate-400 mt-4 text-lg">
              외벽 공사부터 조경, 전기, 청소까지.<br />
              스카이차로 할 수 있는 모든 작업을 안전하게 수행합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MAIN_SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 p-8 rounded-2xl hover:bg-slate-800 transition-colors border border-slate-700 hover:border-blue-500/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/10 rounded-lg text-blue-400">
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Provide concrete list items based on the service category just for visual detail */}
                  <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                    {index === 0 && ["징크/판넬 시공", "코킹 작업", "페인트/도장", "외벽 물청소"].map(item => (
                       <li key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/>{item}</li>
                    ))}
                    {index === 1 && ["교량 점검", "가로등 교체", "고압 전기", "태양광 설치"].map(item => (
                       <li key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/>{item}</li>
                    ))}
                    {index === 2 && ["전지/벌목", "이삿짐 양중", "실외기 설치", "간판 작업"].map(item => (
                       <li key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/>{item}</li>
                    ))}
                    {index === 3 && ["좁은 골목 진입", "안전제일 준수", "신속한 작업", "친절한 응대"].map(item => (
                       <li key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;