import { Badge } from "@/components/ui/badge";
import { Star, Shield, MapPin } from "lucide-react";
import type { Provider } from "@/types/provider";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="group flex gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm sm:p-5">
      {/* Avatar */}
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-muted text-xl font-bold text-muted-foreground">
        {provider.name.charAt(0)}
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-foreground">
            {provider.name}
          </h3>
          {provider.verified && (
            <Shield className="h-4 w-4 text-primary" />
          )}
        </div>

        <p className="text-sm text-muted-foreground">{provider.description}</p>

        {/* Rating & Experience */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-foreground">
              {provider.rating}
            </span>
            <span className="text-muted-foreground">
              ({provider.reviewCount})
            </span>
          </span>
          <span className="text-muted-foreground">{provider.experience}</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {provider.region.slice(0, 2).join(", ")}
            {provider.region.length > 2 && ` 외 ${provider.region.length - 2}`}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {provider.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-shrink-0 flex-col items-end justify-between">
        <span className="text-lg font-bold text-primary">
          {provider.priceLabel}
        </span>
        <button className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          상담신청
        </button>
      </div>
    </div>
  );
}
