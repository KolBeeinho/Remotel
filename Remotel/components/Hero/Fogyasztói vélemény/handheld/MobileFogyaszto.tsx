import { velemeny } from "../Velemenyinfo";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const Velemenyek = dynamic(() => import("../Velemenyek"));
const FogyasztoHeader = dynamic(() => import("../FogyasztoHeader"));
const MobileFogyaszto: React.FC = () => {
  return (
    <div className="relative block font-Dosis text-[#2F2A45] lg:hidden">
      {/* Háttérkép */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/feedback.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col lg:hidden">
        <FogyasztoHeader />
        <div className="mt-10 flex min-h-fit space-x-8 overflow-x-scroll p-4 pl-20 pb-32 lg:hidden">
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
      </div>
    </div>
  );
};

export default MobileFogyaszto;
