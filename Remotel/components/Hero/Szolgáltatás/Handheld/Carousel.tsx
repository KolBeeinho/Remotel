import Image from "next/image";
import React from "react";
import { szolgaltatas } from "../Szolgaltatasinfo";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Szolgaltatasplusinfo from "../Szolgaltatasplusinfo";
const Carousel: React.FC = () => {
  const [current, setCurrent] = React.useState<number>(1);
  const nextSlide = () => {
    setCurrent(current === szolgaltatas.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? szolgaltatas.length - 1 : current - 1);
  };
  const [open, setOpen] = React.useState<string>("");
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(e.currentTarget.id);
    console.log(e.currentTarget.id);
  };
  return (
    <>
      <ChevronLeftIcon
        className="h-13 w-13 absolute left-0 top-[35%] z-10 h-9 w-9 cursor-pointer select-none font-[100] text-white hover:text-stone-400 sm:left-10 md:left-12"
        onClick={prevSlide}
      />
      <ChevronRightIcon
        className="h-13 w-13 absolute right-0 top-[35%] z-10 h-9 w-9 cursor-pointer select-none rounded-xl text-white hover:text-stone-400 sm:right-10 md:right-12"
        onClick={nextSlide}
      />
      <div className="lightservicebg cursor-pointer mx-auto flex min-h-[25em] max-w-[60%] items-center px-1 sm:max-w-[50%] md:max-w-[40%]">
        {szolgaltatas.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? "opacity-[75] duration-500"
                  : "opacity-0 duration-500 ease-in"
              }
              key={index}
            >
              {index === current && (
                <div
                  className="flex w-full flex-col items-center space-y-6 text-center sm:space-y-4"
                  onClick={handleOpen}
                  id={slide.id}
                >
                  <Image
                    src={"/" + slide.src}
                    alt={slide.alt}
                    width={125}
                    height={125}
                    objectFit={"contain"}
                    draggable={"false"}
                  />
                  <h2 className="text-[7vw] font-extrabold sm:text-[5.5vw] md:text-[4.5vw]">
                    {slide.h2}
                  </h2>
                  <p className="px-1 text-center text-[5vw] font-[200] sm:text-[3.5vw] md:text-[3vw]">
                    {slide.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Plusz leírás */}
      {szolgaltatas.map((item, index) => (
        <React.Fragment key={item.id}>
          {open === item.id && current === index && (
            <Szolgaltatasplusinfo
              h2={item.h2}
              extendedText1={item.extendedText1}
              extendedText2={item.extendedText2}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default Carousel;
