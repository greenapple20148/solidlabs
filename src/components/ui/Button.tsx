"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconAfter?: boolean;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconAfter = false,
  external = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 whitespace-nowrap select-none";

  const variants = {
    primary:
      "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40",
    secondary:
      "bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border backdrop-blur",
    ghost: "text-muted-foreground hover:text-foreground hover:bg-accent",
    outline:
      "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon && !iconAfter && icon}
      {children}
      {iconAfter ? (
        icon ? (
          icon
        ) : (
          <ArrowRight className="w-4 h-4" />
        )
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
