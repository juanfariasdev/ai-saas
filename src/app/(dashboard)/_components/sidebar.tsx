import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export function Sidebar() {
  return (
    <div className="p-2 h-full flex flex-col overflow-y-auto shadow-sm bg-gray-900">
      <div className="p-6 flex justify-center">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}
