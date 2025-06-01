import talentank from 'public/images/talentank.jpg'
import talentank2 from 'public/images/talentank-2.jpeg'
import geniusAI from 'public/images/genius-ai.jpeg'
import geniusAI2 from 'public/images/genius-ai-2.jpeg'
import sidefolioMoonbeam from 'public/images/sidefolio-moonbeam.png'
import sidefolioMoonbeam2 from 'public/images/sidefolio-moonbeam-2.png'
import sidefolioTailwindMasterKit from 'public/images/sidefolio-tailwindmasterkit.png'
import sidefolioTailwindMasterKit2 from 'public/images/sidefolio-tailwindmasterkit-2.png'
import { siteIcons } from './siteIcons'

export const products = [
	{
		href: 'https://talentank.in/',
		title: 'Talent Tank AI',
		description: `Talentank.in is a modern AI-powered SaaS platform designed to revolutionize skill-based assessments through adaptive quizzes tailored to individual users’ professions and expertise levels. Branded under the name "QuizGenius," the platform delivers an intelligent and personalized learning experience by dynamically generating quiz content using cutting-edge AI technologies.`,
		thumbnail: talentank,
		images: [talentank, talentank2],
		stack: ['Nextjs', 'Tailwindcss', 'OpenAI', 'Langchain', 'Prisma', 'PostgreSQL', 'Utho'],
		slug: 'talentank',
		content: (
			<div>
				<p>
					I made the platform end-to-end using a robust and scalable stack. The frontend was developed using Next.js, React.js and
					TailwindCSS, offering a responsive, highly performant interface that ensures seamless accessibility across devices. The
					user experience was further enhanced by integrating Utho for real-time session replays, user heatmaps, and
					analytics-driven UI improvements.
				</p>
				<p>
					On the backend, I implemented scalable APIs using Next.js API routes and managed data persistence through Prisma ORM
					connected to a PostgreSQL database. This setup provided the flexibility and performance needed to support thousands of
					users concurrently while maintaining data integrity and query efficiency.
				</p>
			</div>
		),
		socials: [
			{
				id: 1,
				name: 'Github',
				designation: 'niikkhilsharma',
				image: siteIcons.github,
				src: 'https://github.com/niikkhilsharma/bangalore-assignment-ai',
			},
			{
				id: 2,
				name: 'LinkedIn',
				designation: 'niikkhilsharma',
				image: siteIcons.linkedIn,
				src: 'https://www.linkedin.com/posts/niikkhilsharma_ai-generativeai-humanbehavior-activity-7322184620702056448-zu7M?utm_source=share&utm_medium=member_desktop&rcm=ACoAADhfkbQBWjMfHNSV6Yv1DlBncNtfzygM3t4',
			},
		],
	},
	{
		href: 'https://ai.techsolutions.services/',
		title: 'Genius AI',
		description:
			'Genius AI is an advanced productivity tool that leverages cutting-edge AI to automate tasks, generate content, and provide real-time assistance, seamlessly integrating with your favorite productivity platforms.',
		thumbnail: geniusAI2,
		images: [geniusAI2, geniusAI],
		stack: ['Nextjs', 'Tailwindcss', 'OpenAI', 'Langchain', 'Replicate', 'HuggingFace', 'PostgreSQL'],
		slug: 'algochurn',
		content: (
			<div>
				<p>
					Developed <strong>Genius AI</strong>, a powerful AI-driven productivity tool designed to streamline workflows through
					intelligent task automation and real-time content generation. It assists users by providing contextual suggestions,
					summarizing lengthy documents, and enhancing creative writing efficiency.
				</p>
				<p>
					Built using <strong>Next.Js, Node.js, the OpenAI API, LangChain and HuggingFace</strong>, Genius AI integrates
					seamlessly with popular productivity platforms to supercharge everyday tasks. Its cutting-edge architecture enables
					dynamic, real-time assistance, making it a valuable asset for professionals aiming to optimize output and reduce manual
					effort.
				</p>
			</div>
		),
		socials: [
			{
				id: 1,
				name: 'Github',
				designation: 'niikkhilsharma',
				image: siteIcons.github,
				src: 'https://github.com/niikkhilsharma/genius-ai',
			},
			{
				id: 2,
				name: 'LinkedIn',
				designation: 'niikkhilsharma',
				image: siteIcons.linkedIn,
				src: 'https://www.linkedin.com/posts/niikkhilsharma_ai-innovation-openai-activity-7266552225567502336-4wN0?utm_source=share&utm_medium=member_desktop&rcm=ACoAADhfkbQBWjMfHNSV6Yv1DlBncNtfzygM3t4',
			},
		],
	},
]
