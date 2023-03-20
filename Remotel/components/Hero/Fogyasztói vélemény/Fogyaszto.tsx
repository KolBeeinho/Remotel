import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import en from "../../../public/locales/en/Reviews/reviewsection";
import en2 from "../../../public/locales/en/Reviews/reviews";
import hu from "../../../public/locales/hu/Vélemények/reviewsection";
import hu2 from "../../../public/locales/hu/Vélemények/reviews";
const Velemenyek = dynamic(() => import("./Velemenyek"));
const MobileFogyaszto = dynamic(() => import("./handheld/MobileFogyaszto"));
import useLoading from "../../../common/hook/useLoad";
import { Transition } from "@headlessui/react";

const Fogyaszto: React.FC = () => {
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
      className="relative text-[#2F2A45] lg:min-h-[60rem]"
      id={t.ratingsid}
    >
      {/* Háttérkép */}
      <div className="absolute inset-0 -z-10 select-none">
        <Image
          src="/images/feedback.jpg"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      {/* Mobilos */}
      <MobileFogyaszto />
      <div className="hidden lg:block">
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
          <h2 className="mt-16 mb-2 select-none text-center text-[5vw] font-[700] xl:text-[4vw] 2xl:text-[3.5vw]">
            {t.ratingsheader}
          </h2>
          <div className="mb-8 select-none text-center font-[400] md:text-[3vw] lg:mb-0 lg:px-6 xl:text-[1.5vw]">
            {t.ratingstext}
          </div>
          {/* Gépen */}
          <div className="mt-16 flex max-w-[60%] items-center justify-evenly space-x-8 md:mt-32">
            {v.map((item) => (
              <React.Fragment key={item.id}>
                <Velemenyek
                  src={item.src}
                  text={item.text}
                  person={item.person}
                />
              </React.Fragment>
            ))}
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Fogyaszto;
