"use client";

import { useState } from "react";
import type { GuideStep } from "@/types/guide";
import type { Provider } from "@/types/provider";
import { ProviderCard } from "@/components/providers/ProviderCard";
import { ChecklistSection } from "@/components/guides/ChecklistSection";
import {
  Clock,
  Coins,
  Lightbulb,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TabGroup {
  label: string;
  steps: GuideStep[];
  providers: Provider[];
}

export function GuideTabs({ tabs }: { tabs: TabGroup[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const currentTab = tabs[activeTab];

  return (
    <div>
      {/* Tab Bar */}
      <div className="sticky top-16 z-40 -mx-4 overflow-x-auto border-b border-border/60 bg-background px-4 sm:-mx-6 sm:px-6">
        <div className="flex gap-0">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(i);
                setExpandedStep(null);
              }}
              className={`flex-shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition-colors sm:px-6 ${
                i === activeTab
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {/* Steps in this tab */}
        <div className="mb-6 flex flex-col gap-3">
          {currentTab.steps.map((step) => {
            const isExpanded = expandedStep === step.id;
            return (
              <div
                key={step.id}
                className="rounded-xl border border-border/60 bg-card overflow-hidden"
              >
                {/* Step Header - Clickable */}
                <button
                  onClick={() =>
                    setExpandedStep(isExpanded ? null : step.id)
                  }
                  className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-accent/30"
                >
                  <span className="text-2xl">{step.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">
                        STEP {step.order}
                      </span>
                      <h3 className="text-sm font-bold text-foreground">
                        {step.title}
                      </h3>
                      {step.isRequired ? (
                        <Badge variant="default" className="bg-primary text-[10px] px-1.5 py-0">
                          필수
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                          선택
                        </Badge>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {step.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 flex-col items-end gap-0.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Coins className="h-3 w-3" />
                      {step.estimatedCost}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {step.estimatedDays}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-border/40 px-4 pb-4 pt-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Tips */}
                    {step.tips.length > 0 && (
                      <div className="mt-4 rounded-lg bg-honey-light/20 p-3">
                        <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                          <Lightbulb className="h-3.5 w-3.5 text-honey-dark" />
                          꿀팁
                        </h4>
                        <ul className="flex flex-col gap-1.5">
                          {step.tips.map((tip, i) => (
                            <li key={i} className="text-xs leading-relaxed text-muted-foreground">
                              • {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Warnings */}
                    {step.warnings.length > 0 && (
                      <div className="mt-3 rounded-lg bg-destructive/5 p-3">
                        <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                          <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
                          주의
                        </h4>
                        <ul className="flex flex-col gap-1.5">
                          {step.warnings.map((w, i) => (
                            <li key={i} className="text-xs leading-relaxed text-muted-foreground">
                              • {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Cost Table */}
                    {step.costTable.length > 1 && (
                      <div className="mt-4 overflow-hidden rounded-lg border border-border/40">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="bg-muted/50">
                              <th className="px-3 py-2 text-left font-medium text-muted-foreground">규모</th>
                              <th className="px-3 py-2 text-left font-medium text-muted-foreground">예상 비용</th>
                            </tr>
                          </thead>
                          <tbody>
                            {step.costTable.map((row, i) => (
                              <tr key={i} className="border-t border-border/30">
                                <td className="px-3 py-2 text-foreground">{row.size}</td>
                                <td className="px-3 py-2 font-medium text-primary">{row.priceRange}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Checklist */}
                    <div className="mt-4">
                      <ChecklistSection items={step.checklist} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Providers for this tab */}
        {currentTab.providers.length > 0 && (
          <div>
            <h3 className="mb-3 text-base font-bold text-foreground">
              관련 업체
            </h3>
            <div className="flex flex-col gap-3">
              {currentTab.providers.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
