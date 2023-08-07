import Image from "next/image";
import Hero from "./_components/home/hero";
import Defi from "./_components/home/defi";
import Subscribe from "./_components/home/subscribe";
import Usecases from "./_components/home/usecases";
import Contact from "./_components/home/contact";
import Support from "./_components/home/support";
import Roadmap from "./_components/home/roadmap";

export default function Home() {
  return (
    <main className="lg:p-16 p-8">
      <Hero />
      <Defi />
      <Usecases />
      <Roadmap />
      <Subscribe />
      <Contact />
      <Support />
    </main>
  );
}
