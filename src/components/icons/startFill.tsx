import React from "react";

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="20"
    fill="none"
    viewBox="0 0 22 20"
  >
    <path
      fill="#F7B40A"
      d="M4.767 19.564L6.42 12.48.923 7.718l7.241-.628L11 .41l2.836 6.68 7.24.628-5.497 4.762 1.654 7.084L11 15.803l-6.233 3.761z"
    ></path>
  </svg>
);

export default Icon;
