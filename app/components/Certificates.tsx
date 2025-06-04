'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Certificates() {
 const certificates = [
  {
    title: 'เรียนพัฒนาเว็บ Full Stack HTML CSS NodeJS Express EJS MySQL',
    issuer: 'Udemy',
    image: '/images/Udemy-fullstack.jpg', // อย่าลืมเช็กชื่อไฟล์ให้ตรงด้วย
    issuedDate: 'March 2025',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-16ee416f-32d4-4e0e-a181-3871acee30ab.pdf', // เปลี่ยน XXXXXXX เป็นรหัสใบเซอร์ของคุณ
  },
  {
    title: 'Complete Web & Mobile Designer: UI/UX, Figma, +more',
    issuer: 'Udemy',
    image: '/images/Udemy-UxUi.jpg',
    issuedDate: 'March 2025',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-2cb04920-b8d5-45e3-9835-25994bbf3d52.pdf',
  },
];


  return (
    <section id="certificates" className="px-4 sm:px-6 lg:px-8 mt-40 mb-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          Certificates
        </motion.h2>

        <div className="grid gap-8 sm:gap-12 lg:gap-16 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 shadow-xl rounded-xl lg:rounded-2xl overflow-hidden"
            >
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-white">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Issued by <span className="text-teal-400">{cert.issuer}</span> — {cert.issuedDate}
                </p>
                <div className="aspect-[4/3] bg-black/40 rounded-lg p-2 sm:p-4 mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={800}
                    height={600}
                    className="rounded-md object-contain w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-blue-400 hover:underline"
                  >
                    🔗 View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
