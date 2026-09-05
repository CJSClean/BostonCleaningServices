interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
}

// Lighthouse beacon mark with a two-line wordmark.
export default function Logo({ tone = "dark", className = "h-11" }: LogoProps) {
  const ink = tone === "dark" ? "#0e2a47" : "#ffffff";
  const sub = tone === "dark" ? "#4a5a6e" : "#c7d3e2";
  return (
    <svg
      viewBox="0 0 300 56"
      className={`${className} w-auto`}
      role="img"
      aria-label="Boston Cleaning Services"
    >
      <g transform="translate(2 2)">
        <path d="M14 46h24l-4-6H18z" fill="#c9512f" />
        <path d="M18 40 21 14h10l3 26z" fill={ink} />
        <path d="M21 14h10v6H21z" fill="#c9512f" />
        <path d="M22 8h8l-1-6h-6z" fill={ink} />
        <path d="M17 26h18M18 33h16" stroke="#c9512f" strokeWidth="2" />
        <path d="M6 12 12 15M46 12l-6 3M4 22h7M48 22h-7" stroke="#c9512f" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 50h48" stroke={ink} strokeWidth="2" strokeLinecap="round" />
      </g>
      <text
        x="64"
        y="27"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight="600"
        fontSize="24"
        fill={ink}
      >
        Boston
      </text>
      <text
        x="64"
        y="47"
        fontFamily="var(--font-dm-sans), system-ui, sans-serif"
        fontWeight="600"
        fontSize="13.5"
        letterSpacing="2.2"
        fill={sub}
      >
        CLEANING SERVICES
      </text>
    </svg>
  );
}
