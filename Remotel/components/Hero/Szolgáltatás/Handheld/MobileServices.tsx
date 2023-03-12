import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("./Carousel"));
const ServicesHeader = dynamic(() => import("../ServicesHeader"));

const MobileTeam: React.FC = () => {
  return (
    <div className="relative min-h-[50em] sm:min-h-[60em] lg:hidden">
      {/* Lekerekített rész */}
      <svg
        className="absolute -translate-y-[55%] transform lg:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 634 242"
        fill="none"
      >
        <path
          d="M434 0.769464C319.34 -3.65471 100.833 8.50417 0 103.795V241.702H633.5V25.8206C544.861 12.0827 473.775 2.3042 434 0.769464Z"
          fill="#2F2A45"
        />
      </svg>
      {/* Szolgáltatások fejléce */}
      <ServicesHeader />
      {/* Szolgáltatások */}
      <Carousel />
    </div>
  );
};

export default MobileTeam;
