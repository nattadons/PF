import React from 'react'
import { motion } from 'framer-motion';

import { Palette, Code2, Server, Cloud } from "lucide-react"

export default function SkillsSection() {
  return (
   
				<section id="my-skills" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<motion.h2
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 sm:mb-16 lg:mb-20 text-center text-white"
					>
						Technical Skills
					</motion.h2>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4 sm:p-6 lg:p-8"
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

							{/* UX/UI Design */}
							<div className="bg-gray-800/50 hover:bg-gray-800/80 transition-colors duration-300 p-4 sm:p-6 rounded-lg border border-blue-500/30 hover:border-blue-500/50">
								<div className="flex items-center gap-3 mb-4 sm:mb-6">
									<Palette className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
									<h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-400">UX/UI Design</h3>
								</div>
								<ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
									<li>Figma</li>
									<li>User Flow & Wireframe</li>
									<li>Prototype</li>
									<li>Usability Testing</li>
									<li>A/B Testing</li>
									<li>Design Thinking</li>
								</ul>
							</div>

							{/* Frontend */}
							<div className="bg-gray-800/50 hover:bg-gray-800/80 transition-colors duration-300 p-4 sm:p-6 rounded-lg border border-green-500/30 hover:border-green-500/50">
								<div className="flex items-center gap-3 mb-4 sm:mb-6">
									<Code2 className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />
									<h3 className="text-base sm:text-lg lg:text-xl font-semibold text-green-400">Frontend</h3>
								</div>
								<ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
									{['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Material UI', 'HTML', 'CSS', 'Flutter'].map((skill, index) => (
										<li key={index} className="bg-gray-700 hover:bg-gray-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors duration-200">
											{skill}
										</li>
									))}
								</ul>
							</div>

							{/* Backend */}
							<div className="bg-gray-800/50 hover:bg-gray-800/80 transition-colors duration-300 p-4 sm:p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/50">
								<div className="flex items-center gap-3 mb-4 sm:mb-6">
									<Server className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6" />
									<h3 className="text-base sm:text-lg lg:text-xl font-semibold text-purple-400">Backend</h3>
								</div>
								<ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
									{['Node.js', 'Express', 'API', 'Postman', 'Python', 'Prisma', 'MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'].map((skill, index) => (
										<li key={index} className="bg-gray-700 hover:bg-gray-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors duration-200">
											{skill}
										</li>
									))}
								</ul>
							</div>

							{/* Deployment & Tools */}
							<div className="bg-gray-800/50 hover:bg-gray-800/80 transition-colors duration-300 p-4 sm:p-6 rounded-lg border border-teal-500/30 hover:border-teal-500/50">
								<div className="flex items-center gap-3 mb-4 sm:mb-6">
									<Cloud className="text-teal-400 w-5 h-5 sm:w-6 sm:h-6" />
									<h3 className="text-base sm:text-lg lg:text-xl font-semibold text-teal-400">Deployment & Tools</h3>
								</div>
								<ul className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
									{['Docker', 'GitHub', 'Vercel', 'Railway', 'Render', 'Scrum', 'Android Studio', 'ClickUp'].map((tool, index) => (
										<li key={index} className="bg-gray-700 hover:bg-gray-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors duration-200">
											{tool}
										</li>
									))}
								</ul>
							</div>

						</div>
					</motion.div>
				</section>
  )
}
