import { Navbar } from './_components/navbar';
import { Sidebar } from './_components/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full reative">
			<div className="hidden h-full md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 z-[80]">
				<Sidebar />
			</div>
			<main className="md:pl-60">
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
