import React from 'react';
import { Phone, User, CreditCard, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Info */}
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              작업 문의
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              친절하고 안전하게 작업해 드립니다.<br/>
              궁금하신 점이나 견적 문의는 언제든 연락주세요.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-600">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 flex-shrink-0">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">대표</p>
                  <p className="text-xl font-bold text-slate-900">{COMPANY_INFO.owner}</p>
                </div>
              </div>

              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-600 hover:bg-blue-50 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">직통 전화</p>
                  <p className="text-2xl font-bold text-blue-600">{COMPANY_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-slate-400">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-600 flex-shrink-0">
                  <CreditCard size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">입금 계좌 ({COMPANY_INFO.bank.name})</p>
                  <p className="text-lg font-bold text-slate-900 tracking-wide">
                    {COMPANY_INFO.bank.account} <span className="text-sm font-normal text-gray-500 ml-1">예금주: {COMPANY_INFO.bank.holder}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Card Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-slate-900 rounded-xl opacity-20 blur-lg transform rotate-2"></div>
            <div className="relative bg-white border border-gray-200 shadow-2xl rounded-xl overflow-hidden aspect-[1.58/1] flex flex-col">
               {/* Business Card Design Simulation */}
               <div className="flex flex-1">
                 <div className="w-2/5 bg-slate-900 text-white flex flex-col justify-center p-6 md:p-8 relative">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{COMPANY_INFO.name}</h3>
                    <div className="absolute bottom-8">
                       <p className="text-xl md:text-2xl font-bold">{COMPANY_INFO.owner}</p>
                       <p className="text-xs md:text-sm text-slate-400">Jeon Seong hyeon</p>
                    </div>
                 </div>
                 <div className="w-3/5 bg-white p-6 md:p-8 flex flex-col justify-between">
                    <div className="text-right">
                       <p className="text-sm md:text-base font-bold text-slate-900 italic tracking-wide">Your Sky, Our Strength.</p>
                    </div>
                    <div className="text-right space-y-2">
                       <div>
                         <span className="text-xs md:text-sm font-bold text-slate-400 mr-2">mobile</span>
                         <span className="text-sm md:text-lg font-bold text-slate-800">{COMPANY_INFO.phone}</span>
                       </div>
                       <div>
                         <span className="text-xs md:text-sm font-bold text-slate-400 mr-2">bank</span>
                         <span className="text-xs md:text-sm font-bold text-slate-800">{COMPANY_INFO.bank.account} {COMPANY_INFO.bank.name}</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;