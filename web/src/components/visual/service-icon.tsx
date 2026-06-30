import {
  Monitor,
  Cpu,
  Smartphone,
  Sparkles,
  Cloud,
  TrendingUp,
  Palette,
  Layers,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Monitor,
  Cpu,
  Smartphone,
  Sparkles,
  Cloud,
  TrendingUp,
  Palette,
  Layers,
  Briefcase,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Monitor;
  return <Icon className={className} />;
}
