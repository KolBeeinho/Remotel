import Image from "next/image";
import Link from "next/link";
import { links } from "./Links";
const Header: React.FC = () => {
  const Reload = () => {
    window.location.reload();
  };
  return (
    <div className="min-w-screen hidden min-h-[5rem] items-center justify-between p-4 font-Dosis md:flex">
      <ul className="ml-3 flex items-center lg:ml-10 xl:ml-16">
        <Link href={"/"}>
          <li className="mr-3 bg-transparent">
            <Image
              src={"/remotellogo.PNG"}
              height={100}
              width={200}
              draggable={false}
              priority={true}
              objectFit="contain"
              quality={100}
              onClick={Reload}
              className="cursor-pointer"
            />
          </li>
        </Link>
      </ul>
      <ul className="relative inset-0 z-10 mr-4 flex list-none items-center space-x-12 text-[#2F2A45] lg:mr-20 xl:space-x-20">
        {links.map((item) => (
          <li
            className="tabanimation text-[2.25vw] font-[800] tracking-wide lg:text-[1.75vw] 2xl:text-[1.5vw]"
            key={item.id}
          >
            <a href={item.href} title={item.name} className="hover:underline">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
