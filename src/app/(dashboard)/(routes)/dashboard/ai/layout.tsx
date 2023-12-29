import { Heading } from "./_components/heading";

const AiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full py-3">
        <Heading />
        {children}
  
    </div>
  );
};

export default AiLayout;
