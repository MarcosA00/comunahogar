import Image from "next/image";
import Hero from "@/public/img/hero-img.webp";

export default function Mission() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <span className="text-primary/80 inline-block rounded-lg px-3 py-1 text-2xl">
              Nuestra Misión
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Construyendo una comunidad
            </h2>
            <p className="text-primary/80 max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <span className="font-semibold">COMUNA HOGAR</span> es un grupo
              social dedicado a fomentar conexiones,
              <br /> promover el crecimiento personal y generar un impacto
              positivo.
              <br /> Creemos en el poder de la comunidad para inspirar cambios
              <br />y crear un futuro mejor para todos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src={Hero}
            width={550}
            height={310}
            alt="Mission"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4 px-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Fomentando conexiones</h3>
                  <p className="text-primary/80">
                    Organizamos eventos y actividades sociales con regularidad
                    para ayudar a nuestros miembros a construir relaciones
                    significativas y ampliar sus redes.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Crecimiento personal</h3>
                  <p className="text-primary/80 ">
                    A través de talleres, programas de tutoría y proyectos
                    colaborativos, capacitamos a nuestros miembros para que
                    desarrollen nuevas habilidades y alcancen su máximo
                    potencial.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Impacto comunitario</h3>
                  <p className="text-primary/80 ">
                    Participamos activamente en iniciativas locales y
                    oportunidades de voluntariado para marcar una diferencia
                    positiva en nuestra comunidad.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
