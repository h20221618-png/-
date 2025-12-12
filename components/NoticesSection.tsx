import React from 'react';
import { motion } from 'framer-motion';
import { NOTICES } from '../constants';
import { Bell, ChevronRight } from 'lucide-react';

const NoticesSection: React.FC = () => {
  return (
    <section id="notices" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">알림 사항</h2>
          <p className="text-gray-500">놓치지 말아야 할 중요한 소식들을 전해드립니다.</p>
        </div>

        <div className="flex flex-col gap-4">
          {NOTICES.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:border-primary transition-colors group ${
                notice.isImportant ? 'bg-primary/5 border-primary/20' : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg shrink-0 ${notice.isImportant ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {notice.isImportant && (
                      <span className="text-xs font-bold text-primary-dark bg-white px-2 py-0.5 rounded-full border border-primary/20">
                        필독
                      </span>
                    )}
                    <span className="text-sm text-gray-400">{notice.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-dark transition-colors">
                    {notice.title}
                  </h3>
                </div>
              </div>
              <div className="self-end md:self-center">
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
           <button className="px-8 py-3 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
             더 많은 공지 보기
           </button>
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;