import { SiRaspberrypi } from "react-icons/si";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fondo dark:bg-gray-900 duration-200 pt-5 pb-5 flex items-center justify-between px-2 md:px-10" id="#MainContent">
      <div className="flex items-center justify-center">
        <div className="text-5xl text-black dark:text-red-500 duration-200">
          <SiRaspberrypi />
        </div>
        <h1 className="text-3xl md:text-4xl text-black dark:text-red-500 duration-200">
          Dolar-Dev
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/agustin-molina-994635138/"
          target="_blank"
        >
          <SiLinkedin className="text-2xl md:text-3xl text-black dark:text-red-500 duration-200" />
        </Link>
        <Link href="" target="_blank">
          <SiGithub className="text-2xl md:text-3xl text-black dark:text-red-500 duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
