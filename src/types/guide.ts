export type MovingPath = "new-apartment" | "old-apartment";

export interface ChecklistItem {
  id: string;
  text: string;
  isOptional: boolean;
}

export interface CostRow {
  size: string;
  priceRange: string;
}

export interface GuideStep {
  id: string;
  path: MovingPath;
  order: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  estimatedDays: string;
  estimatedCost: string;
  isRequired: boolean;
  icon: string;
  tips: string[];
  warnings: string[];
  checklist: ChecklistItem[];
  costTable: CostRow[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}
