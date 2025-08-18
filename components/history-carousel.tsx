import { Card, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export function HistoryCarousel() {
	return (
		<Carousel className='mx-auto w-3/4 max-w-5xl h-full'>
			<CarouselContent className='p-2 -ml-1'>
				<CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
					<Card className='w-80 h-80'>
						<CardContent className='flex justify-center items-center'>
							<span className='text-2xl font-semibold'>1</span>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
					<Card className='w-80 h-80'>
						<CardContent className='flex justify-center items-center'>
							<span className='text-2xl font-semibold'>1</span>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
					<Card className='w-80 h-80'>
						<CardContent className='flex justify-center items-center'>
							<span className='text-2xl font-semibold'>1</span>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem className='pl-1 md:basis-1/2 lg:basis-1/3'>
					<Card className='w-80 h-80'>
						<CardContent className='flex justify-center items-center'>
							<span className='text-2xl font-semibold'>1</span>
						</CardContent>
					</Card>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	)
}
