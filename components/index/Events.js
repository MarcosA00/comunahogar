import Link from "next/link";
import Image from "next/image";
import Muestra from "@/public/img/placeholder.svg"

export default function Events() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-[#E38825] via-[#83C150] to-[#34BDE7]" />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground space-y-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Próximos eventos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Consulta nuestros próximos eventos y únete a nosotros para vivir una experiencia en comunidad.
            </p>
          </div>
        </div>

        {/* Lista de eventos proximos */}
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-4">
              <div className="bg-secondary/40 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Próxima Reunión</h3>
                    <p className="text-sm text-muted-foreground">
                      Septiemre 15, 2024
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="text-secondary inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Ver mas ...
                  </Link>
                </div>
              </div>
              <div className="bg-secondary/40 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Noche de Cine</h3>
                    <p className="text-sm text-muted-foreground">
                      Octubre 10, 2024
                    </p>
                  </div>
                  <div
                    className="text-secondary inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:cursor-pointer hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Ver mas ...
                  </div>
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
