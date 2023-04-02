import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useLoading from "../../../../common/hooks/useLoad";
const Carousel = dynamic(() => import("./Carousel"));
import en from "../../../../public/locales/en/Services/services";
import hu from "../../../../public/locales/hu/Szolgáltatások/services";
import React from "react";
import { Transition } from "@headlessui/react";

const MobileTeam: React.FC = () => {
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
    <div className="relative min-h-[55em] md:hidden">
      {/* Lekerekített rész */}
      <svg
        className="absolute -translate-y-[53.5%] transform sm:-translate-y-[55%] lg:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 634 242"
        fill="none"
      >
        <path
          d="M434 0.769464C319.34 -3.65471 100.833 8.50417 0 103.795V241.702H633.5V25.8206C544.861 12.0827 473.775 2.3042 434 0.769464Z"
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
        {/* Szolgáltatások fejléce */}
        <h2 className="mb-4 mt-12 text-center text-[8vw] font-[700] sm:text-[5vw]">
          {t.servicesh2}
        </h2>
        <p className="mx-4 mb-20 text-center text-[3.5vw] font-[400] sm:text-[2vw]">
          {t.servicesp}
        </p>
        {/* Szolgáltatások */}
        <Carousel />
      </Transition>
    </div>
  );
};

export default MobileTeam;
