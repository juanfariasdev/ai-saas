'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function NavbarRoutes() {
	const patchname = usePathname();

	const isTeacherPage = patchname?.startsWith('/teacher');
	const isPlayerPage = patchname?.includes('/chapter');

	return (
		<div className="flex gap-x-2 ml-auto">
			{isTeacherPage || isPlayerPage ? (
				<Link href="/">
					<Button size="sm" variant="ghost">
						<LogOut className="h-4 w-4 mr-2" />
						Exit
					</Button>
				</Link>
			) : (
				<Link href="/teacher/courses">
					<Button size="sm" variant="ghost">
						Teacher Mode
					</Button>
				</Link>
			)}
			<UserButton afterSignOutUrl="/" />
		</div>
	);
}
