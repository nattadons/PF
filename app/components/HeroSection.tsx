'use client'

import { motion } from 'framer-motion';
import Image from 'next/image'
import { Palette, Code2, Server, Cloud } from "lucide-react"

export default function HeroSection() {
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
						{/* Profile Image */}
						<div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 mx-auto mb-6 sm:mb-8'>
							<Image
								src="/images/profile.jpg"
								alt="My Photo"
								fill
								className='rounded-full object-cover'
							/>
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
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
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
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-purple-500/30 transition-all duration-300"
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

				{/* My Skills Section */}
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

			</div>
		</section>
	);
}