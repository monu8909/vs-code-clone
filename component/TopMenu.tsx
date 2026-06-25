"use client";

import { VscVscode } from "react-icons/vsc";
import { menuConfig } from "./../jsonFiles/StaticData";
import { useDispatch } from "react-redux";
import { executeCommand } from "../store/menuSlice";

interface TopMenuProps {
  openFolder: () => Promise<void>;
}

export default function TopMenu({ openFolder }: TopMenuProps) {
  const dispatch = useDispatch();

  return (
    <div className="h-8 bg-[#181818] flex items-center px-1 text-[#cccccc] text-sm border-b border-[#2d2d2d]">
      {/* Logo */}
      <div className="mr-4">
        <VscVscode className="text-[#007ACC]" size={20} />
      </div>

      {/* Menu Items */}
      <div className="flex items-center gap-3">
        {menuConfig?.map((menu) => (
          <ul
            key={menu.label}
            className="group hover:bg-[#2a2d2e] cursor-pointer px-1 py-0.5 rounded relative list-none"
          >
            {menu.label}

            {menu?.items && (
              <div className="absolute left-0 top-full hidden group-hover:block min-w-55 bg-[#1e1e1e] border border-[#2d2d2d] rounded shadow-lg py-1 z-50">
                {menu?.items.map((child) => (
                  <li
                    key={child?.shortcut}
                    onClick={() => {
                      if (child?.action) {
                        if (child.action === "OPEN_FOLDER") {
                          void openFolder();
                        }
                        dispatch(executeCommand(child.action));
                      }
                    }}
                    className="list-none px-3 py-1 hover:bg-[#2a2d2e] flex justify-between"
                  >
                    <span>{child.label}</span>
                  </li>
                ))}
              </div>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}
