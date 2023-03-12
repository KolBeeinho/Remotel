import dynamic from "next/dynamic";
import React from "react";
const Szolgaltatasok = dynamic(() => import("./Szolgaltatasok"));
import { szolgaltatas } from "./Szolgaltatasinfo";
const MobileServices = dynamic(() => import("./Handheld/MobileServices"));
const ServicesHeader = dynamic(() => import("./ServicesHeader"));
const Szolgaltatasplusinfo = dynamic(() => import("./Szolgaltatasplusinfo"));

const Services: React.FC = () => {
  const [open, setOpen] = React.useState<string>("");
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.id);
    setOpen(e.currentTarget.id);
  };
  return (
    <section className="min-h-[50rem] bg-[#2F2A45] pb-20 text-white">
      <MobileServices />
      <div className="hidden lg:block" id="szolgaltatas">
        {/* Lekerekített rész */}
        <svg
          className="absolute hidden -translate-y-[52.5%] transform lg:block"
          width="100%"
          height="100%"
          viewBox="0 0 1440 243"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M433.5 1.49981C318.84 -2.92437 100.333 9.23452 -0.5 104.525V242.432H1440.5V138.826C1128 119.865 576.994 7.03656 433.5 1.49981Z"
            fill="#2F2A45"
          />
        </svg>
        <ServicesHeader />
        {/* Szolgáltatások */}
        <div className="flex flex-col space-x-3 md:flex-row md:justify-center">
          {szolgaltatas.map((item) => (
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
        {szolgaltatas.map((item) => (
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
      </div>
    </section>
  );
};

export default Services;
