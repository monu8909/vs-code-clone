"use client";

import { VscVscode } from "react-icons/vsc";
import { menuConfig } from "./../jsonFiles/StaticData";

export default function TopMenu({
  openFolder,
}: {
  openFolder: () => Promise<void>;
}) {
  const handleMenuAction = (action: string) => {
    // switch (action) {
    //   case "openFolder":
    //     openFolder();
    //     break;
    //   case "saveFile":
    //     saveCurrentFile();
    //     break;
    //   case "newTerminal":
    //     setTerminalOpen(true);
    //     break;
    //   case "toggleExplorer":
    //     setExplorerOpen((prev) => !prev);
    //     break;
    //   case "commandPalette":
    //     setCommandPaletteOpen(true);
    //     break;
    //   default:
    //     console.log(action);
    // }
  };
  return (
    <div className="h-8 bg-[#181818] flex items-center px-1 text-[#cccccc] text-sm border-b border-[#2d2d2d]">
      {/* Logo */}
      <div className="mr-4">
        <VscVscode className="text-[#007ACC]" size={20} />
      </div>

      {/* Menu Items */}
      <div className="flex items-center gap-3">
        {menuConfig?.map((menu) => (
          <div>
            <ul
              key={menu.label}
              className="group hover:bg-[#2a2d2e] cursor-pointer px-1 py-0.5 rounded relative list-none"
            >
              {menu.label}

              {menu?.items && (
                <div className="absolute left-0 top-full hidden group-hover:block min-w-55 bg-[#1e1e1e] border border-[#2d2d2d] rounded shadow-lg py-1 z-50">
                  {menu.items.map((child) => (
                    <li
                      key={child.label}
                      className="list-none px-3 py-1 hover:bg-[#2a2d2e] flex justify-between"
                    >
                      <span>{child.label}</span>

                      {child.shortcut && (
                        <span className="text-xs text-gray-400">
                          {child.shortcut}
                        </span>
                      )}
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
