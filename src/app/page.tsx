import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Home/Hero";
import Services from "@/components/shared/Home/Services";
import heroBG from "@/public/images/hero-bg.svg";

export default function Home() {
  return (
    <main>
      <div
        className="flex flex-col bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${heroBG.src})`,
        }}
      >
        <Header />
        <Hero />
      </div>
      <Services />
    </main>
  );
}
