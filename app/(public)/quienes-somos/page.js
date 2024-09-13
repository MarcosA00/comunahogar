import About from "@/components/about/About";
import TimeLine from "@/components/about/TimeLine";

export const metadata = {
  title: "Comuna Hogar - ¿Quiénes somos?",
  description: "Página ¿Quiénes somos? de Comuna Hogar",
};

export default function page() {
  return (
    <>
      <About />
      <TimeLine />
    </>
  )
}