export default function About() {
  return (
    <>
      <section className="w-full relative mt-14 py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-[#83C150] to-[#34BDE7]" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground space-y-6 px-4 md:px-6">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm">
              Our History
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              The Journey of COMUNA HOGAR
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              COMUNA HOGAR was founded in 2018 by a group of young professionals
              and creatives who were passionate about building a vibrant
              community and making a positive impact in their local area. Over
              the years, the collective has grown into a thriving hub for social
              and professional development, hosting a wide range of events and
              initiatives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
