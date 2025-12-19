import React from 'react';
import { Truck } from 'lucide-react';
import { DISPATCH_VEHICLES } from '../constants';

const DispatchSystem: React.FC = () => {
  return (
    <section id="dispatch" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full opacity-50 -mr-16 -mt-16 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                통합 배차 시스템
              </h2>
              <p className="text-gray-600 text-lg">
                스카이차 외에도 현장에 필요한 모든 중장비를 배차해 드립니다.<br/>
                <span className="font-bold text-blue-600">최소 1일 전</span>에 연락주시면 경력직 기사님으로 원활한 배차가 가능합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {DISPATCH_VEHICLES.map((vehicle, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-md transition-all border border-slate-100">
                  <div className="mx-auto w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Truck size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{vehicle.name}</h3>
                  <p className="text-xs text-gray-500">{vehicle.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-600 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold mb-2">장비가 필요하신가요?</h4>
                <p className="text-blue-100">경기도 외 모든 지역 이동 및 배차가 가능합니다.</p>
              </div>
              <div className="flex-shrink-0">
                <a href="#contact" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                  배차 문의하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DispatchSystem;