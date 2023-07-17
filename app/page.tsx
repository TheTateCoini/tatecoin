import Image from "next/image";
import Hero from "./_components/home/hero";
import Defi from "./_components/home/defi";
import Subscribe from "./_components/basic/subscribe";
import Usecases from "./_components/home/usecases";

export default function Home() {
  return (
    <main className="lg:p-16 p-8">
      <Hero />
      <Defi />
      <Usecases />
      <Subscribe />
    </main>
  );
}
