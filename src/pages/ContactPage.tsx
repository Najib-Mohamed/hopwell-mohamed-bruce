import { Mail } from "lucide-react";
import Badge from "../components/Badge";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function ContactPage() {
  return (
    <section id="contact" className="container py-5 my-lg-5">
      <header className="contact-heading text-center mx-auto mb-5">
        <Badge icon={Mail}>GET IN TOUCH</Badge>
        <h1 className="display-4 fw-bold mt-3 mb-3">We’d love to hear from you</h1>
        <p className="lead text-secondary mb-0">
          Have a question or want to support our mission? Send us a message and our team will get back to you.
        </p>
      </header>

      <div className="row g-4 align-items-stretch">
        <div className="col-lg-5">
          <ContactInfo />
        </div>
        <div className="col-lg-7">
          <ContactForm />
        </div>
      </div>

    </section>
  );
}
