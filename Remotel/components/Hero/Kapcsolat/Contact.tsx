import Image from "next/image";
import { Fragment } from "react";
import dynamic from "next/dynamic";
const Inputfield = dynamic(() => import("./Inputfield"));
import { inputfields } from "./Inputfields";
import GoogleMaps from "./GoogleMaps";

const Contact: React.FC = () => {
  return (
    <section
      className="relative font-Dosis text-[#2F2A45] md:pb-8 lg:pb-12 xl:pb-16"
      id="kapcsolat"
    >
      {/* Háttérkép */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h2 className="mb-10 pt-10 text-center text-[8vw] font-[700] sm:text-[6vw] lg:text-[5vw] xl:text-[4vw] 2xl:text-[3.5vw]">
        Kapcsolat
      </h2>
      <div className="blurtab mx-2 flex min-h-[30rem] flex-col md:mx-auto md:max-w-[75%] md:flex-row">
        <div className="flex min-w-[50%] flex-col p-6 text-[1.5rem]">
          <h3 className="px-2 text-[1.25rem] font-[800] sm:text-[1.6rem] md:text-[2.5rem]">
            Bódi Timi
          </h3>
          <span className="px-2 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem]">
            Üzemeltető/ ...
          </span>
          <a
            className="flex whitespace-nowrap px-2 pb-4 text-[1rem] font-bold sm:whitespace-normal sm:text-[1.25rem] md:text-[1.5rem]"
            href="tel:+365011213124"
            title="Telefonszám felhívása"
          >
            +36 30/000 0000&nbsp;
            <Image
              src="/call.png"
              title="telefon"
              alt="telefon"
              draggable={false}
              objectFit="contain"
              width={18}
              height={18}
              quality={100}
            />
          </a>
          {/* Form bal oldalt */}
          <form
            action="https://formsubmit.co/el/hepago"
            method="POST"
            id="contact"
          >
            <div className="flex flex-col px-2">
              {/* Input mezők */}
              {inputfields.map((item) => (
                <Fragment key={item.id}>
                  <Inputfield
                    id={item.name}
                    name={item.name}
                    inputType={item.inputType}
                    placeholder={item.placeholder}
                    text={item.text}
                  />
                </Fragment>
              ))}
              {/* Leírás */}
              <label
                htmlFor="leiras"
                className="text-[1.25rem] sm:text-[1.5rem]"
              >
                Leírás
              </label>
              <textarea
                name="leiras"
                id="leirasid"
                placeholder="Bővebb leírás"
                className="resize-none"
              ></textarea>
            </div>
            {/* Küldés */}
            <button
              className="ease transfrom btn my-4 ml-2 cursor-pointer rounded-2xl border-none bg-[#EE2449] py-2 px-16 text-[24px] font-[400] tracking-wider text-white transition duration-300"
              type="submit"
            >
              Küldés
            </button>
          </form>
        </div>
        {/* Google Map */}
        <div className="flex w-full items-center justify-center">
          <GoogleMaps />
        </div>
      </div>
    </section>
  );
};

export default Contact;
