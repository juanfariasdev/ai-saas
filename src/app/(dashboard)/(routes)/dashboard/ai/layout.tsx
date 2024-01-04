import { Heading } from './_components/heading';

const AiLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full p-3 lg:p-5">
			<Heading />

			<div>{children}</div>
		</div>
	);
};

export default AiLayout;
