const steps = ["Visit details", "Contact details"];

export default function BookingProgress({ currentStep }) {
  return (
    <ol className="mx-auto mb-8 grid max-w-md grid-cols-2">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCurrent = currentStep === stepNumber;
        const isComplete = currentStep > stepNumber;

        return (
          <li
            key={label}
            className="flex items-center justify-center gap-2 font-sans text-xs sm:text-sm"
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border font-semibold ${
                isCurrent || isComplete
                  ? "border-main bg-main text-primary"
                  : "border-border bg-primary text-muted"
              }`}
              aria-current={isCurrent ? "step" : undefined}
            >
              {isComplete ? "✓" : stepNumber}
            </span>
            <span
              className={isCurrent ? "font-semibold text-main" : "text-muted"}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
