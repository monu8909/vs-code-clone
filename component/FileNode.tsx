"use client";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

interface TreeNodeProps {
  node: any;
  level?: number;
}
type TreeNode = {
  name: string;
  type: "file" | "folder";
  handle?: FileSystemDirectoryHandle | FileSystemFileHandle;
  children?: TreeNode[];
  loaded?: boolean;
};

export function FileNode({
  node,
  level = 0,
  openFile,
}: TreeNodeProps & {
  openFile: (fileHandler: FileSystemFileHandle) => Promise<void>;
}) {
  const [open, setOpen] = useState(level === 0 ? true : false);
  const [childNode, setChildNode] = useState<TreeNode[]>(
    node.children || node?.node,
  );

  const isFolder = node.type === "folder";
  console.log("level0----->", node?.node, isFolder, node.type);
  const loadChildren = async (folderHandle: FileSystemDirectoryHandle) => {
    const children: TreeNode[] = [];
    const iterator = (folderHandle as any).values?.() ?? (folderHandle as any).entries?.();

    if (!iterator) {
      return children;
    }

    for await (const entry of iterator) {
      const handle = Array.isArray(entry) ? entry[1] : entry;

      children.push({
        name: handle.name,
        type: handle.kind === "directory" ? "folder" : "file",
        handle,
        loaded: false,
      });
    }

    return children;
  };
  const handleExpand = async () => {
    console.log("node:", node);
    console.log("handle:", node.handle);

    if (node.type === "folder" && !node.loaded) {
      const children = await loadChildren(
        node.handle as FileSystemDirectoryHandle,
      );
      setChildNode(children); // update state
      // update state
    }

    setOpen(!open);
  };
  const handleClick = async () => {
    if (node.type === "file") {
      await openFile(node.handle as FileSystemFileHandle);
      return;
    }

    handleExpand();
  };
  return (
    <div>
      <div
        className="flex items-center gap-1 cursor-pointer py-1 hover:bg-zinc-800 rounded"
        style={{ paddingLeft: `${level * 12}px` }}
        onClick={handleClick}
      >
        {isFolder &&
          (open ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}

        <span>
          {isFolder ? "📁" : "📄"} {node.name}
        </span>
      </div>

      {open &&
        childNode?.map((child: any, index: number) => (
          <FileNode
            key={`${child.name}-${index}`}
            node={child}
            level={level + 1}
            openFile={openFile}
          />
        ))}
    </div>
  );
}
