import React from "react";

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <mask
      id="mask0_945_4619"
      style={{ maskType: "alpha" }}
      width="24"
      height="24"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
    </mask>
    <g mask="url(#mask0_945_4619)">
      <path
        fill="#B6B6B8"
        d="M11.95 18c.35 0 .646-.12.888-.363.241-.241.362-.537.362-.887s-.12-.646-.362-.887a1.207 1.207 0 00-.888-.363c-.35 0-.646.12-.887.363a1.207 1.207 0 00-.363.887c0 .35.12.646.363.887.241.242.537.363.887.363zm-.9-3.85h1.85c0-.55.063-.983.188-1.3.125-.317.479-.75 1.062-1.3a7.494 7.494 0 001.025-1.238c.25-.391.375-.862.375-1.412 0-.933-.342-1.65-1.025-2.15-.683-.5-1.492-.75-2.425-.75-.95 0-1.72.25-2.313.75-.591.5-1.004 1.1-1.237 1.8l1.65.65c.083-.3.27-.625.563-.975.291-.35.737-.525 1.337-.525.533 0 .933.146 1.2.437.267.292.4.613.4.963 0 .333-.1.646-.3.938-.2.291-.45.562-.75.812-.733.65-1.183 1.142-1.35 1.475-.167.333-.25.942-.25 1.825zM12 22a9.738 9.738 0 01-3.9-.788 10.099 10.099 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 012 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 012.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0112 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 013.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0122 12a9.738 9.738 0 01-.788 3.9 10.098 10.098 0 01-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0112 22zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20z"
      ></path>
    </g>
  </svg>
);

export default Icon;