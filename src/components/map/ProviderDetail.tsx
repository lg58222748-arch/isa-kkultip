"use client";

import { Star, Shield, MapPin, Phone, X, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Provider } from "@/types/provider";

interface ProviderDetailProps {
  provider: Provider;
  onClose: () => void;
}

export function ProviderDetail({ provider, onClose }: ProviderDetailProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-border/60 p-4">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            {provider.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-base font-bold text-foreground">
                {provider.name}
              </h2>
              {provider.verified && (
                <Shield className="h-4 w-4 text-primary" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {provider.description}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Info */}
      <div className="border-b border-border/60 px-4 py-3">
        <div className="flex items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-foreground">{provider.rating}</span>
            <span className="text-muted-foreground">
              ({provider.reviewCount}개 리뷰)
            </span>
          </span>
          <span className="text-muted-foreground">{provider.experience}</span>
        </div>
        <div className="mt-2 text-lg font-bold text-primary">
          {provider.priceLabel}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {provider.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b border-border/60 px-4 py-3">
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {provider.address}
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            {provider.phone}
          </span>
        </div>
        <button className="mt-3 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          상담 신청
        </button>
      </div>

      {/* Reviews */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <h3 className="mb-3 text-sm font-bold text-foreground">
          후기 ({provider.reviews.length})
        </h3>
        <div className="flex flex-col gap-3">
          {provider.reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-lg border border-border/40 bg-muted/20 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    {review.author}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {review.date}
                </span>
              </div>
              {review.apartmentSize && (
                <Badge variant="outline" className="mt-1.5 text-[10px]">
                  {review.apartmentSize}
                </Badge>
              )}
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
