import React from 'react';
import { PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
      <a 
        href={`tel:${COMPANY_INFO.phone}`}
        className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 px-6 w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] active:bg-blue-700"
      >
        <PhoneCall className="animate-pulse" size={24} />
        <span className="text-xl font-bold">전화 문의하기</span>
      </a>
    </div>
  );
};

export default FloatingCTA;