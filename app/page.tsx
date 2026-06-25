"use client";
import { useState, useEffect } from "react";
import CodeEditor from "../component/Editor/CodeEditor";
import Sidebar from "../component/Sidebar/Sidebar";
import Header from "../component/Header/Header";
import Editor from "../component/Header/Editor";
import { useDispatch, useSelector } from "react-redux";
import { commandExecutor } from "../services/commandExecutor";

type TreeNode = {
  name: string;
  type: "file" | "folder";
  handle?: FileSystemDirectoryHandle | FileSystemFileHandle;
  children?: TreeNode[];
  loaded?: boolean;
};
type OpenFile = {
  id: string;
  name: string;
  content: string;
  language: string;
};
export default function Home() {
  const dispatch = useDispatch();
  const [fileTree, setFileTree] = useState<TreeNode[]>([]);
  const [isOpening, setIsOpening] = useState(false);
  const [openFiles, setOpenFiles] = useState<OpenFile[]>([]);
  const [activeFileId, setActiveFileId] = useState("");

  const selectedCommand = useSelector(
    (state: any) => state.menu.selectedCommand,
  );

  useEffect(() => {
    if (!selectedCommand) return;

    commandExecutor(selectedCommand, dispatch, openFolder);
  }, [selectedCommand]);
  const readRootDirectory = async (
    dirHandle: FileSystemDirectoryHandle,
  ): Promise<TreeNode[]> => {
    const items: TreeNode[] = [];
    const iterator =
      (dirHandle as any).values?.() ?? (dirHandle as any).entries?.();

    if (!iterator) {
      return items;
    }

    for await (const entry of iterator) {
      const handle = Array.isArray(entry) ? entry[1] : entry;

      items.push({
        name: handle.name,
        type: handle.kind === "directory" ? "folder" : "file",
        handle,
        loaded: false,
      });
    }

    return items;
  };

  const openFolder = async () => {
    if (isOpening) return;

    try {
      setIsOpening(true);
      const dirHandle = await (window as any).showDirectoryPicker();

      const tree = await readRootDirectory(dirHandle);
      console.log("tree90---->", tree);

      setFileTree(tree);
    } catch (error) {
      console.error(error);
    } finally {
      setIsOpening(false);
    }
  };
  const openFile = async (fileHandle: FileSystemFileHandle) => {
    const file = await fileHandle.getFile();
    const content = await file.text();
    const fileName = fileHandle.name;
    const id = fileName;

    setOpenFiles((prev) => {
      const exists = prev.find((f) => f.id === id);

      if (exists) return prev;

      return [
        ...prev,
        {
          id,
          name: fileName,
          content,
          language: "typescript",
        },
      ];
    });

    setActiveFileId(id);
  };
  return (
    <main className="flex w-full flex-col items-center justify-between px-0 bg-white dark:bg-black sm:items-start">
      <Header openFolder={openFolder} />
      <div className="flex w-full h-[91vh] items-start pt-[40px]">
        <Sidebar fileTree={fileTree} openFile={openFile} />
        <div className="h-full w-[75%]">
          <Editor
            openFiles={openFiles}
            language={
              openFiles.find((file) => file.id === activeFileId)?.language ||
              "typescript"
            }
            activeFile={activeFileId}
            setActiveFile={setActiveFileId}
            setOpenFiles={setOpenFiles}
            theme="vs-dark"
          />
          <div className="flex-1 h-full">
            <CodeEditor
              openFiles={openFiles}
              activeFileId={activeFileId}
              setActiveFileId={setActiveFileId}
              setOpenFiles={setOpenFiles}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
