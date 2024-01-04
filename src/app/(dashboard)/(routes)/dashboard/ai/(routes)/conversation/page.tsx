import { CardTool } from "@/app/(dashboard)/_components/card-tool";
import { IToolsProps } from "@/lib/tools";
import {
  BadgeDollarSign,
  BookHeart,
  BookOpenCheck,
  BookText,
  Lightbulb,
  Mic2,
} from "lucide-react";

interface IConversationProps extends IToolsProps {
  group: "Marketing" | "Product" | "Management" | "Other";
}

const ConversationsAiPage = () => {
  const conversations: IConversationProps[] = [
    {
      label: "Pitch Analyser",
      description: "Have your pitch evaluated and explained.",
      group: "Marketing",
      href: "/dashboard/ai/conversation/pitchAnalyser",
      icon: {
        image: Mic2,
        color: "text-red-500",
        background: "bg-red-200",
      },
    },
    {
      label: "Post Maker",
      description: "Create content for your instagram",
      group: "Marketing",
      href: "/dashboard/ai/conversation/postMaker",
      icon: {
        image: BookHeart,
        color: "text-pink-500",
        background: "bg-pink-200",
      },
    },
    {
      label: "Book Summary",
      description:
        "A summary of key insights from books published through 2021 that you choose",
      group: "Marketing",
      href: "/dashboard/ai/conversation/bookSummary",
      icon: {
        image: BookOpenCheck,
        color: "text-blue-500",
        background: "bg-blue-200",
      },
    },
    {
      label: "Sales Letter",
      description: "Create a sales letter for your product",
      group: "Marketing",
      href: "/dashboard/ai/conversation/salesLetter",
      icon: {
        image: BadgeDollarSign,
        color: "text-yellow-600",
        background: "bg-yellow-200",
      },
    },
    {
      label: "Test Maker",
      description: "Describe your challenge and get test suggestions",
      group: "Marketing",
      href: "/dashboard/ai/conversation/testMaker",
      icon: {
        image: BookText,
        color: "text-green-500",
        background: "bg-green-200",
      },
    },
    {
      label: "The Big Idea",
      description:
        "Unlock your creativity with big idea ideas for your launches",
      group: "Marketing",
      href: "/dashboard/ai/conversation/bigIdea",
      icon: {
        image: Lightbulb,
        color: "text-white",
        background: "bg-zinc-800",
      },
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold">Marketing</h2>
      <div className="mt-2 flex flex-wrap gap-2">
        {conversations.map((conversation) => (
          <CardTool
            key={conversation.href}
            href={conversation.href}
            icon={conversation.icon}
            description={conversation.description}
            label={conversation.label}
            arrow={false}
            className="min-w-60 md:min-w-72 flex-1"
          />

          // <div
          //   key={conversation.label}
          //   className="flex gap-2 w-full max-w-72 rounded-md p-3"
          // >
          //   <div className="flex items-center">
          //     {<conversation.icon.image width={36} height={36} />}
          //   </div>
          //   <div className="h-full">
          //     <h3 className="font-bold">{conversation.label}</h3>
          //     <p className="h-full">{conversation.description}</p>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationsAiPage;
