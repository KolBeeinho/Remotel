import React, { useState, useRef, Fragment } from "react";
import { links } from "./Links";
import useOutsideClick from "./Sidebarclose";
// import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileHeader: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleSidebarButton = () => {
    setOpen((open) => !open);
  };
  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, () => {
    setOpen(false);
  });
  return (
    <div className="sticky inset-0 z-50 flex w-screen md:hidden">
      <nav
        className={`${
          open
            ? "fixed bottom-0 m-0 min-h-screen w-[80%] p-5 pt-10"
            : "h-screen w-0"
        } absolute inset-0 bg-[#2F2A45] pt-5 opacity-[90%] shadow-2xl shadow-[#544d70] duration-300`}
        ref={menuRef}
      >
        <button onClick={handleSidebarButton}>
          {!open ? (
            <Bars3Icon className="ml-5 mt-2 h-10 w-10 font-[800] text-white shadow-2xl" />
          ) : (
            <XMarkIcon className="mt-2 ml-4 h-10 w-10 font-[800] text-white shadow-2xl" />
          )}
        </button>
        <ul
          className={`mt-[8vw] flex flex-col space-y-[140vw] overflow-hidden text-xl font-medium text-white`}
        >
          <li>
            {links.map((item) => {
              return (
                <Fragment key={item.id}>
                  <a
                    href={item.href}
                    className="font-Roboto mb-2 flex items-center border-none py-2 px-4 text-xl"
                  >
                    <em className="font-Roboto font-[700]">{item.name}</em>
                  </a>
                </Fragment>
              );
            })}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
