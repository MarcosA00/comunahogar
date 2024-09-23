import Image from "next/image";
import Muestra from '@/public/img/placeholder.svg'

export default function Carousel() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Galería
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explora nuestra galería y echa un vistazo a las actividades en las que emos participado.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="rounded-xl p-1 bg-gradient-to-t from-[#E38825] via-[#83C150] to-[#34BDE7]">
              <Image
                src={Muestra}
                width="300"
                height="300"
                alt="Gallery 1"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="rounded-xl p-1 bg-gradient-to-t from-[#E38825] via-[#83C150] to-[#34BDE7]">
              <Image
                src={Muestra}
                width="300"
                height="300"
                alt="Gallery 2"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="rounded-xl p-1 bg-gradient-to-t from-[#E38825] via-[#83C150] to-[#34BDE7]">
              <Image
                src={Muestra}
                width="300"
                height="300"
                alt="Gallery 3"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="rounded-xl p-1 bg-gradient-to-t from-[#E38825] via-[#83C150] to-[#34BDE7]">
              <Image
                src={Muestra}
                width="300"
                height="300"
                alt="Gallery 4"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
