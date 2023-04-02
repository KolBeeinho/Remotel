import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  h2: string;
  extendedText1: string;
  extendedText2: string;
  onClose: () => void;
};

const ServicePopUp: React.FC<Props> = ({
  h2,
  extendedText1,
  extendedText2,
  onClose,
}) => {
  const [isX, setisX] = React.useState<boolean>(false);
  const handleClose = () => {
    setisX(!isX);
    onClose();
  };
  return isX ? null : (
    <>
      <div className="absolute inset-0 grid min-h-screen">
        <div className="lightservicebg popup flex select-none flex-col pt-10 text-white opacity-90 transition-all">
          <XMarkIcon
            className="absolute top-12 right-6 h-8 w-8 text-white"
            onClick={handleClose}
          />
          <h2 className="mb-6 mt-10 text-center text-[5.5vw] font-extrabold sm:text-[4.5vw] lg:text-[4vw] xl:text-[3.5vw] 2xl:text-[3vw]">
            {h2}
          </h2>
          <div className="flex flex-col items-center space-y-16 text-center text-[3.5vw] font-[200] sm:text-[3vw] md:text-[2.5vw]">
            <p>{extendedText1}</p>
            <p>{extendedText2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePopUp;
