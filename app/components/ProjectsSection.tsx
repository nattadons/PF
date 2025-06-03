'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

export default function ProjectsSection() {
	return (
		<section id="my-work" className=" px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center"
				>
					My Projects
				</motion.h2>

				<div className="space-y-8 sm:space-y-12 lg:space-y-16">
					{/* E-commerce ReadHaven */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
					>
						<div className="p-4 sm:p-6 lg:p-8">
							<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
								<div className="space-y-4 sm:space-y-6">
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.1 }}
										viewport={{ once: true }}
									>
										<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
											Read Haven - Online Bookstore
										</h3>
										<p className="text-gray-400 text-sm sm:text-base leading-relaxed">
											Read Haven is a full-stack e-commerce web application for buying and selling books, built using modern web technologies including React, Node.js, Express, and MongoDB. It features real-time cart operations, secure authentication, admin management, and Stripe payment integration.
										</p>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
										viewport={{ once: true }}
										className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
									>
										{/* Frontend */}
										<div className="bg-black/20 rounded-lg p-4">
											<h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-3">
												Frontend Stack
											</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
												<li>• React (Vite)</li>
												<li>• React Router</li>
												<li>• Material-UI</li>
												<li>• Google OAuth</li>
											</ul>
										</div>
										{/* Backend */}
										<div className="bg-black/20 rounded-lg p-4">
											<h4 className="text-xs sm:text-sm font-semibold text-purple-400 mb-3">
												Backend Stack
											</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
												<li>• Node.js & Express</li>
												<li>• MongoDB & Mongoose</li>
												<li>• JWT Authentication</li>
												<li>• Google OAuth</li>
											</ul>
										</div>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
										viewport={{ once: true }}
										className="bg-black/20 rounded-lg p-4"
									>
										<h4 className="text-xs sm:text-sm font-semibold text-teal-400 mb-3">
											Main Features
										</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
											<li>• Email/Password & Google Sign-in</li>
											<li>• Book Browsing and Detailed Info</li>
											<li>• Shopping Cart and Checkout</li>
											<li>• Stripe Payment Integration</li>
											<li>• Admin Management Panel</li>
											<li>• Order Tracking System</li>
										</ul>
									</motion.div>
								</div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									viewport={{ once: true }}
									className="bg-black/30 rounded-xl p-4 sm:p-6 order-first xl:order-last"
								>
									<h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-3 sm:mb-4">
										Web Application
									</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-2 sm:p-4 flex items-center justify-center">
										<Image
											src="/images/readhaven.png" // ✅ เปลี่ยน path ตามของคุณ
											alt="Architecture Diagram"
											width={800}
											height={600}
											className="rounded-md object-contain w-full h-full"
										/>
									</div>

									{/* 🔗 ปุ่ม Live Demo */}
									<div className="mt-4 text-center">
										<a
											href="https://boo-k-haven.vercel.app"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block text-xs sm:text-sm text-blue-400 hover:underline"
										>
											🔗 Visit the Live Website
										</a>
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>


					{/* Bloggy*/}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
					>
						<div className="p-4 sm:p-6 lg:p-8">
							<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
								<div className="space-y-4 sm:space-y-6">
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.1 }}
										viewport={{ once: true }}
									>
										<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
											Bloggy – Personal Blogging Platform
										</h3>
										<p className="text-gray-400 text-sm sm:text-base leading-relaxed">
											Bloggy is a full-stack modern blogging platform where users can create, manage, and share blog posts. Featuring rich text editing, image uploads, social login, and a responsive design — all built with Next.js, TypeScript, and Tailwind CSS.
										</p>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
										viewport={{ once: true }}
										className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
									>
										<div className="bg-black/20 rounded-lg p-4">
											<h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-3">
												User Features
											</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
												<li>• Social Login with Google & Facebook</li>
												<li>• Create, Edit & Delete Blog Posts</li>
												<li>• Comment and Save Posts</li>
												<li>• Profile Dashboard Management</li>
											</ul>
										</div>
										<div className="bg-black/20 rounded-lg p-4">
											<h4 className="text-xs sm:text-sm font-semibold text-purple-400 mb-3">
												Tech Stack
											</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
												<li>• Next.js + TypeScript</li>
												<li>• Prisma + SQL Database</li>
												<li>• NextAuth.js</li>
												<li>• Cloudinary + TipTap Editor</li>
											</ul>
										</div>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
										viewport={{ once: true }}
										className="bg-black/20 rounded-lg p-4"
									>
										<h4 className="text-xs sm:text-sm font-semibold text-teal-400 mb-3">
											Admin & Security
										</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
											<li>• Admin Panel to Manage All Posts</li>
											<li>• Protected Routes & API Middleware</li>
											<li>• Session Management with JWT</li>

										</ul>
									</motion.div>
								</div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									viewport={{ once: true }}
									className="bg-black/30 rounded-xl p-4 sm:p-6 order-first xl:order-last"
								>
									<h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-3 sm:mb-4">
										Web Application
									</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-2 sm:p-4 flex items-center justify-center">
										<Image
											src="/images/bloggy.png" // ✅ เปลี่ยน path ตามของคุณ
											alt="Architecture Diagram"
											width={800}
											height={600}
											className="rounded-md object-contain w-full h-full"
										/>
									</div>

									{/* 🔗 ปุ่ม Live Demo */}
									<div className="mt-4 text-center">
										<a
											href="https://bloggy-mocha-one.vercel.app"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block text-xs sm:text-sm text-blue-400 hover:underline"
										>
											🔗 Visit the Live Website
										</a>
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>

					{/* BLMS Mobile Project */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
					>
						<div className="p-4 sm:p-6 lg:p-8">
							<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
								<div className="space-y-4 sm:space-y-6">
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.1 }}
										viewport={{ once: true }}
									>
										<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
											BLMS Mobile – UX/UI Internship
										</h3>
										<p className="text-gray-400 text-sm sm:text-base leading-relaxed">
											BLMS Mobile is a mobile application developed to enhance the existing Betagro Livestock Management System (BLMS). It enables farmers to efficiently record daily livestock activities, categorized by animal types (poultry, swine, fish, etc.). The app supports direct input, data verification, and review by academic staff and veterinarians to ensure standard compliance and streamline workflows.
										</p>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
										viewport={{ once: true }}
										className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
									>
										<div className="bg-black/20 rounded-lg p-4">
											<h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-3">
												Key Features
											</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
												<li>• Record daily livestock activities</li>
												<li>• Data submission for academic review</li>
												<li>• Support for various animal types</li>
												<li>• Visual workflow and real-time feedback</li>
											</ul>
										</div>
										<div className="bg-black/20 rounded-lg p-4">
											<h4 className="text-xs sm:text-sm font-semibold text-purple-400 mb-3">
												Tech Stack & Methodology
											</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
												<li>• Figma for UI Design</li>
												<li>• Scrum Methodology</li>
												<li>• User Interviews & Usability Testing</li>
												<li>• Design Thinking & UX Design Process</li>
											</ul>
										</div>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
										viewport={{ once: true }}
										className="bg-black/20 rounded-lg p-4"
									>
										<h4 className="text-xs sm:text-sm font-semibold text-teal-400 mb-3">
											Impact & Results
										</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
											<li>• 90% of users successfully completed tasks</li>
											<li>• Improved data accuracy and workflow</li>
											<li>• Streamlined farm operations and reporting</li>
										</ul>
									</motion.div>
								</div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									viewport={{ once: true }}
									className="bg-black/30 rounded-xl p-4 sm:p-6 order-first xl:order-last"
								>
									<h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-3 sm:mb-4">
										UX/UI Design - Mobile Application
									</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-2 sm:p-4 flex items-center justify-center">
										<Image
											src="/images/blms.png" // ⛳️ เปลี่ยน path ให้ตรงกับที่คุณวางไฟล์ไว้ เช่น public/images/blms-poster.png
											alt="BLMS Mobile Poster"
											width={800}
											height={600}
											className="rounded-md object-contain w-full h-full"
										/>
									</div>

									{/* ปุ่ม Link เพิ่มเติม ถ้ามี */}
									<div className="mt-4 text-center">
										<a
											href="https://drive.google.com/file/d/1AHJkuLCSbMa_LlktEKRgljOhMyWigk_n/view?usp=sharing" // 🔗 ใส่ลิงก์จริงถ้ามี
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block text-xs sm:text-sm text-blue-400 hover:underline"
										>
											🔗 Visit the Project Poster
										</a>
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>


				</div>
			</div>
		</section>
	);
}