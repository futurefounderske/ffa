import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckBadgeIcon,
  ArrowPathIcon,
  ClockIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { youngAdultProgram, teenProgram } from "../data/program/program";

export default function Program() {
  const [activeTab, setActiveTab] = useState("young-adult");

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-orange-500/10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-6 break-words"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto break-words"
          >
            Empowering the next generation of entrepreneurs through structured,
            hands-on learning experiences tailored for different age groups
          </motion.p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveTab("young-adult")}
            className={`px-8 py-4 rounded-lg font-display font-semibold text-lg transition-all duration-300 ${
              activeTab === "young-adult"
                ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30 scale-105"
                : "bg-navy-800 text-slate-300 hover:bg-navy-700 hover:text-white"
            }`}
          >
            Young Adult Program (20-28 yrs)
          </button>
          <button
            onClick={() => setActiveTab("teen")}
            className={`px-8 py-4 rounded-lg font-display font-semibold text-lg transition-all duration-300 ${
              activeTab === "teen"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                : "bg-navy-800 text-slate-300 hover:bg-navy-700 hover:text-white"
            }`}
          >
            Teen Program (Holiday Edition)
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Young Adult Program Content */}
        {activeTab === "young-adult" && (
          <motion.div
            key="young-adult"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
          >
            {/* Program Header */}
            <div className="bg-gradient-to-r from-teal-500/20 to-navy-800/50 rounded-2xl p-8 mb-12 border border-teal-500/20">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 break-words">
                {youngAdultProgram.title}
              </h2>
              <p className="text-teal-400 text-lg mb-4 break-words">
                {youngAdultProgram.tagline}
              </p>
              <p className="text-slate-300 text-lg break-words">
                {youngAdultProgram.description}
              </p>
            </div>

            {/* 10-Week Modules */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-bold text-white mb-8 text-center break-words">
                10-Week Structured Bootcamp
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {youngAdultProgram.modules.map((module, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-navy-800/30 rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/40 transition-all group h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                          <module.icon className="w-6 h-6 text-teal-400" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-teal-400 text-md font-mono mb-1">
                          Week {module.week}
                        </div>
                        <h4 className="text-xl font-display font-semibold text-white mb-2 break-words">
                          {module.title}
                        </h4>
                        <p className="text-slate-400 text-md mb-3 break-words leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What Makes This Different */}
            <div className="bg-gradient-to-r from-orange-500/10 to-teal-500/10 rounded-2xl p-8 border border-teal-500/20">
              <h3 className="text-2xl font-display font-bold text-white mb-6 text-center break-words">
                What Makes This Different
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {youngAdultProgram.whatMakesDifferent.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-navy-800/50 rounded-lg p-4"
                  >
                    <CheckBadgeIcon className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300 break-words leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Teen Program Content */}
        {activeTab === "teen" && (
          <motion.div
            key="teen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
          >
            {/* Program Header */}
            <div className="bg-gradient-to-r from-orange-500/20 to-navy-800/50 rounded-2xl p-8 mb-12 border border-orange-500/20">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 break-words">
                {teenProgram.title}
              </h2>
              <p className="text-orange-400 text-lg mb-4 break-words">
                {teenProgram.tagline}
              </p>
              <p className="text-slate-300 text-lg break-words leading-relaxed">
                {teenProgram.description}
              </p>
            </div>

            {/* Program Goal */}
            <div className="bg-navy-800/30 rounded-xl p-8 mb-12 border border-orange-500/20">
              <h3 className="text-xl font-display font-semibold text-orange-400 mb-3 break-words">
                Program Goal
              </h3>
              <p className="text-slate-300 text-lg break-words leading-relaxed">
                {teenProgram.programGoal}
              </p>
            </div>

            {/* What Teens Will Learn */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-bold text-white mb-6 text-center break-words">
                Teens Will Learn To:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {teenProgram.teensWillLearn.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 bg-navy-800/30 rounded-lg p-4 border border-orange-500/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                    <span className="text-slate-300 break-words leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Program Modules */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-bold text-white mb-8 text-center break-words">
                4 Progressive Modules
              </h3>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-500/20 hidden md:block" />
                <div className="space-y-8">
                  {teenProgram.modules.map((module, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative md:pl-16"
                    >
                      <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center hidden md:flex">
                        <module.icon className="w-8 h-8 text-orange-400" />
                      </div>
                      <div className="bg-navy-800/30 rounded-xl p-6 border border-orange-500/20 ml-0 md:ml-0">
                        <h4 className="text-xl font-display font-semibold text-orange-400 mb-4 break-words">
                          Module {module.module}: {module.title}
                        </h4>
                        <ul className="space-y-3">
                          {module.topics.map((topic, topicIdx) => (
                            <li
                              key={topicIdx}
                              className="flex items-start gap-3"
                            >
                              <ArrowPathIcon className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300 break-words leading-relaxed">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Program Structure & Outcomes */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-navy-800/30 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-display font-semibold text-orange-400 mb-4 flex items-center gap-2 break-words">
                  <ClockIcon className="w-5 h-5 flex-shrink-0" />
                  Program Structure
                </h3>
                <p className="text-slate-300 mb-4 break-words leading-relaxed">
                  The bootcamp is delivered in 4 progressive modules –
                  practical, engaging and hands-on – held quarterly during the
                  school holidays with assignments in between to reinforce
                  learning.
                </p>
                <p className="text-slate-300 break-words leading-relaxed">
                  Includes visits to local businesses, startups, or innovation
                  hubs – meeting young/seasoned entrepreneurs learning how
                  creative ideas turn into business ventures.
                </p>
              </div>

              <div className="bg-navy-800/30 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-display font-semibold text-orange-400 mb-4 flex items-center gap-2 break-words">
                  <TrophyIcon className="w-5 h-5 flex-shrink-0" />
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {teenProgram.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckBadgeIcon className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 break-words leading-relaxed">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
