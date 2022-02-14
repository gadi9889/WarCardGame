
import React from "react";

function H4() {
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
        <path d="M5 0h2v6h1v2H7v4H5V8H0V6zm0 3L2 6h3z"></path>
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
        <use transform="matrix(1.5 0 0 1.5 16 11)" xlinkHref="#b"></use>
        <use transform="matrix(1.5 0 0 1.5 29 11)" xlinkHref="#b"></use>
        <g transform="rotate(180 28.5 44)">
          <use transform="matrix(1.5 0 0 1.5 16 11)" xlinkHref="#b"></use>
          <use transform="matrix(1.5 0 0 1.5 29 11)" xlinkHref="#b"></use>
        </g>
      </g>
    </svg>
  );
}

export default H4;
