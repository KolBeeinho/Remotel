import { useRouter } from "next/router";
import React from "react";
import useLoading from "../../../common/hooks/useLoad";
import en from "../../../public/locales/en/Home/home";
import hu from "../../../public/locales/hu/Kezdőlap/home";
import { Transition } from "@headlessui/react";
const Home: React.FC = () => {
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
  return (
    <section className="ml-[3.5vw] min-h-[55rem] pt-8 sm:min-h-[60rem] md:pt-0 2xl:min-h-[80rem]">
      {/* Home tab */}
      <Transition
        show={transition}
        enter="transition duration-300 ease-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-300 ease-in-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-100"
        className="relative mr-4 flex items-center"
        as="div"
      >
        <div className="blurtab relative z-0 mt-32 flex max-h-[30em] max-w-[50%] select-none flex-col space-y-4 p-4 font-[800] text-[#2F2A45] sm:max-h-[50em] md:mt-[8em] md:max-w-[40%] lg:max-w-[35%] xl:max-w-[30%] 2xl:max-w-[21%]">
          <h1 className="mt-6 text-[5vw] font-[800] sm:text-[4.5vw] md:mx-6 md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw] 2xl:text-[2vw]">
            {t.homeh1}
          </h1>
          <h2 className="pb-24 text-[3.5vw] font-[400] sm:pb-32 sm:text-[3vw] md:mx-8 md:pb-40 md:text-[2.5vw] xl:text-[1.4vw]">
            {t.homep}
          </h2>
          <a
            className="btn absolute bottom-7 right-1 mr-4 rounded-[34px] bg-[#EE2449] px-4 py-2 text-[3.5vw] font-bold tracking-wider text-white transition duration-300 sm:text-[3vw] md:right-4 md:text-[2.5vw] lg:text-[2.25vw]
          xl:px-8 xl:text-[1.75vw] 2xl:text-[1.25vw]"
            href="#kapcsolat"
            aria-label={t.homea}
          >
            {t.homea}
          </a>
        </div>
      </Transition>
    </section>
  );
};
export default Home;
