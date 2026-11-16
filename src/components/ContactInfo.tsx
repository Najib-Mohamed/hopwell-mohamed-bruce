import { Mail, MapPin, MapPinned, Phone, type LucideIcon } from "lucide-react";

type ContactItem = {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
};

const contactItems: ContactItem[] = [
  {
    icon: MapPin,
    title: "Our Office",
    value: "221 Riverside Lane, Austin, TX 78701",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@hopewell.org",
    href: "mailto:hello@hopewell.org",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 204-8890",
    href: "tel:+15552048890",
  },
];

export default function ContactInfo() {
  return (
    <article className="card h-100 border-0 rounded-4 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <h2 className="h3 fw-bold mb-4">Contact information</h2>

        <div className="d-flex flex-column gap-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div className="d-flex align-items-start gap-3" key={item.title}>
                <span className="contact-info-icon bg-success-subtle text-success rounded-3 d-inline-flex align-items-center justify-content-center flex-shrink-0">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="h6 fw-bold mb-1">{item.title}</h3>
                  {item.href ? (
                    <a className="text-secondary text-decoration-none" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-secondary mb-0">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="contact-map ratio ratio-16x9 rounded-4 overflow-hidden mt-4">
          <div className="d-flex flex-column align-items-center justify-content-center text-success text-center p-4">
            <MapPinned size={34} aria-hidden="true" />
            <span className="fw-bold mt-2">Map Embed Placeholder</span>
          </div>
        </div>
      </div>
    </article>
  );
}
