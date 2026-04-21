import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

export function Logo({
  size = 32,
  className,
  textClassName = "text-lg",
  showText = true,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="이사꿀팁"
        role="img"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoHex" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="55%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="logoShine" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="logoDrop" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFF7ED" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <path
          d="M20 2.5 L34.2 10.75 L34.2 27.25 L20 35.5 L5.8 27.25 L5.8 10.75 Z"
          fill="url(#logoHex)"
          stroke="#B45309"
          strokeWidth="0.4"
          strokeOpacity="0.25"
          strokeLinejoin="round"
        />

        <path
          d="M20 2.5 L34.2 10.75 L20 19 L5.8 10.75 Z"
          fill="url(#logoShine)"
        />

        <path
          d="M20 12.5 C22 16 24.2 18.8 24.2 21.4 C24.2 23.9 22.3 25.9 20 25.9 C17.7 25.9 15.8 23.9 15.8 21.4 C15.8 18.8 18 16 20 12.5 Z"
          fill="url(#logoDrop)"
        />

        <circle cx="18.5" cy="21.5" r="1.1" fill="#FCD34D" fillOpacity="0.8" />
      </svg>

      {showText && (
        <span
          className={cn(
            "font-extrabold tracking-tight text-foreground",
            textClassName,
          )}
        >
          이사
          <span className="bg-gradient-to-br from-amber-500 to-orange-600 bg-clip-text text-transparent">
            꿀팁
          </span>
        </span>
      )}
    </div>
  );
}
