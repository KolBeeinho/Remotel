import Image from "next/image";

type Props = {
  src: string;
  text: string;
  person: string;
};

const Velemenyek: React.FC<Props> = ({ src, text, person }) => {
  return (
    <section className="blurtab flex flex-col p-6 xl:pb-10">
      <div className="ml-4 flex min-h-fit min-w-[35vw] space-x-16 px-4 pt-2 text-[4vw] font-[800] lg:min-w-min lg:max-w-[70%] lg:px-0 lg:py-4 xl:text-[2vw]">
        <Image
          width={60}
          height={60}
          src={"/" + src}
          draggable={false}
          objectFit={"contain"}
          alt={"kep"}
        />
        <div className="text-[6vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw]">
          {person}
        </div>
      </div>
      <p className="p-4 text-[3vw] font-[400] sm:text-[2vw] md:text-[1.75vw] lg:text-[1.5vw] xl:text-[1.25vw] 2xl:text-[1vw]">
        {text}
      </p>
    </section>
  );
};

export default Velemenyek;
