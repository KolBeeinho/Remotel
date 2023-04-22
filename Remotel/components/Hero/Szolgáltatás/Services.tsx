import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/router";
const Szolgaltatasok = dynamic(() => import("./Szolgaltatasok"));
const MobileServices = dynamic(() => import("./Handheld/MobileServices"));
const Szolgaltatasplusinfo = dynamic(() => import("./Szolgaltatasplusinfo"));
import en from "../../../public/locales/en/Services/services";
import en2 from "../../../public/locales/en/Services/servicestab";
import hu from "../../../public/locales/hu/Szolgáltatások/services";
import hu2 from "../../../public/locales/hu/Szolgáltatások/servicestab";
import useLoading from "../../../common/hooks/useLoad";
import { Transition } from "@headlessui/react";

const Services: React.FC = () => {
  const [open, setOpen] = React.useState<string>("");
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(e.currentTarget.id);
  };
  const { locale } = useRouter();
  const t = locale === "hu" ? hu : en;
  const v = locale === "hu" ? hu2 : en2;
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
      className="bg-[#2F2A45] text-white md:pb-20 lg:min-h-[50rem]"
      id={t.servicesid}
    >
      <MobileServices />
      <div className="relative hidden md:block">
        {/* Lekerekített rész */}
        <svg
          className="absolute top-0 z-[-1] hidden -translate-y-[80%] transform md:block"
          width="100%"
          viewBox="0 0 1440 243"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M433.5 1.49981C318.84 -2.92437 100.333 9.23452 -0.5 104.525V242.432H1440.5V138.826C1128 119.865 576.994 7.03656 433.5 1.49981Z"
            fill="#2F2A45"
          />
        </svg>
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
          <h2 className="mb-4 select-none text-center text-[5vw] font-[700] lg:mt-8 xl:text-[4vw] 2xl:text-[3.5vw]">
            {t.servicesh2}
          </h2>
          <div className="mb-20 select-none text-center text-[2.5vw] font-[400] xl:text-[2vw] 2xl:text-[1.5vw]">
            {t.servicesp}
          </div>
          {/* Szolgáltatások */}
          <div className="flex flex-col space-x-3 md:flex-row md:justify-center">
            {v.map((item) => (
              <React.Fragment key={item.id}>
                <Szolgaltatasok
                  src={item.src}
                  h2={item.h2}
                  text={item.text}
                  id={item.id}
                  onClick={(e) => handleOpen(e)}
                />
              </React.Fragment>
            ))}
          </div>
          {/* Az alsó kiegészítő rész */}
          {v.map((item) => (
            <React.Fragment key={item.id}>
              {open === item.id && (
                <Szolgaltatasplusinfo
                  h2={item.h2}
                  extendedText1={item.extendedText1}
                  extendedText2={item.extendedText2}
                />
              )}
            </React.Fragment>
          ))}
        </Transition>
      </div>
    </section>
  );
};

export default Services;
