import dynamic from "next/dynamic";
import { Fragment } from "react";
const Velemenyek = dynamic(() => import("./Velemenyek"));
import { velemeny } from "./Velemenyinfo";
import Image from "next/image";
const FogyasztoHeader = dynamic(() => import("./FogyasztoHeader"));
const MobileFogyaszto = dynamic(() => import("./handheld/MobileFogyaszto"));

const Fogyaszto: React.FC = () => {
  return (
    <section>
      {/* Mobilos */}
      <MobileFogyaszto />
      <div className="relative hidden text-[#2F2A45] lg:block lg:min-h-[60rem]">
        {/* Háttérkép */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/feedback.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>
        <section className="mx-auto flex max-w-[80%] flex-col items-center">
          <FogyasztoHeader />
          {/* Gépen */}
          <div className="mt-10 flex max-w-[80%] items-center justify-evenly space-x-6 md:mt-20">
            {velemeny.map((item) => (
              <Fragment key={item.id}>
                <Velemenyek
                  src={item.src}
                  text={item.text}
                  person={item.person}
                />
              </Fragment>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Fogyaszto;
