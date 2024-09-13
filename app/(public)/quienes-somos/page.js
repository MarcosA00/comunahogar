import About from "@/components/about/About";
import TimeLine from "@/components/about/TimeLine";

export const metadata = {
  title: "¿Quiénes somos?",
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