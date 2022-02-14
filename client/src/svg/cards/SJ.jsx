
import React from "react";

function SJ() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 -5 57 150"
    >
      <symbol id="b">
        <path d="M4 0l4 5v2L7 8H6L5 7l1 3H2l1-3-1 1H1L0 7V5z"></path>
      </symbol>
      <symbol id="a">
        <path d="M0 0h8v10l-2 2H2l-2-2V7h2v3h4V2H0z"></path>
      </symbol>
      <symbol id="d">
        <path d="M4 0h1v2l2-2 1 2v3L7 7 5 5v7H4V4H2V3h2z"></path>
      </symbol>
      <symbol id="c">
        <use x="6" y="6" xlinkHref="#a"></use>
        <use x="6" y="20" xlinkHref="#b"></use>
      </symbol>
      <path fill="#fff" d="M1.5 1.5h54v85h-54z"></path>
      <path d="M2 0h53l2 2v84l-2 2H2l-2-2V2zm0 2v84h53V2z"></path>
      <use xlinkHref="#c"></use>
      <use transform="rotate(180 28.5 44)" xlinkHref="#c"></use>
      <use transform="matrix(2 0 0 2 18.5 32)" xlinkHref="#d"></use>
    </svg>
  );
}

export default SJ;
