"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useInterval } from "usehooks-ts";

import { timeLeft } from "@/utils/utils";

export default function Counter() {
  const [time, setTime] = useState(timeLeft());
  useInterval(() => {
    setTime(timeLeft);
  }, 1000);

  const path = usePathname();

  const newStr = path.slice(1);

  return (
    <main className="flex-1 mt-14">
      <div className="w-full h-[640px] md:h-[540px] lg:h-[81vh] py-4 relative overflow-hidden">
        <div className="absolute mt-4 inset-0 bg-gradient-to-t from-[#E38825] via-[#83C150] to-[#34BDE7]" />
        <section className="relative h-full flex flex-col items-center justify-center gap-8 text-center text-primary-foreground space-y-6 px-4 md:px-6">
          <h1 className="text-4xl uppercase tracking-tighter sm:text-4xl md:text-7xl">
            Nueva sección "{newStr}"<br />
            <span className="font-bold">PRÓXIMAMENTE</span>
          </h1>

          {/* Contador */}
          <div className="grid grid-cols-2 grid-rows-2 md:flex gap-10 ">
            <article className="bg-secondary/30 p-4 w-32 h-48 flex flex-col items-center justify-center gap-5 rounded-md">
              <h2 className="text-5xl font-b">{time.days}</h2>
              <span>Dias</span>
            </article>

            <article className="bg-secondary/30 p-4 w-32 h-48 flex flex-col items-center justify-center gap-5 rounded-md">
              <h2 className="text-5xl font-b">{time.hours}</h2>
              <span>Horas</span>
            </article>

            <article className="bg-secondary/30 p-4 w-32 h-48 flex flex-col items-center justify-center gap-5 rounded-md">
              <h2 className="text-5xl font-b">{time.minutes}</h2>
              <span>Minutos</span>
            </article>

            <article className="bg-secondary/30 p-4 w-32 h-48 flex flex-col items-center justify-center gap-5 rounded-md">
              <h2 className="text-5xl font-b">{time.secons}</h2>
              <span>Segundos</span>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
