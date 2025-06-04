'use client'

import { motion } from 'framer-motion';
import Image from 'next/image'

import { useState } from 'react';

export default function HeroSection() {
	const [isHovered, setIsHovered] = useState(false);

	const thoughtMessages = [
		"Hi! I'm Nes, passionate about UX/UI design & web development! 👋",
		"Skilled in React & Node.js for building awesome websites! ⚛️",
		"Always seeking great opportunities to grow in tech! 🌱",
		"JavaScript & Python are my go-to languages! 🐍✨"
	];

	const randomMessage = thoughtMessages[Math.floor(Math.random() * thoughtMessages.length)];

	return (
		<section className="min-h-screen relative overflow-hidden">
			{/* Background Grid */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			{/* Main Content Container */}
			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

				{/* Hero Profile Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto"
				>
					{/* Profile Content */}
					<div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-8 sm:mb-10 lg:mb-12">
						{/* Interactive Profile Image with Thought Bubble */}
						<div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 mx-auto mb-6 sm:mb-8">
							{/* Thought Bubble */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8, y: 10 }}
								animate={{
									opacity: isHovered ? 1 : 0,
									scale: isHovered ? 1 : 0.8,
									y: isHovered ? 0 : 10
								}}
								transition={{
									duration: 0.3,
									ease: "easeOut"
								}}
								className="absolute top-1/2 -translate-y-1/2 -right-24 sm:-right-32 md:-right-40 lg:-right-52 z-20 pointer-events-none"
							>
								{/* Thought bubble container */}
								<div className="relative">
									{/* Main bubble */}
									<div className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-200 min-w-[160px] sm:min-w-[200px] max-w-[240px] sm:max-w-[280px]">
										<p className="text-xs sm:text-sm font-medium text-center whitespace-normal">
											{randomMessage}
										</p>
									</div>

									{/* Bubble tail (small circles) */}
									<div className="absolute -bottom-3 left-8 sm:left-12">
										<div className="flex space-x-1">
											<div className="w-2 h-2 bg-white/90 rounded-full shadow-sm"></div>
											<div className="w-1.5 h-1.5 bg-white/80 rounded-full shadow-sm"></div>
											<div className="w-1 h-1 bg-white/70 rounded-full shadow-sm"></div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Profile Image Card */}
							<motion.div
								className="relative w-full h-full cursor-pointer group"
								onHoverStart={() => setIsHovered(true)}
								onHoverEnd={() => setIsHovered(false)}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2 }}
							>
								{/* Glow effect */}
								<motion.div
									className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
									animate={{
										opacity: isHovered ? 0.3 : 0,
									}}
								/>

								{/* Border ring */}
								<motion.div
									className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 p-0.5"
									animate={{
										rotate: isHovered ? 360 : 0,
									}}
									transition={{
										duration: 2,
										ease: "linear",
										repeat: isHovered ? Infinity : 0,
									}}
								>
									<div className="w-full h-full bg-gray-900 rounded-full" />
								</motion.div>

								{/* Actual Image */}
								<div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
									<Image
										src="/images/profile.jpg"
										alt="My Photo"
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>


								</div>

								{/* Click me hint */}
								<motion.div
									className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									initial={{ opacity: 0, y: -5 }}
									whileHover={{ opacity: 1, y: 0 }}
								>
									<span className="text-xs text-gray-500 font-medium">Click to interact!</span>
								</motion.div>
							</motion.div>
						</div>

						{/* Name */}
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 leading-tight">
							Nattadon Supachoksirirat
						</h1>

						{/* Title */}
						<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
							Full Stack Developer
						</h2>

						{/* Description */}
						<p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
							Hello, I&apos;m Nattadon Supachoksirirat (Nes). I&apos;m a full-stack web developer with a strong focus on building modern, user-friendly web applications. I can design intuitive UX/UI and develop complete full-stack websites from concept to deployment.
						</p>

						{/* Experience */}
						<p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-2">
							Graduated from <span className="text-blue-400">Chiang Mai University</span> with a degree in <span className="text-purple-400">Computer Science</span>. Passionate about building modern full-stack applications.
						</p>

					</div>

					{/* Tech Stack Tags */}
					<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 px-2">
						<span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs sm:text-sm">TypeScript</span>
						<span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs sm:text-sm">React & Next.js</span>
						<span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs sm:text-sm">Node.js</span>
						<span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs sm:text-sm">Python</span>
						<span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs sm:text-sm">SQL</span>
					</div>
				</motion.div>

				{/* CTA Cards Section */}
				<div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
						{/* Card 1: My Projects */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
							viewport={{ once: true, amount: 0.4 }}
							className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
						>

							<h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">My Projects</h3>
							<p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
								Explore the web applications I&apos;ve built using modern full-stack technologies.
							</p>
							<button
								onClick={() => {
									const element = document.getElementById('my-work');
									if (element) {
										element.scrollIntoView({ behavior: 'smooth' });
									}
								}}
								className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-500 text-white text-sm sm:text-base font-medium hover:bg-blue-600 transition-colors duration-200"
							>
								View Projects
							</button>
						</motion.div>

						{/* Card 2: My Skills */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
							viewport={{ once: true, amount: 0.4 }}
							className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
						>

							<h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">My Technical Skills</h3>
							<p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
								A quick overview of the technologies and tools I use to build scalable applications.
							</p>
							<button
								onClick={() => {
									const element = document.getElementById('my-skills');
									if (element) {
										element.scrollIntoView({ behavior: 'smooth' });
									}
								}}
								className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-purple-500 text-white text-sm sm:text-base font-medium hover:bg-purple-600 transition-colors duration-200"
							>
								View Skills
							</button>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}