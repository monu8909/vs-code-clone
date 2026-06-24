import { X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

const Editor = ({
  openFiles,
  language,
  theme,
  activeFile,
  setActiveFile,
  setOpenFiles,
}: {
  openFiles: any[];
  language: string;
  theme: string;
  activeFile: any;
  setActiveFile: (id: string) => void;
  setOpenFiles: Dispatch<SetStateAction<any[]>>;
}) => {
  const closeFile = (id: string) => {
    setOpenFiles((prev) => {
      const updated = prev.filter((f) => f.id !== id);

      if (activeFile === id && updated.length) {
        setActiveFile(updated[updated.length - 1].id);
      }

      return updated;
    });
  };
  return (
    <div className="flex bg-zinc-900 border-b border-zinc-800 forScrollbar ">
      {openFiles.map((file) => (
        <div
          key={file.id}
          onClick={() => setActiveFile(file.id)}
          className={`group flex items-center gap-2 px-4 py-2 cursor-pointer border-r border-zinc-800
        ${
          activeFile === file.id
            ? "bg-zinc-800 text-white border-b-2 border-cyan-500"
            : "bg-zinc-900 text-zinc-400"
        }`}
        >
          <span>{file.name}</span>

          <X
            size={14}
            className="opacity-0 group-hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              closeFile(file.id);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Editor;
