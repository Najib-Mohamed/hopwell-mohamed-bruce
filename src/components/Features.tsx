import FeatureCard from "./FeatureCard";
import {
  BadgeCheck,
  Eye,
  FileText,
  Headphones,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Transparent Donations",
    text: "See exactly how each contribution is spent, with receipts down to the last dollar.",
  },
  {
    icon: BadgeCheck,
    title: "Verified NGOs",
    text: "Every partner organization passes a rigorous annual compliance audit.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    text: "Bank-grade encryption protects every transaction, every time.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Impact",
    text: "Live dashboards show your donation's effect as it happens on the ground.",
  },
  {
    icon: FileText,
    title: "Tax Benefits",
    text: "Instant, downloadable tax receipts for every donation you make.",
  },
  {
    icon: Headphones,
    title: "24/7 Donor Support",
    text: "A real human is always one message away if you have questions.",
  },
];

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
