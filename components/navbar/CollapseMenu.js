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

  const handleClick = () => {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  const handleNavigation = () => {
    setStatus(false)
  }

  console.log(status);

  return (
    <>
      <div className="relative">
        <button
          className={`absolute top-4 ${status === true ? " invisible " : " visible "} md:invisible lg:invisible xl:invisible transition transition-all'`}
          onClick={handleClick}
        >
          <TbMenu />
        </button>

        <button
          className={`relative top-4 left-1 z-50 ${status === false ? " invisible " : " visible "} md:invisible lg:invisible xl:invisible transition transition-all'`}
          onClick={handleClick}
        >
          <RxCross1 />
        </button>
      </div>

      <div
        className={`bg-secondary/90 w-7/12 h-[40vh] text-lg rounded-md shadow-lg -right-6 top-4 absolute flex flex-col justify-center gap-4 z-40 p-4 ${
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
