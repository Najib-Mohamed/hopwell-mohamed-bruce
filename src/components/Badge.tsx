import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type BadgeProps = {
  icon: LucideIcon;
  children: ReactNode;
};

export default function Badge({ icon: Icon, children }: BadgeProps) {
  return (
    <span className="badge text-success bg-success-subtle rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 fw-bold tracking-wide">
      <Icon size={16} aria-hidden="true" />
      {children}
    </span>
  );
}
