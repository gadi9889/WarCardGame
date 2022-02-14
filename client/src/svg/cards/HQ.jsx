
import React from "react";

function HQ() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 -5 57 150"
    >
      <symbol id="b">
        <path d="M2 0l2 2 2-2 2 2v3l-4 5-4-5V2z"></path>
      </symbol>
      <symbol id="a">
        <path d="M2 0h4l2 2v6L7 9l1 1v2H6v-2H2L0 8V2zm0 2v6h4V2z"></path>
      </symbol>
      <symbol id="d">
        <path d="M1 0l2 3 2-3 2 3 2-3v10H1zm0 11h8v1H1z"></path>
      </symbol>
      <symbol id="c">
        <use x="6" y="6" xlinkHref="#a"></use>
        <use x="6" y="20" xlinkHref="#b"></use>
      </symbol>
      <path fill="#fff" d="M1.5 1.5h54v85h-54z"></path>
      <path d="M2 0h53l2 2v84l-2 2H2l-2-2V2zm0 2v84h53V2z"></path>
      <g fill="red">
        <use xlinkHref="#c"></use>
        <use transform="rotate(180 28.5 44)" xlinkHref="#c"></use>
        <use transform="matrix(2 0 0 2 18.5 32)" xlinkHref="#d"></use>
      </g>
    </svg>
  );
}

export default HQ;
