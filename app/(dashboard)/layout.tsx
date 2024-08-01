import { UserButton } from "@clerk/nextjs";
import { FC, PropsWithChildren } from "react";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full">
        <aside className="w-80 bg-gray-800 h-full border-white/10 text-white">
          Diaryboard
        </aside>
        <div className="flex-1">
          <header className="h-16 border-b border-white/10">
            <div className="h-full w-full px-6 flex items-center justify-between">
              <h1 className="text-xl">Welcome to your dashboard</h1>
              <UserButton />
            </div>
          </header>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
