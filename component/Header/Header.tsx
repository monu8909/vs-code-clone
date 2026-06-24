"use client";

import {
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  PanelLeft,
  PanelRight,
  Minus,
  Square,
  X,
} from "lucide-react";
import TopMenu from "../../component/TopMenu";
export default function Header({
  openFolder,
}: {
  openFolder: () => Promise<void>;
}) {
  return (
    <header className="h-10 bg-[#181818] border-b border-zinc-800 w-full flex items-center justify-between px-3 absolute top-0 left-0 z-9000">
      <TopMenu openFolder={openFolder} />
      {/* Left */}
      {/* Center */}
      <div className="max-w-4xl w-full flex items-center gap-2">
        <div className="flex items-center gap-3">
          <ArrowLeft
            size={18}
            className="cursor-pointer text-zinc-400 hover:text-white"
          />

          <ArrowRight
            size={18}
            className="cursor-pointer text-zinc-400 hover:text-white"
          />
        </div>
        <div className="h-7 w-full rounded-md border border-cyan-700 bg-[#1e1e1e] flex items-center px-3">
          <input
            placeholder="codepilot"
            className="w-full bg-transparent outline-none text-sm text-zinc-200"
          />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center gap-4 pl-2">
        <LayoutGrid
          size={16}
          className="cursor-pointer text-zinc-400 hover:text-white"
        />

        <PanelLeft
          size={16}
          className="cursor-pointer text-zinc-400 hover:text-white"
        />

        <PanelRight
          size={16}
          className="cursor-pointer text-zinc-400 hover:text-white"
        />

        <div className="w-px h-5 bg-zinc-700" />

        <Minus
          size={16}
          className="cursor-pointer text-zinc-400 hover:text-white"
        />

        <Square
          size={14}
          className="cursor-pointer text-zinc-400 hover:text-white"
        />

        <X
          size={16}
          className="cursor-pointer text-zinc-400 hover:text-red-500"
        />
      </div>
    </header>
  );
}
