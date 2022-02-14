
import React from "react";

function D8() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 -5 57 150"
    >
      <symbol id="b">
        <path d="M4 0l4 5-4 5-4-5z"></path>
      </symbol>
      <symbol id="a">
        <path d="M2 0h4l2 2v3L7 6l1 1v3l-2 2H2l-2-2V7l1-1-1-1V2zm0 2v2l1 1h2l1-1V2zm0 6v2h4V8L5 7H3z"></path>
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
        <use transform="matrix(1.2 0 0 1.2 16 11)" xlinkHref="#b"></use>
        <use transform="matrix(1.2 0 0 1.2 31.4 11)" xlinkHref="#b"></use>
        <use transform="matrix(1.2 0 0 1.2 23.7 24.5)" xlinkHref="#b"></use>
        <use transform="matrix(1.2 0 0 1.2 16 38)" xlinkHref="#b"></use>
        <use transform="matrix(1.2 0 0 1.2 31.4 38)" xlinkHref="#b"></use>
        <g transform="rotate(180 28.5 44)">
          <use transform="matrix(1.2 0 0 1.2 16 11)" xlinkHref="#b"></use>
          <use transform="matrix(1.2 0 0 1.2 31.4 11)" xlinkHref="#b"></use>
          <use transform="matrix(1.2 0 0 1.2 23.7 24.5)" xlinkHref="#b"></use>
        </g>
      </g>
    </svg>
  );
}

export default D8;
