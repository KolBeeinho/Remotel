import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
type Props = {
  h2: string;
  extendedText1: string;
  extendedText2: string;
};

const Szolgaltatasplusinfo: React.FC<Props> = ({
  h2,
  extendedText1,
  extendedText2,
}) => {
  const [isX, setisX] = React.useState<boolean>(false);
  const handleClose = () => {
    setisX(!isX);
  };
  return isX ? null : (
    <div className="lightservicebg absolute inset-0 mx-auto max-h-[25rem] max-w-[55%] select-none flex-col space-y-4 p-2 transition-all">
      <XMarkIcon
        className="absolute top-8 right-8 h-10 w-10 cursor-pointer text-white"
        onClick={handleClose}
      />
      <h2 className="pt-12 text-center text-[5.5vw] font-extrabold sm:text-[4.5vw] lg:text-[4vw] xl:text-[3.5vw] 2xl:text-[3vw]">
        {h2}
      </h2>
      <div className="flex flex-col items-center gap-12 px-2 text-center text-[3.5vw] font-[200] sm:text-[3vw] md:text-[2.5vw]">
        <p>{extendedText1}</p>
        <p>{extendedText2}</p>
      </div>
    </div>
  );
};

export default Szolgaltatasplusinfo;
