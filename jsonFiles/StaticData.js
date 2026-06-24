export const menuConfig = [
  {
    label: "File",
    items: [
      { label: "New File", shortcut: "Ctrl+N", action: "newFile" },
      { label: "New Window", shortcut: "Ctrl+Shift+N", action: "newWindow" },
      { divider: true },
      { label: "Open File...", shortcut: "Ctrl+O", action: "openFile" },
      {
        label: "Open Folder...",
        shortcut: "Ctrl+K Ctrl+O",
        action: "openFolder",
      },
      { divider: true },
      { label: "Save", shortcut: "Ctrl+S", action: "saveFile" },
      { label: "Save As...", shortcut: "Ctrl+Shift+S", action: "saveAs" },
      { divider: true },
      { label: "Exit", action: "exit" },
    ],
  },

  {
    label: "Edit",
    items: [
      { label: "Undo", shortcut: "Ctrl+Z", action: "undo" },
      { label: "Redo", shortcut: "Ctrl+Y", action: "redo" },
      { divider: true },
      { label: "Cut", shortcut: "Ctrl+X", action: "cut" },
      { label: "Copy", shortcut: "Ctrl+C", action: "copy" },
      { label: "Paste", shortcut: "Ctrl+V", action: "paste" },
      { divider: true },
      { label: "Find", shortcut: "Ctrl+F", action: "find" },
      { label: "Replace", shortcut: "Ctrl+H", action: "replace" },
    ],
  },

  {
    label: "Selection",
    items: [
      { label: "Select All", shortcut: "Ctrl+A", action: "selectAll" },
      { label: "Expand Selection", action: "expandSelection" },
      { label: "Shrink Selection", action: "shrinkSelection" },
    ],
  },

  {
    label: "View",
    items: [
      {
        label: "Command Palette",
        shortcut: "Ctrl+Shift+P",
        action: "commandPalette",
      },
      {
        label: "Appearance",
        children: [
          { label: "Dark Theme", action: "darkTheme" },
          { label: "Light Theme", action: "lightTheme" },
        ],
      },
      {
        label: "Explorer",
        shortcut: "Ctrl+Shift+E",
        action: "toggleExplorer",
      },
      {
        label: "Terminal",
        shortcut: "Ctrl+`",
        action: "toggleTerminal",
      },
    ],
  },

  {
    label: "Go",
    items: [
      { label: "Back", shortcut: "Alt+←", action: "goBack" },
      { label: "Forward", shortcut: "Alt+→", action: "goForward" },
      { divider: true },
      { label: "Go To File...", shortcut: "Ctrl+P", action: "goToFile" },
      { label: "Go To Line...", shortcut: "Ctrl+G", action: "goToLine" },
    ],
  },

  {
    label: "Run",
    items: [
      { label: "Start Debugging", shortcut: "F5", action: "startDebug" },
      {
        label: "Run Without Debugging",
        shortcut: "Ctrl+F5",
        action: "runWithoutDebug",
      },
      { divider: true },
      {
        label: "Toggle Breakpoint",
        shortcut: "F9",
        action: "toggleBreakpoint",
      },
    ],
  },

  {
    label: "Terminal",
    items: [
      {
        label: "New Terminal",
        shortcut: "Ctrl+Shift+`",
        action: "newTerminal",
      },
      {
        label: "Split Terminal",
        shortcut: "Ctrl+Shift+5",
        action: "splitTerminal",
      },
      { divider: true },
      { label: "Run Task...", action: "runTask" },
    ],
  },

  {
    label: "Help",
    items: [
      { label: "Welcome", action: "welcome" },
      { label: "Keyboard Shortcuts", action: "keyboardShortcuts" },
      { divider: true },
      { label: "About", action: "about" },
    ],
  },
];
