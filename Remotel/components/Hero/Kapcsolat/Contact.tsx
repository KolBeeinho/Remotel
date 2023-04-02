import Image from "next/image";
import React from "react";
import en from "../../../public/locales/en/Contact/contact";
import hu from "../../../public/locales/hu/Kapcsolat/contact";
import { useRouter } from "next/router";
import useLoading from "../../../common/hooks/useLoad";
import { Transition } from "@headlessui/react";

const Contact: React.FC = () => {
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
      className="relative text-[#2F2A45] md:pb-8 lg:pb-12 xl:pb-16"
      id="kapcsolat"
    >
      {/* Háttérkép */}
      <div className="absolute inset-0 -z-10">
        <Image src="/images/contact.jpg" layout="fill" objectFit="cover" />
      </div>
      <Transition
        show={transition}
        enter="transition duration-500 ease-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
        as="div"
      >
        <h2 className="mb-10 select-none pt-10 text-center text-[8vw] font-[700] sm:text-[6vw] md:pt-16 lg:text-[5vw] xl:text-[4vw] 2xl:text-[3.5vw]">
          {t.contacth2}
        </h2>
        <div className="blurtab mx-auto flex min-h-[30rem] max-w-[90%] select-none flex-col sm:max-w-[75%] md:flex-row lg:max-w-[65%] xl:max-w-[60%] 2xl:max-w-[50%]">
          <div className="flex flex-col gap-[0.3em] px-6 pt-6 text-[1.5rem] md:ml-4 md:p-6">
            <h3 className="px-2 text-[2rem] font-[800] sm:text-[1.8rem] md:text-[2.5rem]">
              {t.contacth3}
            </h3>
            <p className="px-2 text-[1.6rem] sm:text-[1.5rem] md:mb-8 md:text-[1.4rem]">
              {t.contactp}
            </p>
            <h4 className="px-2 text-[1.75rem] font-[700] sm:text-[1.6rem] md:text-[1.5rem]">
              {t.contacth4}
            </h4>
            <a
              className="mt-2 flex whitespace-nowrap px-2 pb-4 text-[1.4rem] font-bold text-[#EE2449] underline sm:whitespace-normal md:text-[1.3rem]"
              href="tel:+365011213124"
            >
              +36 30/000 0000&nbsp;
            </a>
            <h4 className="px-2 text-[1.75rem] font-[700] sm:text-[1.6rem] md:text-[1.5rem]">
              Email
            </h4>
            <a
              className="mt-2 flex whitespace-nowrap px-2 pb-2 text-[1.4rem] font-bold text-[#EE2449] underline sm:whitespace-normal md:text-[1.3rem]"
              href="mailto:boditimi@gmail.com"
            >
              boditimi@gmail.com
            </a>
          </div>
          <div className="relative flex w-full items-center px-4 md:mr-10 md:px-0">
            <Image
              src="/images/szoba.png"
              alt="szoba"
              draggable={false}
              objectFit="contain"
              width={350}
              height={350}
            />
          </div>
        </div>
      </Transition>
    </section>
  );
};

export default Contact;
