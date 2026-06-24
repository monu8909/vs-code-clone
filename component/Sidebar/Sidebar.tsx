"use client";

import { FolderOpen, Search, Bot, Settings } from "lucide-react";
import { FileNode } from "../FileNode";
export default function Sidebar({
  fileTree,
  openFile,
}: {
  fileTree: any[];
  openFile: (fileHandler: FileSystemFileHandle) => Promise<void>;
}) {
  return (
    <div className="flex h-screen show-scroll-hover">
      {/* Icon Rail */}
      <div className="w-14 bg-zinc-950 border-r border-zinc-800 flex flex-col items-center py-4 gap-6">
        <FolderOpen size={22} />
        <Search size={22} />
        <Bot size={22} />
        <Settings size={22} />
      </div>

      {/* Explorer */}
      <div className="w-72 bg-zinc-900 border-r border-zinc-800 p-4 overflow-auto">
        <h2 className="text-sm font-semibold mb-4">EXPLORER</h2>

        <div className="space-y-2 text-sm">
          {fileTree.length > 0 && (
            <FileNode
              node={{
                name: fileTree.length > 0 ? "root" : "No Folder/files",
                type: "folder",
                node: fileTree,
              }}
              openFile={openFile}
            />
          )}
        </div>
      </div>
    </div>
  );
}
