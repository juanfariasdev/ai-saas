'use client';

import { tools } from '@/lib/tools';
import { SidebarItem } from './sidebar-item';

export function SidebarRoutes() {
	const routes = tools;
	return (
		<div className="flex flex-col w-full gap-1">
			{routes.map((route) => (
				<SidebarItem
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	);
}
