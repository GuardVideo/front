import Image from "next/image";
import heroImage from "@/public/images/hero-image.svg";
import eduvaluLogo from "@/public/images/logos/eduvalu.png";
import ednuvaLogo from "@/public/images/logos/ednuva.png";

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <div>
            <div className="text-5xl font-bold leading-relaxed">
              Secure Videos
              <span className="font-extralight"> with </span>
              <h1 className="inline text-primaryColor">GuardVideo</h1>
              <br />
              <span className="font-extralight">Advanced </span>
              Encryption
              <span className="font-extralight"> & </span>
              DRM
            </div>
            <p className="text-white/80">
              Unmatched Video Security and Protection
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="btn-fill">Start Now</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
        <div>
          <Image
            src={heroImage}
            alt="GuardVideo"
          />
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <p className="text-center mb-4">
          Trusted by teams from leading companies
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Image
            src={eduvaluLogo}
            alt="Company"
            className="h-16 w-28 object-contain"
          />
          <Image
            src={ednuvaLogo}
            alt="Company"
            className="h-16 w-28 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
