const Home: React.FC = () => {
  return (
    <section className="relative ml-[3.5vw] min-h-[55rem] pt-8 sm:min-h-[60rem] md:pt-0 2xl:min-h-[80rem]">
      {/* Home tab */}
      <section className="blurtab relative z-0 mt-20 flex max-h-[30em] max-w-[55%] flex-col space-y-4 p-4 font-[800] text-[#2F2A45] sm:max-h-[50em] sm:max-w-[50%] md:mt-[8em] md:max-w-[40%] lg:max-w-[35%] xl:max-w-[30%] 2xl:max-w-[23%]">
        <h1 className="mx-4 mt-6 text-[5vw] font-[800] sm:text-[4.5vw] md:mx-8 md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw] 2xl:text-[2.5vw]">
          Apartman takarítás és üzemeltetés
        </h1>
        <p className="mx-4 pb-24 sm:pb-32 md:pb-40 text-[3vw] font-[400] sm:text-[2.75vw] md:mx-8 md:text-[2.5vw] xl:text-[1.4vw]">
          Személyre szabottan
        </p>
        <a
          className="ease transfrom btn absolute bottom-7 right-1 mr-4 rounded-[34px] bg-[#EE2449] py-2 px-6 text-[4.25vw] font-bold tracking-wider text-white transition duration-300 sm:text-[4vw] md:right-4 md:py-3 md:text-[3vw] lg:text-[2.5vw]
          xl:px-12 xl:text-[2vw] 2xl:text-[1.4vw]"
          href="#kapcsolat"
        >
          Hívj fel
        </a>
      </section>
    </section>
  );
};
export default Home;
