import Link from "next/link";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-200";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-ink text-paper hover:opacity-85",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink underline decoration-line underline-offset-4 hover:decoration-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  external,
  onClick,
  type = "button",
}: CommonProps & {
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
