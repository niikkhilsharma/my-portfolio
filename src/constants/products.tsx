import talenttank from 'public/images/talenttank.jpg'
import talenttank2 from 'public/images/talenttank-2.png'
import sidefolioAlgochurn from 'public/images/sidefolio-algochurn.png'
import sidefolioAlgochurn2 from 'public/images/sidefolio-algochurn.png'
import sidefolioMoonbeam from 'public/images/sidefolio-moonbeam.png'
import sidefolioMoonbeam2 from 'public/images/sidefolio-moonbeam-2.png'
import sidefolioTailwindMasterKit from 'public/images/sidefolio-tailwindmasterkit.png'
import sidefolioTailwindMasterKit2 from 'public/images/sidefolio-tailwindmasterkit-2.png'

export const products = [
	{
		href: 'https://talentank.in/',
		title: 'Talent Tank AI',
		description: `Talentank.in is a modern AI-powered SaaS platform designed to revolutionize skill-based assessments through adaptive quizzes tailored to individual users’ professions and expertise levels. Branded under the name "QuizGenius," the platform delivers an intelligent and personalized learning experience by dynamically generating quiz content using cutting-edge AI technologies.`,
		thumbnail: talenttank,
		images: [talenttank, talenttank2],
		stack: ['Nextjs', 'Tailwindcss', 'OpenAI', 'Langchain', 'Prisma', 'PostgreSQL', 'Utho'],
		slug: 'talenttank',
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
	},
	{
		href: 'https://algochurn.com',
		title: 'Algochurn',
		description: 'Practice for technical interviews with hands on coding challenges.',
		thumbnail: sidefolioAlgochurn,
		images: [sidefolioAlgochurn, sidefolioAlgochurn2],
		stack: ['Nextjs', 'Tailwindcss'],
		slug: 'algochurn',
		content: (
			<div>
				<p>
					Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt est ipsum. Dolor
					laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris cupidatat elit velit aute mollit nisi.
					Officia ad exercitation laboris non cupidatat duis esse velit ut culpa et.{' '}
				</p>
				<p>
					Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco exercitation quis et dolor
					sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat proident fugiat id. Officia aliquip laborum labore
					eu culpa dolor reprehenderit eu ex enim reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit
					adipisicing minim et officia enim et veniam Lorem excepteur velit adipisicing et Lorem magna.
				</p>{' '}
			</div>
		),
	},
	{
		href: 'https://gomoonbeam.com',
		title: 'Moonbeam',
		description: 'Never write from scratch again with Moonbeam, your AI first writing tool',
		thumbnail: sidefolioMoonbeam,
		images: [sidefolioMoonbeam, sidefolioMoonbeam2],
		stack: ['Nextjs', 'Tailwindcss'],
		slug: 'moonbeam',
		content: (
			<div>
				<p>
					Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt est ipsum. Dolor
					laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris cupidatat elit velit aute mollit nisi.
					Officia ad exercitation laboris non cupidatat duis esse velit ut culpa et.{' '}
				</p>
				<p>
					Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco exercitation quis et dolor
					sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat proident fugiat id. Officia aliquip laborum labore
					eu culpa dolor reprehenderit eu ex enim reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit
					adipisicing minim et officia enim et veniam Lorem excepteur velit adipisicing et Lorem magna.
				</p>{' '}
			</div>
		),
	},
	{
		href: 'https://tailwindmasterkit.com',
		title: 'Tailwind Master Kit',
		description:
			'A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.',
		thumbnail: sidefolioTailwindMasterKit,
		images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
		stack: ['Nextjs', 'Tailwindcss'],
		slug: 'tailwindmasterkit',
		content: (
			<div>
				<p>
					Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco dolore nulla amet tempor sunt est ipsum. Dolor
					laborum eiusmod cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris cupidatat elit velit aute mollit nisi.
					Officia ad exercitation laboris non cupidatat duis esse velit ut culpa et.{' '}
				</p>
				<p>
					Exercitation pariatur enim occaecat adipisicing nostrud adipisicing Lorem tempor ullamco exercitation quis et dolor
					sint. Adipisicing sunt sit aute fugiat incididunt nostrud consequat proident fugiat id. Officia aliquip laborum labore
					eu culpa dolor reprehenderit eu ex enim reprehenderit. Cillum Lorem veniam eu magna exercitation. Reprehenderit
					adipisicing minim et officia enim et veniam Lorem excepteur velit adipisicing et Lorem magna.
				</p>{' '}
			</div>
		),
	},
]
