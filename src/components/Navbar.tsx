import { ArrowRight, Heart } from "lucide-react";
// import { navLinks } from "../data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Causes", href: "#causes" },
  { label: "Volunteers", href: "#volunteers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "/contact" },
];
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
      <div className="container">
        <a href="/" className="navbar-brand d-flex align-items-center gap-2 font-title fw-bolder fs-3">
          <span className="icon-box icon-box-sm">
            <Heart size={22} fill="currentColor" />
          </span>
          <span>
            Hope <span className="text-success">well</span>
          </span>
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto gap-lg-4">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link font-title fw-medium" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#donate"
          className="btn btn-gradient rounded-pill px-3 py-2 px-lg-4 py-lg-3 font-title fw-semibold d-inline-flex align-items-center gap-2"
        >
          Donate Now <ArrowRight size={18} />
        </a>
      </div>
    </nav>
  );
}