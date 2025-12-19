import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-sm leading-relaxed">
              경기도 및 수도권 전지역 스카이차.<br />
              고객의 안전과 만족을 최우선으로 합니다.<br />
              {COMPANY_INFO.slogan}
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">연락처</h3>
            <p className="text-sm mb-2">대표: {COMPANY_INFO.owner}</p>
            <p className="text-sm mb-2">전화: {COMPANY_INFO.phone}</p>
            <p className="text-sm">계좌: {COMPANY_INFO.bank.name} {COMPANY_INFO.bank.account}</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">서비스 지역</h3>
            <p className="text-sm">
              서울, 경기, 인천 수도권 전지역<br />
              지방 출장 및 전국 배차 가능
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;