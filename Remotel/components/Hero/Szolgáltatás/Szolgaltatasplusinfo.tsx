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
  return (
    <div className="lightservicebg mx-auto mt-24 flex min-h-[25em] max-w-[55%] select-none flex-col space-y-4 px-[2px]">
      <h2 className="mb-6 mt-10 text-center text-[5.5vw] font-extrabold sm:text-[4.5vw] lg:text-[4vw] xl:text-[3.5vw] 2xl:text-[3vw]">
        {h2}
      </h2>
      <div className="flex flex-col items-center space-y-16 px-2 text-center">
        <div className="text-center text-[3.5vw] font-[200] sm:text-[3vw] md:text-[2.5vw]">
          {extendedText1}
        </div>
        <div className="text-center text-[3.5vw] font-[200] sm:text-[3vw] md:text-[2.5vw]">
          {extendedText2}
        </div>
      </div>
    </div>
  );
};

export default Szolgaltatasplusinfo;
