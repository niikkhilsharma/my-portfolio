'use client'
import { Paragraph } from '@/components/Paragraph'
import Image from 'next/image'

import { motion } from 'framer-motion'

export default function About() {
	const images = [
		'https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
	]
	return (
		<div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
				{images.map((image, index) => (
					<motion.div
						key={image}
						initial={{
							opacity: 0,
							y: -50,
							rotate: 0,
						}}
						animate={{
							opacity: 1,
							y: 0,
							rotate: index % 2 === 0 ? 3 : -3,
						}}
						transition={{ duration: 0.2, delay: index * 0.1 }}>
						<Image
							src={image}
							width={200}
							height={400}
							alt="about"
							className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
						/>
					</motion.div>
				))}
			</div>

			<div className="max-w-4xl">
				<Paragraph className=" mt-4">
					Hey there, I&apos;m Nikhil Sharma - a passionate fullstack developer, avid writer, and a connoisseur of awesome design.
					Welcome to my corner of the digital world!
				</Paragraph>
				<Paragraph className=" mt-4">
					I’m a Frontend Web Developer specializing in React.js, Next.js, and intuitive UI/UX design. Over the past few years,
					I’ve collaborated with startups and freelance teams to build scalable, user-focused web applications — some of which now
					serve tens of thousands of users. I work with tools like Redux, Tailwind CSS, Framer Motion, and Prisma to create fast,
					dynamic, and visually appealing digital experiences.
				</Paragraph>

				<Paragraph className=" mt-4">
					I’ve also contributed to open-source projects like NextPy (⭐2.1k+ GitHub) and love turning complex ideas into
					functional, elegant products — whether it&apos;s a full-stack doctor consultation platform, a custom AI-powered chatbot,
					or an interactive admin dashboard.
				</Paragraph>
				<Paragraph className=" mt-4">
					I’m always exploring new technologies, pushing creative boundaries, and seeking new challenges. Through this website, I
					hope to share my experiences, projects, and thoughts — whether you&apos;re a developer hunting for solutions, a writer
					chasing ideas, or simply someone who loves great design.
				</Paragraph>
				<Paragraph className=" mt-4">
					So, join me in this journey of code and creativity, logic and design, and let’s build something remarkable together.
				</Paragraph>
				<Paragraph className=" mt-4">Thanks for stopping by — I’m glad you’re here.</Paragraph>
			</div>
		</div>
	)
}
