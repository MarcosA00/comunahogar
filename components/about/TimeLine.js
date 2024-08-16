import Image from "next/image";
import Muestra from "@/public/img/img1.webp";
import TimelineItem from "./timeline/TimelineItem";

const timelineItems = [
  { date: "2018", title: "COMUNA HOGAR is founded", description: "A group of young professionals and creatives come together to establish COMUNA HOGAR, a vibrant community focused on social and professional development." },
  {
    date: "2019",
    title: "Expansion and growth",
    description:
      "COMUNA HOGAR expands its reach, hosting a variety of events and workshops to engage the local community.",
  },
  {
    date: "2020",
    title: "Adapting to the pandemic",
    description:
      "COMUNA HOGAR pivots its programming to virtual events and online initiatives to continue supporting its members during the COVID-19 pandemic.",
  },
  {
    date: "2021",
    title: "Launching new initiatives",
    description:
      "COMUNA HOGAR introduces new programs, such as a mentorship program and a community garden, to further support its members and the local neighborhood.",
  },
  {
    date: "2022",
    title: "Expanding to a new location",
    description:
      "COMUNA HOGAR opens a second location, allowing the collective to reach a wider audience and offer more resources to its growing community.",
  },
  {
    date: "2023",
    title: "Celebrating 5 years of impact",
    description:
      "COMUNA HOGAR celebrates its 5th anniversary, reflecting on the collective significant impact on the local community and its plans for continued growth and innovation.",
  },
];

export default function TimeLine() {
  return (
    <>
      <section className="w-full flex items-center justify-center">
        <div className="relative">
          {/* Linea vertical */}
          <div className=" md:mt-[55px] xl:mt-[55px] w-[2px] lg:h-[580px] xl:h-[600px] bg-muted ml-[100px] md:-ml-[-24px] xl:ml-[24px] 2xl:-ml-[-24px] absolute"></div>

          <div className="container flex items-center justify-center px-4 md:px-6">
            <div className="mx-auto max-w-5xl grid gap-12 items-center justify-center py-12 lg:grid-cols-2 lg:gap-12">
              <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10">

                {
                  timelineItems.map((navItem) => (
                    <TimelineItem
                      date={ navItem.date }
                      title={ navItem.title }
                      description={ navItem.description }
                    />
                  ))
                }

              </div>
              <Image
                src={Muestra}
                width={550}
                height={310}
                alt="Mission"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}