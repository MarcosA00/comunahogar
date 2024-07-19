export default function Events() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Building a Vibrant Community
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              COMUNA HOGAR is a social group dedicated to fostering connections,
              promoting personal growth, and making a positive impact in our
              local community. We believe in the power of community to inspire
              change and create a better future for all.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src="/placeholder.svg"
            width={550}
            height={310}
            alt="Mission"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Fostering Connections</h3>
                  <p className="text-muted-foreground">
                    We organize regular social events and activities to help our
                    members build meaningful relationships and expand their
                    networks.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Personal Growth</h3>
                  <p className="text-muted-foreground">
                    Through workshops, mentorship programs, and collaborative
                    projects, we empower our members to develop new skills and
                    reach their full potential.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Community Impact</h3>
                  <p className="text-muted-foreground">
                    We actively engage in local initiatives and volunteering
                    opportunities to make a positive difference in our
                    community.
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