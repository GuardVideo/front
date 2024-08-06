import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Home/Hero";
import heroBG from "@/public/images/hero-bg.svg";

export default function Home() {
  return (
    <main>
      <div
        className="flex flex-col bg-no-repeat bg-cover min-h-screen"
        style={{
          backgroundImage: `url(${heroBG.src})`,
        }}
      >
        <Header />
        <Hero />
      </div>
    </main>
  );
}
