import { Dog, Menu } from 'lucide-react'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from './ui/sheet'
import Link from 'next/link'
//TODO: Add icons to sidebar
//TODO: Add other links to sidebar
export function Header() {
	return (
		<header className='flex justify-between items-center p-3 h-14 shadow-md bg-green-primary'>
			<Link href={'/'}>
				<div className='flex gap-2 items-center transition-colors hover:text-yellow-secondary'>
					<Dog className='size-8' />
					<h1 className='text-2xl'>Pet App</h1>
				</div>
			</Link>
			<Sheet>
				<SheetTrigger>
					<Menu className='transition-colors hover:text-yellow-secondary' />
				</SheetTrigger>
				<SheetContent className='px-2 w-96'>
					<SheetHeader>
						<SheetTitle>Pet App</SheetTitle>
						<SheetDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequuntur laudantium non eveniet.
						</SheetDescription>
					</SheetHeader>
					<div className='flex flex-col gap-2 px-3 text-lg'>
						<Link
							href={'/'}
							className='transition-colors hover:underline hover:text-green-primary'
						>
							Home
						</Link>
						<Link href={'/'}>Home</Link>
						<Link href={'/'}>Home</Link>
						<Link href={'/'}>Home</Link>
						<Link href={'/'}>Home</Link>
					</div>
				</SheetContent>
			</Sheet>
		</header>
	)
}
