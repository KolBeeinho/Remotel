import Image from "next/image";
type Props = {
  src: string;
  h2: string;
  text: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  id: string;
};

const Szolgaltatasok: React.FC<Props> = ({ src, h2, text, onClick, id }) => {
  return (
    <>
      <div
        className="servicebg mb-10 min-h-fit cursor-pointer select-none rounded-2xl p-4 py-8 md:mt-12 md:w-[20%]"
        onClick={onClick}
        id={id}
      >
        {/* 768px felett */}
        <div className="flex flex-col">
          <Image
            src={"/" + src}
            height={150}
            width={150}
            draggable={false}
            objectFit={"contain"}
            quality={100}
          />
        </div>
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="mb-1 font-[700] md:text-[3.5vw] lg:text-[3vw] xl:text-[2.5vw] 2xl:text-[2vw]">
            {h2}
          </h2>
          <p className="max-w-[90%] md:text-[4vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};
export default Szolgaltatasok;
