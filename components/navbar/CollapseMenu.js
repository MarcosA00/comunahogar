"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";

const navItems = [
  { path: "/quienes-somos", text: "¿Quiénes somos?" },
  { path: "/recursos", text: "Recursos" },
  { path: "/blog", text: "Blog" },
  { path: "/galeria", text: "Galería" },
  { path: "/contacto", text: "Contacto" },
];

export default function CollapseMenu() {
  const pathName = usePathname();
  const [status, setStatus] = useState(false);

  // Función para controlar el estado del menu colapsable
  const handleClick = () => {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  // Función para actualizar el estado del menu cuando se navegue
  const handleNavigation = () => {
    setStatus(false)
  }

  return (
    <>
      <div className="relative pt-4 right-5 hover:bg-muted">
        <button
          className={`absolute ${status === true ? " invisible " : " visible "} md:invisible lg:invisible xl:invisible transition transition-all'`}
          onClick={handleClick}
        >
          <TbMenu />
        </button>

        <button
          className={`absolute z-50 ${status === false ? " invisible " : " visible "} md:invisible lg:invisible xl:invisible transition transition-all'`}
          onClick={handleClick}
        >
          <RxCross1 />
        </button>
      </div>

      <div
        className={`bg-secondary/90 w-7/12 h-[40vh] text-lg rounded-md shadow-lg -right-6 absolute flex flex-col justify-center gap-4 z-40 p-4 ${
          status === true ? " visible " : " invisible "
        } md:invisible lg:invisible xl:invisible transition transition-all'}`}
      >
        {navItems.map((navItem) => (
          <Link
            href={navItem.path}
            onClick={handleNavigation}
            className={`hover:underline  mr-2 transition-all ${
              pathName == navItem.path && " underline text-orange"
            }`}
            key={navItem.path}
          >
            {navItem.text}
          </Link>
        ))}
      </div>
    </>
  );
}
