import React from "react";

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="29"
    fill="none"
    viewBox="0 0 26 29"
  >
    <path
      fill="#1C1B1F"
      d="M3 25.667h5.577v-9.904h8.846v9.904H23v-15L13 3.135 3 10.667v15zm-2.5 2.5V9.417L13 .01l12.5 9.407v18.75H14.923v-9.904h-3.846v9.904H.5z"
    ></path>
  </svg>
);

export default Icon;
