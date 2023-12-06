import { FC } from "react";

export const GradientBackdrop: FC = () => {
  return (
    <svg
      viewBox="0 0 1200 682"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <g clip-path="url(#a)">
        <path fill="#fff" d="M0 0h1200v682H0z" />
        <circle cx="-299.5" cy="939.5" r="915.5" fill="url(#b)" />
        <circle cx="-299.5" cy="-22.5" r="915.5" fill="url(#c)" />
        <circle cx="599.5" cy="-22.5" r="915.5" fill="url(#d)" />
        <circle cx="599.5" cy="939.5" r="915.5" fill="url(#e)" />
        <circle cx="1499.5" cy="-22.5" r="915.5" fill="url(#f)" />
        <circle cx="1499.5" cy="939.5" r="915.5" fill="url(#g)" />
      </g>
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -619.5 320) scale(915.5)"
        >
          <stop stop-color="#F77" />
          <stop offset="1" stop-color="#F77" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -138.5 -161) scale(915.5)"
        >
          <stop stop-color="#FFC077" />
          <stop offset="1" stop-color="#FFC077" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="d"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 311 288.5) scale(915.5)"
        >
          <stop stop-color="#FDFF93" />
          <stop offset="1" stop-color="#FDFF93" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="e"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -170 769.5) scale(915.5)"
        >
          <stop stop-color="#FDFF93" />
          <stop offset="1" stop-color="#FDFF93" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="f"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 761 738.5) scale(915.5)"
        >
          <stop stop-color="#FF778F" />
          <stop offset="1" stop-color="#FF778F" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="g"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 280 1219.5) scale(915.5)"
        >
          <stop stop-color="#77FFF7" />
          <stop offset="1" stop-color="#77FFF7" stop-opacity="0" />
        </radialGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h1200v682H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
