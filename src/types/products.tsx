import { StaticImageData } from 'next/image'

export type Product = {
	title: string
	description: string
	thumbnail: StaticImageData
	images: StaticImageData[] | string[]
	href: string
	slug?: string
	stack?: string[]
	content?: React.ReactNode | string
	socials: {
		id: number
		name: string
		designation: string
		image: string
		src?: string
	}[]
}
