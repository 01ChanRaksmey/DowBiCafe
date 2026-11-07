const tableGroups = [
  { name: "Window seats", tables: [1, 2, 3] },
  { name: "Main room", tables: [4, 5, 6] },
  { name: "Cozy corner", tables: [7, 8] },
];

export default function TablePicker({ guestCount, selectedTables, onToggle }) {
  return (
    <div className="mt-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="font-display text-xl font-semibold text-main">
            Pick your table{guestCount > 1 ? "s" : ""}
          </h3>
          <p className="mt-1 font-sans text-sm text-muted">
            Choose at least one and no more than one per guest.
          </p>
        </div>
        <p className="font-sans text-sm text-muted" aria-live="polite">
          {selectedTables.length} of {guestCount} maximum selected
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-border bg-primary p-4 sm:p-6">
        <div className="rounded-xl border border-dashed border-border bg-footbg px-4 py-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-logo">
          Counter &amp; coffee bar
        </div>
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {tableGroups.map((group) => (
            <section
              key={group.name}
              className="rounded-xl border border-border p-3"
            >
              <h4 className="mb-3 font-sans text-sm font-semibold text-main">
                {group.name}
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {group.tables.map((table) => {
                  const isSelected = selectedTables.includes(table);
                  const limitReached =
                    selectedTables.length >= guestCount && !isSelected;

                  return (
                    <button
                      key={table}
                      type="button"
                      disabled={limitReached}
                      aria-pressed={isSelected}
                      aria-label={`Table T-${String(table).padStart(2, "0")}, ${
                        isSelected ? "selected" : "available"
                      }`}
                      onClick={() => onToggle(table)}
                      className={`min-h-16 rounded-xl border p-2 text-center font-sans transition-colors ${
                        isSelected
                          ? "border-main bg-main text-primary"
                          : limitReached
                            ? "cursor-not-allowed border-border bg-footbg text-muted/50"
                            : "border-border bg-primary text-main hover:border-main"
                      }`}
                    >
                      <span className="block text-sm font-bold">
                        T-{String(table).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block text-xs">
                        {isSelected ? "Selected" : "Available"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
