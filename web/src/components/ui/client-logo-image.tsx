import Image from "next/image";
import { cn } from "@/lib/utils";
import { isLocalAsset, withLogoCache } from "@/lib/client-logo";

type Props = {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
  priority?: boolean;
};

export function ClientLogoImage({ src, alt = "", size = 48, className, priority }: Props) {
  return (
    <Image
      src={withLogoCache(src)}
      alt={alt}
      width={size}
      height={size}
      unoptimized={isLocalAsset(src)}
      priority={priority}
      className={cn("h-full w-full object-contain", className)}
    />
  );
}

type HeroProps = {
  src: string;
  alt: string;
  contain?: boolean;
  sizes?: string;
  priority?: boolean;
};

export function ProjectHeroImage({ src, alt, contain, sizes, priority }: HeroProps) {
  const logoStyle = contain ?? isLocalAsset(src);

  return (
    <Image
      src={withLogoCache(src)}
      alt={alt}
      fill
      unoptimized={isLocalAsset(src)}
      priority={priority}
      sizes={sizes ?? "(max-width: 768px) 100vw, 33vw"}
      className={cn(
        "transition-transform duration-500 group-hover:scale-105",
        logoStyle ? "object-contain p-6 sm:p-8" : "object-cover object-top"
      )}
    />
  );
}
