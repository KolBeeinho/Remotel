import React from "react";
import en from "../../public/locales/en/Header/Links";
import en2 from "../../public/locales/en/Services/servicestab";
import hu from "../../public/locales/hu/Header/Links";
import hu2 from "../../public/locales/hu/Szolgáltatások/servicestab";
import useOutsideClick from "./Sidebarclose";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Image from "next/image";
import ServicePopUp from "../Hero/Szolgáltatás/Handheld/ServicePopUp";
import usePopUp from "../../common/hooks/usePopUp";

const MobileHeader: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleSidebarButton = () => {
    setOpen(!open);
  };
  //Catch clicking
  const menuRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, () => {
    setOpen(false);
  });
  //Region
  const { locale } = useRouter();
  const Router = useRouter();
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const locale = e.currentTarget.value;
    Router.push(Router.pathname, Router.asPath, { locale });
  };
  const t = locale === "hu" ? hu : en;
  const v = locale === "hu" ? hu2 : en2;
  //When scrolling down, the logo disappears
  const [nav, setNav] = React.useState<boolean>(false);
  const scrollTop = () => {
    if (window.scrollY > 30 && typeof window !== undefined) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.onscroll = () => {
        scrollTop();
      };
    }
  }, [nav]);
  //Whenever the XMarkIcon is clicked in the child component, handleClose function is being passed to erase the event's currentTarget.id
  const { open: popup, setOpen: setOpenPopupId } = usePopUp();
  const handleClose = () => {
    setOpenPopupId("");
  };
  return (
    <div className="sticky inset-0 z-10 flex w-screen md:hidden">
      <nav
        className={`${
          open
            ? "fixed bottom-0 m-0 min-h-screen w-[75%] pt-10"
            : "h-screen w-0"
        } absolute inset-0 bg-[#2F2A45] pt-5 opacity-90 shadow-2xl shadow-[#544d70] duration-300`}
        ref={menuRef}
      >
        <div className="flex w-screen justify-between">
          <button onClick={handleSidebarButton}>
            {!open ? (
              <Bars3Icon className="ml-8 mt-2 h-10 w-10 font-[800] text-white shadow-2xl" />
            ) : (
              <XMarkIcon className="ml-8 mt-2 h-10 w-10 font-[800] text-white shadow-2xl" />
            )}
          </button>
          <div
            className={`${open && " blur-xl transition-all duration-100"} ${
              nav ? "opacity-0" : "opacity-100"
            } flex flex-col gap-2 transition-all duration-100`}
            onClick={() => Router.push("/")}
          >
            <Image
              src={"/images/remotelfav.PNG"}
              width={50}
              height={35}
              alt={"remotelfav"}
              objectFit="contain"
            />
            <Image
              src={"/images/remotellogo.PNG"}
              width={150}
              height={25}
              alt={"remotellogo"}
              objectFit="contain"
            />
          </div>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className={`${
              nav ? "opacity-60" : "opacity-100"
            } mr-6 self-center rounded-lg p-2 text-[3vw] transition-all duration-100 focus-within:outline-none`}
          >
            <option className="text-[3vw]" value="en">
              EN
            </option>
            <option className="text-[3vw]" value="hu">
              HU
            </option>
          </select>
        </div>
        <ul className="mt-[3em] overflow-hidden pl-4 text-2xl font-medium text-white">
          <li>
            {t.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <a
                    href={item.href}
                    className="font-Roboto mb-2 flex items-center py-2 px-6 text-lg font-[700]"
                  >
                    {item.name}
                  </a>
                </React.Fragment>
              );
            })}
          </li>
        </ul>
      </nav>
      {/* Plusz leírás */}
      {v.map((item) => (
        <React.Fragment key={item.id}>
          {popup === item.id && (
            <ServicePopUp
              h2={item.h2}
              extendedText1={item.extendedText1}
              extendedText2={item.extendedText2}
              onClose={handleClose}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileHeader;
