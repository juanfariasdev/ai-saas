import { tools } from "@/lib/tools";
import { CardTool } from "../../../_components/card-tool";

const DashboardPage = () => {
  return (
    <div>
      <div className="my-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Expirience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => {
          if(tool.isTool)
          return (
          <CardTool
            key={tool.href}
            color={tool.color}
            href={tool.href}
            icon={tool.icon}
            label={tool.label}
          />
        )})}
      </div>
    </div>
  );
};

export default DashboardPage;
