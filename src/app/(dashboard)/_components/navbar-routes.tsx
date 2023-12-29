'use client';

import { UserButton } from '@clerk/nextjs';

export function NavbarRoutes() {

	return (
		<div className="flex gap-x-2 ml-auto">
			
			<UserButton afterSignOutUrl="/" />
		</div>
	);
}
