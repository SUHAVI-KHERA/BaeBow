import { cn } from "@/lib/utils";

export function Logo({
  className,
  textClassName,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { textClassName?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)} {...props}>
      <svg
        aria-hidden="true"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-7 text-primary shrink-0"
      >
        <path
          d="M9.98291 10.1509C9.98291 10.1509 9.09137 5.62334 12.0223 3.6962C14.9533 1.76905 18.2372 4.16102 18.9958 7.5501C19.7544 10.9392 16.5933 13.6339 14.1207 13.8491C11.6481 14.0643 9.98291 10.1509 9.98291 10.1509Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M13.9213 10.1509C13.9213 10.1509 14.8128 5.62334 11.8819 3.6962C8.95088 1.76905 5.66703 4.16102 4.90842 7.5501C4.14981 10.9392 7.31093 13.6339 9.78351 13.8491C12.2561 14.0643 13.9213 10.1509 13.9213 10.1509Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M19 7.5L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 7.5L2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14V21L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        className={cn(
          "font-thin tracking-widest uppercase",
          textClassName
        )}
      >
        BaeBow
      </span>
    </div>
  );
}
