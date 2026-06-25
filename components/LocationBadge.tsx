import { useState } from "react";
import { Check, MapPin, Copy } from "lucide-react"; // All icons from lucide

interface LocationBadgeProps {
  address: string;
  variant?: "default" | "subtle" | "prominent" | "compact";
  showCopy?: boolean;
  onClick?: () => void;
  className?: string;
}

export function LocationBadge({
  address,
  variant = "default",
  showCopy = true,
  onClick,
  className = "",
}: LocationBadgeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const variants = {
    default: {
      container:
        "inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-orange-50 border border-orange-200 hover:border-orange-300 hover:bg-orange-100/50 transition-all duration-200 group",
      icon: "w-4 h-4 text-orange-600 group-hover:text-orange-700 transition-colors",
      text: "text-sm font-semibold text-gray-800",
    },
    subtle: {
      container:
        "inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 hover:bg-gray-150 transition-colors group",
      icon: "w-3.5 h-3.5 text-gray-600 group-hover:text-gray-700 transition-colors",
      text: "text-xs font-medium text-gray-700",
    },
    prominent: {
      container:
        "inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-300 shadow-sm hover:shadow-md hover:border-orange-400 transition-all duration-200 group cursor-pointer",
      icon: "w-5 h-5 text-orange-600 group-hover:scale-110 transition-transform",
      text: "text-sm font-bold text-gray-900",
    },
    compact: {
      container:
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-100 border border-orange-200 hover:bg-orange-150 transition-colors group",
      icon: "w-3 h-3 text-orange-600 group-hover:text-orange-700",
      text: "text-xs font-medium text-gray-700",
    },
  };

  const style = variants[variant];

  return (
    <div
      className={`${style.container} ${className} mb-2`}
      onClick={onClick}
      role="region"
      aria-label={`Location: ${address}`}
    >
      <MapPin className={style.icon} strokeWidth={2.5} />
      <span className={style.text}>{address}</span>

      {showCopy && (
        <button
          onClick={handleCopy}
          className="ml-1 p-1 rounded hover:bg-white/50 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy address"
          type="button"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
          ) : (
            <Copy
              className="w-3.5 h-3.5 text-gray-500 hover:text-gray-700"
              strokeWidth={2}
            />
          )}
        </button>
      )}
    </div>
  );
}
