const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`;

const CATEGORY_FALLBACK: Record<string, string> = {
  가이드: UNSPLASH("1484154218962-a197022b5858"),
  비용: UNSPLASH("1554224155-6726b3ff858f"),
  비교: UNSPLASH("1556228578-8c89e6adf883"),
  꿀팁: UNSPLASH("1556761175-5973dc0f32e7"),
  건강: UNSPLASH("1544005313-94ddf0286df2"),
  행정: UNSPLASH("1568992687947-868a62a9f521"),
};

const SLUG_TO_IMAGE: Record<string, string> = {
  "new-apartment-moving-order": UNSPLASH("1545324418-cc1a3fa10c00"),
  "move-in-cleaning-cost-guide": UNSPLASH("1527515637462-cff94eecc1ac"),
  "grout-epoxy-vs-nano": UNSPLASH("1552321554-5fefe8c9ef14"),
  "pre-inspection-checklist": UNSPLASH("1554224155-6726b3ff858f"),
  "packed-moving-cost-saving": UNSPLASH("1600585154340-be6161a56a0c"),
  "elastic-coating-guide": UNSPLASH("1513694203232-719a280e022f"),
  "sick-house-syndrome": UNSPLASH("1544005313-94ddf0286df2"),
  "old-apartment-renovation-order": UNSPLASH("1556909114-f6e7ad7d3136"),
  "nano-coating-effect-duration": UNSPLASH("1564013799919-ab600027ffc6"),
  "move-in-registration-guide": UNSPLASH("1568992687947-868a62a9f521"),
  "30-day-moving-checklist": UNSPLASH("1506784983877-45594efa4cbe"),
  "moving-waste-disposal": UNSPLASH("1532996122724-e3c354a0b15b"),
  "jeonse-wolse-deposit-guide": UNSPLASH("1450101499163-c8848c66ca85"),
  "apartment-moving-cost-by-size": UNSPLASH("1502672260266-1c1ef2d93688"),
  "avoid-moving-scams": UNSPLASH("1507003211169-0a1dd7228f2d"),
  "long-distance-moving-cost": UNSPLASH("1601584115197-04ecc0da31d7"),
  "appliance-packing-guide": UNSPLASH("1558618666-fcd25c85cd64"),
  "semi-pack-solo-moving": UNSPLASH("1586528116311-ad8dd3c8310d"),
  "moving-day-checklist": UNSPLASH("1586023492125-27b2c045efd7"),
  "internet-tv-transfer-guide": UNSPLASH("1515488764276-beab7607c1e6"),
  "storage-moving-guide": UNSPLASH("1564501049412-61c2a3083791"),
  "pet-moving-stress-tips": UNSPLASH("1548199973-03cce0bbc87b"),
  "studio-moving-cost-guide": UNSPLASH("1522708323590-d24dbb6b0267"),
  "moving-quote-comparison": UNSPLASH("1556228578-8c89e6adf883"),
  "aircon-transfer-cost": UNSPLASH("1631679706909-1844bbd07221"),
  "wallpaper-flooring-timing": UNSPLASH("1484154218962-a197022b5858"),
  "maintenance-fee-settlement": UNSPLASH("1520333789090-1afc82db536a"),
  "post-move-organization": UNSPLASH("1519710164239-da123dc03ef4"),
  "moving-day-driver-etiquette": UNSPLASH("1484723091739-30a097e8f929"),
  "moving-stress-recovery": UNSPLASH("1556761175-5973dc0f32e7"),
};

export function getBlogImage(slug: string, category?: string): string {
  return (
    SLUG_TO_IMAGE[slug] ??
    (category ? CATEGORY_FALLBACK[category] : undefined) ??
    UNSPLASH("1484154218962-a197022b5858")
  );
}
