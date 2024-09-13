import Link from "next/link";

export default function Hero() {
  return (
    <main className="flex-1">
      <section className="w-full h-[75vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#83C150] to-[#34BDE7]" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground space-y-6 px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            COMUNA HOGAR
          </h1>
          <p className="max-w-[700px] md:text-xl">
            Una comunidad vibrante de jóvenes con una visión social y solidaria.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <div
              className="text-secondary inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:"
              prefetch={false}
            >
              Iniciar Sesión
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}