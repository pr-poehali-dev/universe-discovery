export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* House icon */}
      <path d="M20 6L34 18V36H26V26H14V36H6V18L20 6Z" fill="white" />
      <rect x="15" y="26" width="10" height="10" fill="#0a0a0a" />
      {/* ЖКХ text */}
      <text x="44" y="29" fontFamily="monospace" fontSize="16" fontWeight="500" fill="white" letterSpacing="2">ЖКХ</text>
      {/* Separator */}
      <rect x="98" y="12" width="1" height="16" fill="white" opacity="0.3" />
      {/* subtitle */}
      <text x="106" y="23" fontFamily="monospace" fontSize="8" fontWeight="400" fill="white" opacity="0.5" letterSpacing="1">УПРАВЛЯЮЩАЯ</text>
      <text x="106" y="33" fontFamily="monospace" fontSize="8" fontWeight="400" fill="white" opacity="0.5" letterSpacing="1">КОМПАНИЯ</text>
    </svg>
  );
};
