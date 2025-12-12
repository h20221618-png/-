import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITIES } from '../constants';
import { Calendar } from 'lucide-react';

const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Blob */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">주요 활동</h2>
            <p className="text-gray-500">학생회에서 진행하는 다양한 행사와 프로그램을 소개합니다.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-primary-dark font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {activity.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;