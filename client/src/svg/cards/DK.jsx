
import React from "react";

function DK() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 -5 57 150"
    >
      <symbol id="c">
        <path d="M4 0l4 5-4 5-4-5z"></path>
      </symbol>
      <symbol id="b">
        <path d="M0 0h2v5l4-5h2L4 5l4 7H6L3 7H2v5H0z"></path>
      </symbol>
      <symbol id="e">
        <path d="M1 2l2 3 2-3 2 3 2-3v7H1z"></path>
        <path id="a" d="M1 0l1 1-1 1-1-1z"></path>
        <use transform="translate(4)" xlinkHref="#a"></use>
        <use transform="translate(8)" xlinkHref="#a"></use>
        <path d="M1 10h8v2H1z"></path>
      </symbol>
      <symbol id="d">
        <use x="6" y="6" xlinkHref="#b"></use>
        <use x="6" y="20" xlinkHref="#c"></use>
      </symbol>
      <path fill="#fff" d="M1.5 1.5h54v85h-54z"></path>
      <path d="M2 0h53l2 2v84l-2 2H2l-2-2V2zm0 2v84h53V2z"></path>
      <g fill="red">
        <use xlinkHref="#d"></use>
        <use transform="rotate(180 28.5 44)" xlinkHref="#d"></use>
        <use transform="matrix(2 0 0 2 18.5 32)" xlinkHref="#e"></use>
      </g>
    </svg>
  );
}

export default DK;
