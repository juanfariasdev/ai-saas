'use client';
import { findTool } from '@/lib/tools';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const Heading = () => {
	const pathname = usePathname();

	const info = findTool(pathname);
	if (!info) return null;

	const { label, description, icon } = info;

	return (
		<div className="flex items-center gap-x-3 mb-8">
			<div className={cn('p-2 w-fit rounded-md', icon.background)}>
				<icon.image className={cn('w-10 h-10', icon.color)} />
			</div>
			<div>
				<h2 className="text-3xl font-bold">{label}</h2>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
		</div>
	);
};
