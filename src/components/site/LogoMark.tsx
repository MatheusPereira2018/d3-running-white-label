import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  alt?: string;
  /** Adds the entrance reveal animation */
  reveal?: boolean;
  /** Adds the subtle continuous breathing loop */
  breathe?: boolean;
  /** Hover micro-interaction (scale + glow). Default: true */
  interactive?: boolean;
};

/**
 * Brand mark white label.
 * Se brand.logo estiver vazio, renderiza um monograma da marca.
 * Shared across header, hero and decorative usages.
 */
export const LogoMark = ({
  className,
  alt = brand.name,
  reveal = false,
  breathe = false,
  interactive = true,
}: LogoMarkProps) => {
  const initials = brand.shortName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center",
        interactive && "group/logo",
        className,
      )}
    >
      {brand.logo ? (
        <img
          src={brand.logo}
          alt={alt}
          draggable={false}
          className={cn(
            "block w-full h-full object-contain select-none rounded-lg",
            "transition-[transform,filter] duration-500 ease-out",
            interactive &&
              "group-hover/logo:scale-[1.03] group-hover/logo:translate-y-[-1px] group-hover/logo:[filter:drop-shadow(0_0_18px_hsl(var(--brand)/0.65))]",
            reveal && "animate-logo-reveal",
            breathe && "animate-breathe",
          )}
        />
      ) : (
        <span
          aria-label={alt}
          className={cn(
            "flex items-center justify-center w-full h-full rounded-xl bg-brand text-brand-foreground font-display font-bold tracking-tighter select-none",
            "transition-[transform,filter] duration-500 ease-out",
            interactive &&
              "group-hover/logo:scale-[1.03] group-hover/logo:translate-y-[-1px] group-hover/logo:[filter:drop-shadow(0_0_18px_hsl(var(--brand)/0.65))]",
            reveal && "animate-logo-reveal",
            breathe && "animate-breathe",
          )}
        >
          {initials}
        </span>
        )}
    </span>
  );
};
