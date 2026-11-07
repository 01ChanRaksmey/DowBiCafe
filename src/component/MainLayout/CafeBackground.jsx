export default function CafeBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 180 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-24 w-24 text-[var(--color-background-art)] sm:left-8 sm:top-32 sm:w-36"
      >
        <path
          d="M17 81C19 49 40 28 72 28C104 28 128 47 139 78C125 101 105 111 77 110C49 109 29 99 17 81Z"
          fill="var(--color-background-art-fill)"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M29 78C34 57 47 43 65 38L53 91M59 96L80 34L88 97M96 96L105 42C119 50 129 63 134 80"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 81C20 93 23 99 30 104M140 78C137 91 132 98 125 103"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-8 top-1/3 hidden w-20 text-[var(--color-background-art)] sm:block sm:w-24"
      >
        <g transform="translate(35 45) rotate(-30)">
          <ellipse
            rx="13"
            ry="21"
            fill="var(--color-background-art-fill)"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path d="M0-16C-6-7-6 7 0 16" stroke="currentColor" strokeWidth="2.5" />
        </g>
        <g transform="translate(77 53) rotate(28)">
          <ellipse
            rx="11"
            ry="18"
            fill="var(--color-background-art-fill)"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path d="M0-14C-5-6-5 6 0 14" stroke="currentColor" strokeWidth="2.5" />
        </g>
      </svg>

      <svg
        viewBox="0 0 420 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 h-56 w-56 text-[var(--color-background-art)] sm:h-72 sm:w-72 md:h-80 md:w-80"
      >
        <ellipse
          cx="226"
          cy="292"
          rx="132"
          ry="24"
          fill="var(--color-background-art-fill)"
          stroke="currentColor"
          strokeWidth="3"
        />
        <ellipse
          cx="226"
          cy="287"
          rx="105"
          ry="13"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M143 127C143 119.268 149.268 113 157 113H294C301.732 113 308 119.268 308 127L292 239C289.824 254.237 276.78 265.5 261.388 265.5H189.612C174.22 265.5 161.176 254.237 159 239L143 127Z"
          fill="var(--color-background-art-fill)"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M307 149H326C347.539 149 365 166.461 365 188C365 209.539 347.539 227 326 227H296"
          stroke="currentColor"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <ellipse
          cx="225"
          cy="126"
          rx="80"
          ry="16"
          fill="var(--color-background-coffee)"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M183 126C197 117 210 135 224 126C238 117 252 135 267 126"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M196 94C183 78 205 68 194 51M226 91C212 72 234 61 222 40M255 94C243 78 263 70 253 54"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <g transform="translate(101 235) rotate(-18)">
          <path
            d="M-39 13C-42-10-24-31 0-30C24-31 42-10 39 13C31 33-31 33-39 13Z"
            fill="var(--color-background-art-fill)"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M-28 9C-24-7-13-19 0-22C13-19 24-7 28 9M-14 17C-11 3-6-6 0-13C6-6 11 3 14 17M-2 20C-1 7 0-3 0-13"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g transform="translate(77 165)">
          <path
            d="M-22 2C-22-17-10-30 0-30C10-30 22-17 22 2L17 23H-17L-22 2Z"
            fill="var(--color-background-art-fill)"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M-17 4H17L13 24H-13L-17 4Z"
            fill="var(--color-background-coffee)"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M-11 10L-9 20M0 10V20M11 10L9 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="0" cy="-24" r="4" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}
