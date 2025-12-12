import React from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-dark font-bold">
                M
              </div>
              <span className="text-2xl font-bold">Moa</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              한림대학교 제29대 미디어스쿨 학생회 모아<br/>
              학우들의 빛나는 순간을 함께합니다.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:contact@moa.edu" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>강원도 춘천시 한림대학길 1, 미디어관 4층 학생회실</span>
          </div>
          <p>© 2024 Moa Student Council. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;