import Image from "next/image";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const Inputfield = dynamic(() => import("./Inputfield"));
import GoogleMaps from "./GoogleMaps";
import en from "../../../public/locales/en/Contact/contact";
import en2 from "../../../public/locales/en/Contact/form";
import hu from "../../../public/locales/hu/Kapcsolat/contact";
import hu2 from "../../../public/locales/hu/Kapcsolat/form";
import { useRouter } from "next/router";
import useLoading from "../../../common/hook/useLoad";
import { Transition } from "@headlessui/react";

const Contact: React.FC = () => {
  const { locale } = useRouter();
  const t = locale === "hu" ? hu : en;
  const v = locale === "hu" ? hu2 : en2;
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
    <section
      className="relative text-[#2F2A45] md:pb-8 lg:pb-12 xl:pb-16"
      id="kapcsolat"
    >
      {/* Háttérkép */}
      <div className="absolute inset-0 -z-10">
        <Image src="/images/contact.jpg" layout="fill" objectFit="cover" />
      </div>
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
        <h2 className="mb-10 select-none pt-10 text-center text-[8vw] font-[700] sm:text-[6vw] md:pt-16 lg:text-[5vw] xl:text-[4vw] 2xl:text-[3.5vw]">
          {t.contacth2}
        </h2>
        <div className="blurtab mx-auto flex min-h-[30rem] max-w-[90%] flex-col md:flex-row lg:max-w-[80%]">
          <div className="flex min-w-[50%] flex-col p-6 text-[1.5rem]">
            <h3 className="px-2 text-[2rem] font-[800] sm:text-[1.8rem] md:text-[2.5rem]">
              {t.contacth3}
            </h3>
            <h4 className="px-2 text-[1.5rem] sm:text-[1.5rem] md:text-[1.5rem]">
              {t.contacth4}
            </h4>
            <a
              className="mt-2 flex whitespace-nowrap px-2 pb-4 text-[1rem] font-bold sm:whitespace-normal sm:text-[1.25rem] md:text-[1.5rem]"
              href="tel:+365011213124"
              title="Telefonszám felhívása"
            >
              +36 30/000 0000&nbsp;
              <Image
                src="/images/call.png"
                title="telefon"
                alt="telefonicon"
                draggable={false}
                objectFit="contain"
                width={18}
                height={18}
              />
            </a>
            {/* Form bal oldalt */}
            <form method="POST" id="contact">
              <div className="flex flex-col px-2">
                {/* Input mezők */}
                {v.map((item) => (
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
                  {t.contacttextarea}
                </label>
                <textarea
                  name="leiras"
                  id="leirasid"
                  placeholder={t.contacttextareaplaceholder}
                  className="resize-none"
                ></textarea>
              </div>
              {/* Küldés */}
              <button
                className="btn ease my-4 ml-2 cursor-pointer rounded-2xl border-none bg-[#EE2449] py-2 px-12 text-[24px] font-[400] tracking-wider text-white transition duration-300 md:px-16"
                type="submit"
                aria-label={t.contactsubmit}
              >
                {t.contactsubmit}
              </button>
            </form>
          </div>
          {/* Google Map */}
          <div className="flex w-full items-center justify-center">
            <GoogleMaps />
          </div>
        </div>
      </Transition>
    </section>
  );
};

export default Contact;
