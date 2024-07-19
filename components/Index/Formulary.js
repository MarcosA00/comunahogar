import Link from "next/link";

export default function Formulary() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get Involved with COMUNA HOGAR
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Whether you're looking to make new friends, develop your skills, or
            give back to the community, there are plenty of ways to get involved
            with COMUNA HOGAR.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="max-w-lg flex-1"
            />
            <button className="text-secondary inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" type="submit">Join Now</button>
          </form>
          <p className="text-xs text-muted-foreground">
            Sign up to stay updated on our latest events and opportunities.{" "}
            <Link
              href="#"
              className="underline underline-offset-2"
              prefetch={false}
            >
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
