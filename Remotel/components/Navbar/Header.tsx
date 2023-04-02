import Image from "next/image";
import { useRouter } from "next/router";
import en from "../../public/locales/en/Header/Links";
import hu from "../../public/locales/hu/Header/Links";
import useLoading from "../../common/hooks/useLoad";
import { Transition } from "@headlessui/react";
import React from "react";
const Header: React.FC = () => {
  const { locale } = useRouter();
  const t = locale === "hu" ? hu : en;
  const { loading } = useLoading();
  const [transition, setTransition] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (loading) {
      setTransition(transition);
    } else {
      setTransition(!transition);
    }
  }, [loading]);
  const Router = useRouter();
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const locale = e.target.value;
    Router.push(Router.pathname, Router.asPath, { locale });
  };
  return (
    <div className="hidden h-[10rem] items-center justify-between p-4 md:flex">
      <ul className="ml-3 flex items-center lg:ml-10 xl:ml-16">
        <li className={`${locale === "hu" && "lg:mr-16"} mr-3 bg-transparent`}>
          <Image
            src={"/images/remotellogo.PNG"}
            height={100}
            width={200}
            alt="remotellogo"
            draggable={false}
            priority={true}
            objectFit="contain"
            onClick={() => Router.push("/")}
            className="cursor-pointer"
          />
        </li>
      </ul>
      <Transition
        show={transition}
        enter="transition duration-500 ease-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
        className="relative mr-4 flex items-center space-x-8 text-[#2F2A45] lg:mr-20 lg:space-x-12 xl:space-x-20"
        as="ul"
      >
        {t.map((item) => (
          <li
            className="tabanimation text-[2vw] font-[800] tracking-wide lg:text-[1.75vw] 2xl:text-[1.5vw]"
            key={item.id}
          >
            <a href={item.href} title={item.name} className="hover:underline">
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <label htmlFor="changeLanguage" />
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            name="changeLanguage"
            aria-label="changeLanguage"
            className="rounded-lg p-1 text-[2vw] focus-within:outline-none md:text-[1.75vw] lg:p-2 lg:text-[1.5vw] 2xl:text-[1.25vw]"
          >
            <option
              className="text-[1.1vw] text-gray-700 hover:bg-gray-100"
              value="en"
            >
              EN
            </option>
            <option
              className="text-[1.1vw] text-gray-700 hover:bg-gray-100"
              value="hu"
            >
              HU
            </option>
          </select>
        </li>
      </Transition>
    </div>
  );
};

export default Header;
