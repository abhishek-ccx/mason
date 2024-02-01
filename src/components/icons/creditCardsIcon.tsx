import React from "react";

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="149"
    height="35"
    fill="none"
    viewBox="0 0 149 35"
    className={className}
  >
    <path
      fill="#fff"
      d="M1.26 7.294v20.022c0 .422.344.766.766.766h21.217c5.94 0 10.756-4.825 10.756-10.777 0-5.952-4.816-10.777-10.756-10.777H2.026a.766.766 0 00-.765.766z"
    ></path>
    <path
      fill="#000"
      d="M3.846 14.883H2.491v4.743h1.348c.717 0 1.235-.17 1.69-.547.54-.448.858-1.123.858-1.821 0-1.4-1.043-2.375-2.54-2.375zm1.079 3.563c-.29.263-.667.377-1.263.377h-.249v-3.136h.248c.597 0 .958.107 1.264.383.319.285.51.727.51 1.181.001.456-.19.91-.51 1.195zM7.736 14.883h-.923v4.743h.923v-4.743zM9.993 16.703c-.554-.205-.717-.34-.717-.596 0-.3.29-.526.688-.526.277 0 .504.114.745.384l.483-.634a2.07 2.07 0 00-1.391-.526c-.837 0-1.476.583-1.476 1.359 0 .654.297.988 1.164 1.3.362.128.546.214.639.27.184.121.277.292.277.492 0 .384-.306.669-.718.669-.44 0-.795-.22-1.007-.633l-.597.576c.425.625.936.903 1.64.903.96 0 1.632-.64 1.632-1.557 0-.755-.311-1.096-1.362-1.48zM11.647 17.258c0 1.394 1.092 2.475 2.498 2.475.398 0 .738-.078 1.158-.276v-1.09c-.37.371-.696.52-1.115.52-.93 0-1.59-.675-1.59-1.636 0-.91.681-1.629 1.547-1.629.44 0 .774.157 1.158.534v-1.089c-.405-.206-.739-.29-1.136-.29-1.399 0-2.52 1.102-2.52 2.481zM22.625 18.069l-1.264-3.186h-1.008l2.01 4.865h.496l2.045-4.865h-1.001l-1.278 3.186zM25.321 19.627h2.62v-.804h-1.697v-1.28h1.633v-.803h-1.633v-1.053h1.696v-.804h-2.619v4.744zM31.597 16.284c0-.888-.611-1.4-1.676-1.4h-1.369v4.742h.922v-1.905h.12l1.279 1.905h1.135l-1.49-1.998c.696-.141 1.079-.618 1.079-1.345zm-1.853.783h-.27v-1.436h.285c.575 0 .887.241.887.703 0 .476-.312.733-.902.733zM32.332 15.132c0-.083-.057-.129-.158-.129h-.134v.418h.1v-.162l.116.162h.122l-.137-.172c.059-.016.091-.059.091-.117zm-.175.057h-.017v-.11h.018c.049 0 .075.018.075.054 0 .038-.026.056-.076.056z"
    ></path>
    <path
      fill="#000"
      d="M32.194 14.847a.362.362 0 00-.363.364c0 .203.163.365.363.365.198 0 .36-.164.36-.365 0-.2-.162-.364-.36-.364zm-.001.664a.294.294 0 01-.29-.3c0-.166.13-.299.29-.299.159 0 .288.136.288.3 0 .164-.13.3-.288.3z"
    ></path>
    <path
      fill="#F47922"
      d="M20.616 17.25a2.509 2.509 0 01-2.507 2.511 2.51 2.51 0 01-2.507-2.511 2.509 2.509 0 012.507-2.512 2.51 2.51 0 012.507 2.512z"
    ></path>
    <path
      fill="#F47922"
      d="M34.566 6.145H2.026c-.634 0-1.148.514-1.148 1.15v20.02c0 .636.514 1.15 1.148 1.15h32.54c.634 0 1.147-.514 1.147-1.15V7.296c0-.636-.513-1.15-1.147-1.15zm-.567 11.16c0 5.952-4.816 10.777-10.756 10.777H2.026a.766.766 0 01-.765-.766V7.294c0-.422.343-.766.765-.766h21.217c5.94 0 10.756 4.825 10.756 10.777z"
    ></path>
    <path
      fill="#1434CB"
      d="M54.836 11.805l-4.783 11.42h-3.121l-2.354-9.114c-.143-.561-.267-.767-.702-1.003-.71-.385-1.881-.747-2.912-.971l.07-.332h5.023c.64 0 1.216.427 1.362 1.164l1.243 6.609 3.072-7.773h3.102zm12.228 7.691c.013-3.014-4.165-3.18-4.136-4.526.009-.41.399-.846 1.252-.957.423-.055 1.589-.097 2.91.511l.52-2.421a7.928 7.928 0 00-2.762-.507c-2.919 0-4.972 1.553-4.99 3.775-.018 1.644 1.466 2.562 2.585 3.108 1.15.56 1.537.919 1.532 1.42-.008.765-.917 1.104-1.767 1.117-1.484.023-2.346-.402-3.032-.721l-.535 2.502c.69.316 1.963.593 3.283.607 3.102 0 5.13-1.534 5.14-3.908zm7.706 3.729h2.73l-2.383-11.42h-2.52c-.567 0-1.045.33-1.256.838l-4.43 10.582h3.1l.615-1.706h3.788l.356 1.706zm-3.294-4.046l1.554-4.288.894 4.288h-2.448zm-12.422-7.374l-2.44 11.42H53.66l2.442-11.42h2.951z"
    ></path>
    <path fill="#FF5F00" d="M103.744 10.372h-7.906v14.256h7.906V10.372z"></path>
    <path
      fill="#EB001B"
      d="M96.34 17.5c0-2.77 1.28-5.415 3.439-7.128-3.915-3.097-9.612-2.417-12.7 1.537-3.061 3.929-2.384 9.62 1.557 12.719a8.986 8.986 0 0011.168 0A9.083 9.083 0 0196.34 17.5z"
    ></path>
    <path
      fill="#F79E1B"
      d="M114.41 17.5c0 5.012-4.041 9.067-9.035 9.067-2.033 0-3.99-.68-5.571-1.94 3.915-3.097 4.592-8.79 1.506-12.743-.452-.555-.954-1.083-1.506-1.512 3.915-3.097 9.612-2.417 12.674 1.537a8.999 8.999 0 011.932 5.591z"
    ></path>
    <path fill="#fff" d="M144.534 28.47h-22.106V6.327h22.106V28.47z"></path>
    <path
      fill="#006FCF"
      d="M144.534 28.47v-3.508h-2.666l-1.373-1.521-1.38 1.52h-8.793v-7.088h-2.839l3.521-7.98h3.395l1.212 2.733V9.893h4.202l.73 2.06.734-2.06h3.257V6.326h-22.106V28.47h22.106zm-2.217-4.396h2.217l-2.933-3.116 2.933-3.081h-2.182l-1.812 1.983-1.794-1.983h-2.218l2.916 3.098-2.916 3.1h2.156l1.821-2.002 1.812 2.001zm.519-3.114l1.698 1.81v-3.605l-1.698 1.795zm-9.887 1.68v-.965h3.49v-1.4h-3.49v-.964h3.579v-1.434h-5.267v6.197h5.267V22.64h-3.579zm9.915-5.663h1.67V10.78h-2.598l-1.388 3.86-1.378-3.86h-2.643v6.197h1.671V12.64l1.591 4.338h1.484l1.591-4.347v4.347zm-8.237 0h1.9l-2.73-6.197h-2.175l-2.731 6.197h1.856l.513-1.24h2.846l.521 1.24zm-1.104-2.63h-1.68l.84-2.027.84 2.028z"
    ></path>
  </svg>
);

export default Icon;