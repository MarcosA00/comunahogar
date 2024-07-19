import Link from "next/link"
import Image from "next/image"

export default function TimeLine() {
  return (
    <>
      <section className="w-full relative">
        <div className="w-[2px] h-40 bg-muted mx-4 md:m-[23px] xl:m-[128px] absolute"></div>

        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10">
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <span className="font-medium">2018 - COMUNA HOGAR is founded</span>
                <div className="text-muted-foreground">
                  A group of young professionals and creatives come together to establish COMUNA HOGAR, a vibrant
                  community focused on social and professional development.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">2019 - Expansion and growth</div>
                <div className="text-muted-foreground">
                  COMUNA HOGAR expands its reach, hosting a variety of events and workshops to engage the local
                  community.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">2020 - Adapting to the pandemic</div>
                <div className="text-muted-foreground">
                  COMUNA HOGAR pivots its programming to virtual events and online initiatives to continue supporting
                  its members during the COVID-19 pandemic.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">2021 - Launching new initiatives</div>
                <div className="text-muted-foreground">
                  COMUNA HOGAR introduces new programs, such as a mentorship program and a community garden, to
                  further support its members and the local neighborhood.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">2022 - Expanding to a new location</div>
                <div className="text-muted-foreground">
                  COMUNA HOGAR opens a second location, allowing the collective to reach a wider audience and offer
                  more resources to its growing community.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                <div className="font-medium">2023 - Celebrating 5 years of impact</div>
                <div className="text-muted-foreground">
                  COMUNA HOGAR celebrates its 5th anniversary, reflecting on the collective significant impact on
                  the local community and its plans for continued growth and innovation.
                </div>
              </div>
            </div>
            <Image
              src="/placeholder.svg"
              width={550}
              height={310}
              alt="Mission"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </>
  )
}