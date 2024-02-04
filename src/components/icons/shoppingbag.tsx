import React from "react";

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      fill="#fff"
      d="M15.16 12.16v-4.5h-4.5v-3h4.5V.16h3v4.5h4.5v3h-4.5v4.5h-3zm-6 19.5a2.889 2.889 0 01-2.119-.881 2.889 2.889 0 01-.881-2.119c0-.825.294-1.531.881-2.119a2.889 2.889 0 012.119-.881c.825 0 1.531.294 2.119.881.587.588.881 1.294.881 2.119 0 .825-.294 1.531-.881 2.119a2.889 2.889 0 01-2.119.881zm15 0a2.889 2.889 0 01-2.119-.881 2.889 2.889 0 01-.881-2.119c0-.825.294-1.531.881-2.119a2.889 2.889 0 012.119-.881c.825 0 1.531.294 2.119.881.587.588.881 1.294.881 2.119 0 .825-.294 1.531-.881 2.119a2.889 2.889 0 01-2.119.881zm-24-27v-3h4.912l6.375 13.5h10.5l5.85-10.5h3.413l-6.6 11.925c-.275.5-.644.887-1.106 1.162a2.918 2.918 0 01-1.519.413H10.81l-1.65 3h18v3h-18c-1.125 0-1.981-.488-2.569-1.462-.587-.976-.606-1.963-.056-2.963L8.56 16.06l-5.4-11.4h-3z"
    ></path>
  </svg>
);

export default Icon;
