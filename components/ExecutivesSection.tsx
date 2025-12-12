import React from 'react';
import { motion } from 'framer-motion';
import { EXECUTIVES } from '../constants';

const ExecutivesSection: React.FC = () => {
  return (
    <section id="intro" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            학생회 임원진 소개
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500"
          >
            미디어스쿨을 이끌어가는 모아의 얼굴들입니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXECUTIVES.map((exec, index) => (
            <motion.div
              key={exec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 bg-gray-100">
                <img 
                  src={exec.imageUrl} 
                  alt={exec.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">{exec.name}</h3>
                <p className="text-primary-dark font-medium">{exec.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutivesSection;