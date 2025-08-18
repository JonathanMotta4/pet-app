'use client'

import { useTheme } from 'next-themes'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

export function ModeToggle() {
	const { setTheme } = useTheme()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<Sun className='transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 size-5' />
					<Moon className='absolute transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 size-5' />
					<span className='sr-only'>Toggle Theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Claro
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Escuro
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					Sistema
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
