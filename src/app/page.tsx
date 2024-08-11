import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Home/Hero";
import Services from "@/components/shared/Home/Services";
import Features from "@/components/shared/Home/Features";
import heroBG from "@/public/images/hero-bg.svg";

export default function Home() {
  return (
    <main>
      <div
        className="flex flex-col bg-no-repeat bg-contain pb-10"
        style={{
          backgroundImage: `url(${heroBG.src})`,
          backgroundPositionY: "top",
        }}
      >
        <Header />
        <Hero />
        <Services />
        <Features />
      </div>
    </main>
  );
}
