import React from "react";

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    fill="none"
    viewBox="0 0 36 36"
    className={className}
  >
    <path
      fill="#000"
      d="M13.594 25v-1.89l4.86-4.59c.384-.348.666-.66.846-.936.18-.276.3-.528.36-.756.072-.228.108-.438.108-.63 0-.504-.174-.888-.522-1.152-.336-.276-.834-.414-1.494-.414-.528 0-1.02.102-1.476.306a2.869 2.869 0 00-1.134.954l-2.124-1.368c.48-.72 1.152-1.29 2.016-1.71.864-.42 1.86-.63 2.988-.63.936 0 1.752.156 2.448.468.708.3 1.254.726 1.638 1.278.396.552.594 1.212.594 1.98 0 .408-.054.816-.162 1.224-.096.396-.3.816-.612 1.26-.3.444-.744.942-1.332 1.494l-4.032 3.798-.558-1.062h7.11V25h-9.522z"
    ></path>
    <circle cx="18" cy="18" r="17" stroke="#000" strokeWidth="2"></circle>
  </svg>
);

export default Icon;