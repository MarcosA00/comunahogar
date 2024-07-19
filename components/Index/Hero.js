import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="flex-1">
      <section className="w-full h-[75vh] relative overflow-hidden">
        <Image
          src="/placeholder.svg"
          alt="COMUNA HOGAR"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.2)]" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground space-y-6 px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            COMUNA HOGAR
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl">
            A vibrant community of young professionals and creatives dedicated
            to building a better future.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="text-secondary inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
