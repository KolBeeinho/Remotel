import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
const Velemenyek = dynamic(() => import("../Velemenyek"));
import en from "../../../../public/locales/en/Reviews/reviewsection";
import en2 from "../../../../public/locales/en/Reviews/reviews";
import hu from "../../../../public/locales/hu/Vélemények/reviewsection";
import hu2 from "../../../../public/locales/hu/Vélemények/reviews";
import { Transition } from "@headlessui/react";
import useLoading from "../../../../common/hooks/useLoad";
const MobileFogyaszto: React.FC = () => {
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
    <div className="relative text-[#2F2A45] lg:hidden">
      <div className="absolute inset-0 -z-10 select-none">
        <Image
          src="/images/feedback.jpg"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <Transition
        show={transition}
        enter="transition duration-500 ease-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-100 ease-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
        className="pt-20 lg:hidden"
        as="div"
      >
        <h2 className="mb-2 text-center text-[8vw] font-[700] sm:text-[6vw]">
          {t.ratingsheader}
        </h2>
        <div className="mb-8 text-center text-[3.5vw] font-[400] lg:text-[4vw]">
          {t.ratingstext}
        </div>
        <div className="mt-10 flex min-h-fit space-x-8 overflow-x-scroll p-4 pl-20 pb-32 lg:hidden">
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
  );
};

export default MobileFogyaszto;
