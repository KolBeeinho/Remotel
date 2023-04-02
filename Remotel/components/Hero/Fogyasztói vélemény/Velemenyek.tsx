import Image from "next/image";

type Props = {
  src: string;
  text: string;
  person: string;
};

const Velemenyek: React.FC<Props> = ({ src, text, person }) => {
  return (
    <section className="blurtab flex flex-col p-6 xl:pb-10">
      <div className="grid min-w-[35vw] grid-flow-col grid-cols-4 items-center justify-items-start space-x-8 px-4 pt-2 text-[4vw] font-[800] lg:ml-4 lg:min-w-min lg:max-w-[70%] lg:grid-cols-3 lg:space-x-8 lg:px-0 lg:py-4 xl:text-[2vw]">
        <Image
          width={75}
          height={75}
          src={"/images/" + src}
          draggable={false}
          objectFit={"contain"}
          alt={src}
        />
        <div className="text-[5vw] sm:text-[3.5vw] md:text-[3.5vw] lg:text-[2.5vw] xl:text-[2vw]">
          {person}
        </div>
      </div>
      <p className="p-4 text-[3.5vw] font-[400] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.75vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
        {text}
      </p>
    </section>
  );
};

export default Velemenyek;
