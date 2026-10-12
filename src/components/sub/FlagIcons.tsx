interface FlagIconProps {
  className?: string;
}

export function GbFlagIcon({ className }: FlagIconProps) {
  return (
    <svg viewBox="0 0 60 36" className={className} aria-hidden="true">
      <rect width="60" height="36" fill="#00247d" />
      <path d="M0 0 60 36M60 0 0 36" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 60 36M60 0 0 36" stroke="#cf142b" strokeWidth="2" />
      <path d="M30 0V36M0 18H60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0V36M0 18H60" stroke="#cf142b" strokeWidth="6" />
    </svg>
  );
}

export function ItFlagIcon({ className }: FlagIconProps) {
  return (
    <svg viewBox="0 0 60 36" className={className} aria-hidden="true">
      <rect width="20" height="36" fill="#008C45" />
      <rect x="20" width="20" height="36" fill="#F4F5F0" />
      <rect x="40" width="20" height="36" fill="#CD212A" />
    </svg>
  );
}
