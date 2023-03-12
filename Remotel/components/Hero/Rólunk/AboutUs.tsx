const AboutUs: React.FC = () => {
  return (
    <article
      className="flex flex-col items-center bg-[#2F2A45] p-4 text-white lg:min-h-[40rem] xl:min-h-[50rem]"
      id="rolunk"
    >
      <h2 className="mb-12 mt-8 text-[8vw] font-[700] sm:text-[6vw] md:mt-16 lg:text-[5vw] xl:text-[4vw] 2xl:text-[3.5vw]">
        Rólunk
      </h2>
      <p className="mx-4 mb-10 text-justify font-Dosis text-[3vw] md:max-w-[60%] md:text-[2.5vw] lg:text-[2.25vw] xl:text-[2vw] 2xl:text-[1.75vw]">
        {/* Ide kell majd a szöveg */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </article>
  );
};

export default AboutUs;
