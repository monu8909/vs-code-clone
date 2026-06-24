import Editor from "@monaco-editor/react";

export default function CodeEditor({
  openFiles,
  activeFileId,
  setActiveFileId,
  setOpenFiles,
}: {
  openFiles: any[];
  activeFileId: string;
  setActiveFileId: (id: string) => void;
  setOpenFiles: (files: any[]) => void;
}) {
  const activeFile = openFiles.find((file) => file.id === activeFileId);

  return (
    <Editor
      height="100vh"
      defaultLanguage=""
      value={activeFile ? activeFile.content : ""}
      theme="vs-dark"
      width="100%"
    />
  );
}
