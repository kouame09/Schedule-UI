import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react';

const initialDays = [
  { id: 1, day: 'Fri', date: '31', month: '' },
  { id: 2, day: 'Sat', date: '01', month: '' },
  { id: 3, day: 'Sun', date: '02', month: '' },
  { id: 4, day: 'Mon', date: '03', month: '' },
  { id: 5, day: 'Tue', date: '04', month: '' },
];

const tabs = ['Meetings', 'Events', 'Checklist'];

export default function CalendarView() {
  const [activeDay, setActiveDay] = useState(3);
  const [activeTab, setActiveTab] = useState('Meetings');

  const renderContent = () => {
    switch (activeTab) {
      case 'Events':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 p-4 rounded-xl mb-4"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">Team Building Workshop</h3>
              <button className="text-gray-400 hover:text-gray-600">⋮</button>
            </div>
            <p className="text-sm text-gray-600 mb-2">2:00 PM - 5:00 PM</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces"
                  alt="Team member 1"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=faces"
                  alt="Team member 2"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                  +5
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Central Park</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Team Building
              </span>
            </div>
          </motion.div>
        );
      case 'Checklist':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            {[
              { text: 'Prepare presentation slides', done: true },
              { text: 'Review Q1 metrics', done: false },
              { text: 'Send follow-up emails', done: false },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="checkbox"
                  defaultChecked={item.done}
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className={item.done ? 'line-through text-gray-400' : ''}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-50 p-4 rounded-xl mb-4"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">Meeting with James Brown</h3>
              <button className="text-gray-400 hover:text-gray-600">⋮</button>
            </div>
            <p className="text-sm text-gray-600 mb-2">8:00 AM - 9:00 AM</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
                  alt="Team member 1"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=faces"
                  alt="Team member 2"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                  +2
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">on Zoom</span>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                Marketing
              </span>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <h1 className="text-lg font-semibold">Schedule</h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            See All
          </motion.button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium">April, 2023</span>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-between mb-6">
          <div className="flex gap-4">
            {initialDays.map((day) => (
              <motion.button
                key={day.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDay(day.id)}
                className={`flex flex-col items-center ${
                  activeDay === day.id
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-gray-50'
                } rounded-xl p-2 min-w-[48px] transition-colors duration-200`}
              >
                <span className="text-xs">{day.day}</span>
                <span className="text-lg font-semibold">{day.date}</span>
              </motion.button>
            ))}
          </div>
          <button className="p-2">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or day..."
            className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Filter className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex gap-6 border-b pb-4 mb-6">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500'
              } pb-1`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 flex items-center justify-center gap-2 text-gray-600 border-2 border-dashed rounded-xl hover:bg-gray-50"
        >
          <span className="text-xl">+</span>
          Create {activeTab.slice(0, -1)}
        </motion.button>
      </div>
    </div>
  );
}