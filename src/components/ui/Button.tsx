import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "brick" | "navy" | "outline" | "ghost-light";

const styles: Record<Variant, string> = {
  brick:
    "bg-brick text-white hover:bg-brick-dark shadow-[0_8px_20px_-10px_rgba(201,81,47,0.7)]",
  navy: "bg-navy text-white hover:bg-navy-soft",
  outline: "border border-line bg-paper text-navy hover:border-navy",
  "ghost-light": "border border-white/30 text-white hover:bg-white/10",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "brick",
  className = "",
  children,
  external,
}: CommonProps & { href: string; external?: boolean }) {
  const cls = `${baseClass} ${styles[variant]} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "brick",
  className = "",
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${baseClass} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
