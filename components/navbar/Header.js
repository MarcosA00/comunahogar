import Link from "next/link";
import Image from "next/image";
import { ActiveLink } from "../active-link/ActiveLink";

import Logo from "@/public/img/logo.png";

const navItems = [
  { path: "/quienes-somos", text: "¿Quiénes somos?" },
  { path: "/recursos", text: "Recursos" },
  { path: "/blog", text: "Blog" },
  { path: "/galeria", text: "Galería" },
  { path: "/contacto", text: "Contacto" },
];

export default function Header() {
  return (
    <>
      <header className="px-4 lg:px-6 h-14">
        <nav className="flex bg-opacity-30 md:py-1 m-2 gap-2 rounded">
          <Link
            href="/"
            className="flex items-center gap-5 justify-between"
            prefetch={false}
          >
            <Image src={Logo} width={40} height={50} />
            <span className="text-md font-medium hover:text-md">Inicio</span>
          </Link>

          <div className="flex flex-1"></div>

          <div className="py-1 collapse md:visible">
            {navItems.map((navItem) => (
              <ActiveLink key={navItem.path} {...navItem} />
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
