import { MobileSidebar } from './mobile-sidebar';
import { NavbarRoutes } from './navbar-routes';

export function Navbar() {
	return (
		<div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
			<MobileSidebar />
			<NavbarRoutes />
		</div>
	);
}
