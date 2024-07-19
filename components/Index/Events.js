import Link from "next/link";
import Image from "next/image";
import Muestra from "@/public/img/img1.webp"

export default function Events() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.2)]" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Upcoming Events
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out our upcoming events and join us for a fun-filled
              experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-4">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Summer Picnic</h3>
                    <p className="text-sm text-muted-foreground">
                      June 15, 2023
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="text-secondary inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    RSVP
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Movie Night</h3>
                    <p className="text-sm text-muted-foreground">
                      July 10, 2023
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="text-secondary inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    RSVP
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={ Muestra }
            width="550"
            height="310"
            alt="Events"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
