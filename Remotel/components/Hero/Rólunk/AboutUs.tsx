import { useRouter } from "next/router";
import en from "../../../public/locales/en/About us/aboutus";
import hu from "../../../public/locales/hu/Rólunk/aboutus";
import useLoading from "../../../common/hook/useLoad";
import { Transition } from "@headlessui/react";
import React from "react";

const AboutUs: React.FC = () => {
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
    <section
      className="min-h-[50%] bg-[#2F2A45] p-4 text-white sm:min-h-[35rem] xl:min-h-[45rem]"
      id={t.aboutusid}
    >
      <Transition
        show={transition}
        enter="transition duration-500 ease-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
        className="flex flex-col items-center justify-center"
        as="div"
      >
        <h2 className="my-8 select-none text-[8vw] font-[700] sm:text-[6vw] md:mt-16 lg:text-[5vw] xl:text-[4vw] 2xl:text-[3.5vw]">
          {t.aboutusheader}
        </h2>
        <p className="mx-4 mb-10 text-justify text-[3vw] md:max-w-[60%] md:text-[2.5vw] lg:text-[2.25vw] xl:text-[2vw] 2xl:text-[1.75vw]">
          {/* Ide kell majd a szöveg */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Transition>
    </section>
  );
};

export default AboutUs;
