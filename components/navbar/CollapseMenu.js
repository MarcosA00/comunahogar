'use client'

import { useState } from "react";
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
  { path: "/quienes-somos", text: "¿Quiénes somos?" },
  { path: "/recursos", text: "Recursos" },
  { path: "/blog", text: "Blog" },
  { path: "/galeria", text: "Galería" },
  { path: "/contacto", text: "Contacto" },
];

export default function CollapseMenu() {
  return (
    <div className={`bg-secondary/90 w-7/12 h-[40vh] text-lg border-primary rounded-md shadow-lg -right-6 top-4 absolute flex flex-col justify-center gap-4 z-50 p-4 visible md:invisible lg:invisible xl:invisible'}`}>
      {
        navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </div>
  )
}