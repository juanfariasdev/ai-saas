import { Button } from '@/components/ui/button';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';

export default async function LandingPage() {
	const user = await currentUser();
	return (
		<div>
			Public route
			{!user ? (
				<div>
					<Link href="/sign-in">
						<Button>Login</Button>
					</Link>
					<Link href="/sign-up">
						<Button>Register</Button>
					</Link>
				</div>
			) : (
				<div>
					<Link href="/dashboard">
						<Button>Dashboard</Button>
					</Link>
				</div>
			)}
		</div>
	);
}
