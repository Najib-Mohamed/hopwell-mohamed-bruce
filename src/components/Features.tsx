import { Award } from "lucide-react";
import { features } from "../data";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section id="about" className="py-5 my-lg-5">
      <div className="container">
        <header className="text-center mb-5">
          {/* ... badge et titre, inchangés ... */}
        </header>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {features.map((feature) => (
            <div className="col" key={feature.title}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}