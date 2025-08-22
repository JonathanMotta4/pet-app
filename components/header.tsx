import { Dog, MapPin, Menu, Stethoscope, Syringe } from 'lucide-react'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from './ui/sheet'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
export function Header() {
	return (
		<header className='flex sticky top-0 left-0 justify-between items-center p-3 h-14 shadow-md bg-green-primary'>
			<Link href={'/'}>
				<div className='flex gap-2 items-center transition-colors group text-yellow-secondary'>
					<Dog className='size-8 group-hover:drop-shadow-sm' />
					<h1 className='text-2xl font-heading group-hover:text-shadow-sm'>Pet Bem</h1>
				</div>
			</Link>
			<div className='flex gap-2'>
				<ModeToggle />
				<Sheet>
					<SheetTrigger>
						<Menu className='transition-colors hover:text-yellow-secondary' />
					</SheetTrigger>
					<SheetContent className='px-2 w-96'>
						<SheetHeader>
							<SheetTitle>
								<Link
									href={'/'}
									className='transition-colors font-heading hover:text-yellow-secondary'
								>
									Pet App
								</Link>
							</SheetTitle>
							<SheetDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequuntur laudantium non eveniet.
							</SheetDescription>
						</SheetHeader>
						<div className='flex flex-col gap-2 px-3 text-lg'>
							<Link
								href={'/'}
								className='flex gap-1 items-center transition-colors hover:underline dark:hover:text-yellow-secondary hover:text-green-primary'
							>
								<Stethoscope className='size-6' />
								Nossa história
							</Link>
							<Link
								href={'/'}
								className='flex gap-1 items-center transition-colors hover:underline dark:hover:text-yellow-secondary hover:text-green-primary'
							>
								<Syringe className='size-6' />
								Especialidades
							</Link>
							<Link
								href={'/'}
								className='flex gap-1 items-center transition-colors hover:underline dark:hover:text-yellow-secondary hover:text-green-primary'
							>
								<MapPin className='size-6' />
								Localização e Contato
							</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
