import { Heading } from "./_components/heading";

const AiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full py-3 px-3 lg:px-3">
        <Heading />

        <div>
        {children}
        </div>
            
  
    </div>
  );
};

export default AiLayout;
