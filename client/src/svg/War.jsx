import React from "react";

function War() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="420mm"
      height="594mm"
      viewBox="0 0 420 594"
      className="word"
    >
      <defs>
        <path id="c" d="M0 140.484h833.873v276.934H0z"></path>
        <path id="b" d="M-251.25 199.919h1263.004v461.976H-251.25z"></path>
        <linearGradient>
          <stop offset="0" stopColor="#fff"></stop>
        </linearGradient>
      </defs>
      <text
        transform="matrix(.1495 0 0 .20013 -6.168 -27.937)"
        style={{
          lineHeight: "1.05",
          InkscapeFontSpecification: "'Edwardian Script ITC Semi-Expanded'",
          whiteSpace: "pre",
        }}
        fill="none"
        stroke="#fff"
        fontFamily="Edwardian Script ITC"
        fontSize="266.667"
        fontStretch="semi-expanded"
        fontWeight="400"
        letterSpacing="0"
      >
        <tspan x="0" y="339.461">
          WAR
        </tspan>
      </text>
    </svg>
  );
}

export default War;
