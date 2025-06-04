'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      title: 'เรียนพัฒนาเว็บ Full Stack HTML CSS NodeJS Express EJS MySQL',
      issuer: 'Udemy',
      image: '/images/Udemy-fullstack.jpg',
      issuedDate: 'March 2025',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-16ee416f-32d4-4e0e-a181-3871acee30ab.pdf',
    },
    {
      title: 'Complete Web & Mobile Designer: UI/UX, Figma, +more',
      issuer: 'Udemy',
      image: '/images/Udemy-UxUi.jpg',
      issuedDate: 'March 2025',
      link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-2cb04920-b8d5-45e3-9835-25994bbf3d52.pdf',
    },
    // เพิ่มใบเซอร์อื่นๆ ได้ที่นี่
    {
      title: 'CP-Lotus Hackathon : Technology Solutions for Retail Business',
      issuer: 'CP-Lotus Hackathon',
      image: '/images/cp-lotus.jpg',
      issuedDate: 'September 2022',
      link: 'https://drive.google.com/file/d/155NVa1LtW0EtGHGQn8ObQ-vrUcNMKeGu/view?usp=sharing',
      achievement: '🏆 Winner - 1st Place',
    },
  ];

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCert = certificates[currentIndex];

  return (
    <section id="certificates" className="w-full py-20 mb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          Certificates & Activities
        </motion.h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevCertificate}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-700/60 rounded-full p-4 shadow-lg transition-all duration-300 opacity-50 hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 text-white/80 hover:text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextCertificate}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-700/60 rounded-full p-4 shadow-lg transition-all duration-300 opacity-50 hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 text-white/80 hover:text-white" />
          </motion.button>

          {/* Certificate Card */}
          <div className=" relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="w-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Certificate Image */}
                  <motion.div
                    className="relative bg-black/20 p-8 flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="w-full h-full max-w-md mx-auto">
                      <Image
                        src={currentCert.image}
                        alt={currentCert.title}
                        width={800}
                        height={600}
                        className="rounded-xl object-contain w-full h-full shadow-2xl"
                      />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 w-20 h-20 bg-teal-500/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
                  </motion.div>

                  {/* Certificate Details */}
                  <motion.div
                    className="p-8 lg:p-12 flex flex-col justify-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <motion.div
                      className="mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 text-sm font-medium rounded-full border border-teal-500/30">
                        Certificate #{currentIndex + 1} of {certificates.length}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="text-2xl lg:text-3xl font-bold mb-6 text-white leading-tight"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {currentCert.title}
                    </motion.h3>

                    <motion.div
                      className="space-y-4 mb-8"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Issued by <span className="text-teal-400 font-semibold">{currentCert.issuer}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Completed in <span className="text-blue-400 font-semibold">{currentCert.issuedDate}</span>
                        </span>
                      </div>
                      {/* ✅ Achievement Section */}
                      {currentCert.achievement && (
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-300">
                            Achievement: <span className="text-yellow-300 font-semibold">{currentCert.achievement}</span>
                          </span>
                        </div>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <motion.a
                        href={currentCert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl group"
                      >
                        <span>🔗</span>
                        <span>View Certificate</span>
                        <motion.div
                          className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden"
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.div>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <motion.div
            className="flex justify-center mt-8 gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {certificates.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-teal-400 shadow-lg shadow-teal-400/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                  }`}
              >
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full bg-teal-400"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="mt-6 mx-auto max-w-md"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / certificates.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}