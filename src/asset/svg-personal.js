'use client';

export default function Personal() {
  return (
    <>
        <style>
        {`
            #matrix {
                width: 100%;
                height: 100%;
                max-width: 800px;
                max-height: 800px;
                min-width: 300px;
                min-height: 300px;
                display: block
            }

            .big-circle, .small-circle, .medium-circle {
                fill: none;
                stroke: black;
            }

            .matrix-container,
            .compatibility-container {
                display: none;
                width: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .cls-3,
            .cls-4,
            .cls-18 {
                stroke-width: 1.5px;
                stroke-miterlimit: 10;
                stroke: white;
                fill: none;
            }

            .cls-4 {
                stroke-dasharray: none;
            }

            .cls-5,
            .cls-6 {
                stroke: #b653f7;
                fill: #b653f7;
            }

            .cls-7,
            .cls-8 {
                stroke: #ea4631;
                fill: #ea4631;
            }

            .cls-10 {
                fill: #b653f7;
            }

            .cls-13 {
                fill: #3d54f5;
            }

            .cls-15 {
                fill: #74e0f8;
            }

            .cls-19 {
                fill: #ea4631;
            }

            .cls-22 {
                fill: #ed7233;
            }

            .cls-25 {
                fill: #ebdc00;
            }

            .cls-26 {
                fill: #b6fd57;
            }

            .cls-24,
            .cls-21,
            .cls-23,
            .cls-53 {
                fill: #fffcf0;
            }

            .matrix-value-point {
                text-anchor: middle;
                alignment-baseline: middle;
            }

            .cls-28 {
                font-size: 12.9501px;
                line-height: 11px;
            }

            .cls-29 {
                font-size: 12.0251px;
                line-height: 10px;
            }

            .cls-33 {
                font-size: 12px;
                line-height: 81.9%;
            }

            .cls-43 {
                font-size: 5.76471px;
                line-height: 81.9%;
            }

            .cls-44 {
                font-size: 10px;
                line-height: 81.9%;
            }

            .cls-54,
            .cls-55,
            .cls-56 {
                font-size: 29.7851px;
                line-height: 37px;
            }

            .cls-57,
            .cls-58 {
                font-size: 17.2946px;
                line-height: 22px;
            }

            .cls-59,
            .cls-60 {
                font-size: 21.1378px;
                line-height: 26px;
            }

            .cls-61 {
                font-size: 6px;
                line-height: 81.9%;
            }

            .cls-28,
            .cls-29,
            .cls-33,
            .cls-43,
            .cls-44,
            .cls-54,
            .cls-57,
            .cls-59,
            .cls-61 {
                fill: #f5f5f5;
            }

            .cls-55,
            .cls-58,
            .cls-60 {
                fill: #000000;
            }

            .cls-56 {
                fill: #d2b154;
            }
                
            .pento {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
            }
        `}
            
        </style>
        
        <div className="pento" id="matrix-con">
            <svg viewBox="0 0 680 680" id="matrix" preserveAspectRatio="xMidYMid meet">
                <g id="matrix-frame" transform="translate(10, 50)">
                <rect
                    className="cls-3"
                    x="163.63"
                    y="126.14"
                    width="340.16"
                    height="340.16"
                ></rect>
                <rect
                    className="cls-3"
                    x="227.87"
                    y="127.54"
                    width="340.16"
                    height="340.16"
                    transform="translate(-158.13 367.16) rotate(-45)"
                ></rect>
                <polygon
                    className="cls-4"
                    points="333.7 7.76 537.64 92.28 622.17 296.22 537.64 501.16 333.7 584.68 129.76 500.16 45.24 296.22 129.76 92.28 333.7 7.76"
                ></polygon>
                <line
                    className="cls-3"
                    x1="333.7"
                    y1="27.76"
                    x2="333.7"
                    y2="564.68"
                ></line>
                <line
                    className="cls-3"
                    x1="65.24"
                    y1="296.22"
                    x2="602.17"
                    y2="296.22"
                ></line>

                <g>
                    <line
                    className="cls-5"
                    x1="442"
                    y1="405"
                    x2="226"
                    y2="189"
                    ></line>
                    <polygon
                    className="cls-6"
                    points="441 402 439 404 442 405 441 402"
                    ></polygon>
                    <polygon
                    className="cls-6"
                    points="226 189 229 190 227 192 226 189"
                    ></polygon>
                </g>

                <g>
                    <line
                    className="cls-7"
                    x1="442"
                    y1="189"
                    x2="226"
                    y2="405"
                    ></line>
                    <polygon
                    className="cls-8"
                    points="442 189 439 190 441 192 442 189"
                    ></polygon>
                    <polygon
                    className="cls-8"
                    points="226 405 227 402 229 404 226 405"
                    ></polygon>
                </g>

                <line className="cls-18" x1="502" y1="297" x2="335" y2="465"></line>
                <text
                    className="cls-44"
                    transform="translate(235 185) rotate(45)"
                >
                    Garis leluhur Laki-laki
                </text>
                <text
                    className="cls-44"
                    transform="translate(351.7 264.98) rotate(-45)"
                >
                    Garis leluhur Perempuan
                </text>

                <g transform="translate(100, 100)">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 27 27"
                    >
                    <path
                        className="cls-53"
                        d="M437.54,366.8c-6.26,0-7.12,6-7.28,6s-1.42-6-7.24-6c-7,0-8.91,5.9-8.51,9.45.71,6.14,15.74,18.54,15.74,18.54s15.06-12.4,15.77-18.54C446.43,372.7,444.55,366.8,437.54,366.8Z"
                        transform="translate(-70 -8)"
                    ></path>
                    </svg>
                </g>

                <g transform="translate(410, 345)">
                    <text className="cls-56">$</text>
                </g>
                </g>

                <g id="points-basic" transform="translate(10, 50)">
                <circle
                    className="cls-10 big-circle"
                    cx="79.2"
                    cy="297"
                    r="32.5"
                ></circle>
                <text
                    className="cls-54 matrix-value-point"
                    id="apoint"
                    transform="translate(79.2 299)"
                ></text>

                <circle
                    className="cls-10 big-circle"
                    cx="333.7"
                    cy="42"
                    r="32.5"
                ></circle>
                <text
                    className="cls-54 matrix-value-point"
                    id="bpoint"
                    transform="translate(333.7 42)"
                ></text>

                <circle
                    className="cls-19 big-circle"
                    cx="587.13"
                    cy="297"
                    r="32.5"
                ></circle>
                <text
                    className="cls-54 matrix-value-point"
                    id="cpoint"
                    transform="translate(587.4 299)"
                ></text>

                <circle
                    className="cls-19 big-circle"
                    cx="332.7"
                    cy="554"
                    r="32.5"
                ></circle>
                <text
                    className="cls-54 matrix-value-point"
                    id="dpoint"
                    transform="translate(332.7 557)"
                ></text>

                <circle
                    className="cls-25 big-circle"
                    cx="334"
                    cy="297"
                    r="32.5"
                ></circle>
                <text
                    className="cls-55 clss matrix-value-point"
                    id="epoint"
                    transform="translate(334 299)"
                ></text>

                <circle
                    className="cls-24 big-circle"
                    cx="151"
                    cy="114.22"
                    r="32.5"
                ></circle>
                <text
                    className="cls-55 matrix-value-point"
                    id="fpoint"
                    transform="translate(151 115)"
                ></text>

                <circle
                    className="cls-24 big-circle"
                    cx="515.1"
                    cy="114.22"
                    r="32.5"
                ></circle>
                <text
                    className="cls-55 matrix-value-point"
                    id="gpoint"
                    transform="translate(515.1 115)"
                ></text>

                <circle
                    className="cls-24 big-circle"
                    cx="514.1"
                    cy="479.62"
                    r="32.5"
                ></circle>
                <text
                    className="cls-55 matrix-value-point"
                    id="ipoint"
                    transform="translate(514.1 481)"
                ></text>

                <circle
                    className="cls-24 big-circle"
                    cx="153"
                    cy="479.62"
                    r="32.5"
                ></circle>
                <text
                    className="cls-55 matrix-value-point"
                    id="hpoint"
                    transform="translate(153 481)"
                ></text>

                <circle
                    className="cls-22 small-circle"
                    cx="332.59"
                    cy="466"
                    r="20"
                ></circle>
                <text
                    className="cls-57 matrix-value-point"
                    id="jpoint"
                    transform="translate(332.69 466)"
                ></text>

                <circle
                    className="cls-22 small-circle"
                    cx="500"
                    cy="297"
                    r="20"
                ></circle>
                <text
                    className="cls-57 matrix-value-point"
                    id="npoint"
                    transform="translate(500 299)"
                ></text>

                <circle
                    className="cls-21 small-circle"
                    cx="418.18"
                    cy="380.69"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="lpoint"
                    transform="translate(418.18 382)"
                ></text>

                <circle
                    className="cls-21 small-circle"
                    cx="375"
                    cy="424"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="kpoint"
                    transform="translate(375 426)"
                ></text>

                <circle
                    className="cls-21 small-circle"
                    cx="461"
                    cy="338"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="mpoint"
                    transform="translate(461 338)"
                ></text>

                <circle
                    className="cls-15 small-circle"
                    cx="165.61"
                    cy="297"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="spoint"
                    transform="translate(165.61 299)"
                ></text>

                <circle
                    className="cls-15 small-circle"
                    cx="333.7"
                    cy="129"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="tpoint"
                    transform="translate(333.7 131)"
                ></text>

                <circle
                    className="cls-13 medium-circle"
                    cx="127.11"
                    cy="297"
                    r="23"
                ></circle>
                <text
                    className="cls-59 matrix-value-point"
                    id="opoint"
                    transform="translate(127.11 299)"
                ></text>

                <circle
                    className="cls-13 medium-circle"
                    cx="333.7"
                    cy="90.62"
                    r="23"
                ></circle>
                <text
                    className="cls-59 matrix-value-point"
                    id="ppoint"
                    transform="translate(333.7 92)"
                ></text>

                <circle
                    className="cls-23 medium-circle"
                    cx="333"
                    cy="505"
                    r="23"
                ></circle>
                <text
                    className="cls-60 matrix-value-point"
                    id="rpoint"
                    transform="translate(333 505)"
                ></text>

                <circle
                    className="cls-23 medium-circle"
                    cx="538.5"
                    cy="297"
                    r="23"
                ></circle>
                <text
                    className="cls-60 matrix-value-point"
                    id="qpoint"
                    transform="translate(538.5 299)"
                ></text>

                <circle
                    className="cls-26 small-circle"
                    cx="245.26"
                    cy="297"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="wpoint"
                    transform="translate(245.26 299)"
                ></text>

                <circle
                    className="cls-26 small-circle"
                    cx="333.7"
                    cy="203"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="xpoint"
                    transform="translate(333.7 204)"
                ></text>

                <circle
                    className="cls-21 small-circle"
                    cx="212"
                    cy="175.93"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="f2point"
                    transform="translate(212 179)"
                ></text>

                <circle
                    className="cls-23 medium-circle"
                    cx="184.71"
                    cy="149.53"
                    r="23"
                ></circle>
                <text
                    className="cls-60 matrix-value-point"
                    id="f1point"
                    transform="translate(184.71 151)"
                ></text>

                <circle
                    className="cls-21 small-circle"
                    cx="455.4"
                    cy="177.53"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="g2point"
                    transform="translate(455.4 179)"
                ></text>

                <circle
                    className="cls-23 medium-circle"
                    cx="480.79"
                    cy="149.13"
                    r="23"
                ></circle>
                <text
                    className="cls-60 matrix-value-point"
                    id="g1point"
                    transform="translate(480.79 151)"
                ></text>

                <circle
                    className="cls-21 small-circle"
                    cx="454.4"
                    cy="416.91"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="i2point"
                    transform="translate(454.4 416.91)"
                ></text>

                <circle
                    className="cls-23 medium-circle"
                    cx="479.79"
                    cy="445.31"
                    r="23"
                ></circle>
                <text
                    className="cls-60 matrix-value-point"
                    id="i1point"
                    transform="translate(479.79 447)"
                ></text>

                <circle
                    className="cls-21 small-circle"
                    cx="215"
                    cy="419"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="h2point"
                    transform="translate(215 419)"
                ></text>

                <circle
                    className="cls-23 medium-circle"
                    cx="188.71"
                    cy="446.7"
                    r="23"
                ></circle>
                <text
                    className="cls-60 matrix-value-point"
                    id="h1point"
                    transform="translate(188.71 447)"
                ></text>

                <circle
                    className="cls-21 small-circle"
                    cx="420.54"
                    cy="297"
                    r="20"
                ></circle>
                <text
                    className="cls-58 matrix-value-point"
                    id="vpoint"
                    transform="translate(420.54 299)"
                ></text>

                <circle
                    className="cls-23 medium-circle"
                    cx="382"
                    cy="297"
                    r="23"
                ></circle>
                <text
                    className="cls-60 matrix-value-point"
                    id="upoint"
                    transform="translate(382 299)"
                ></text>
                </g>

                <g id="points-years" transform="translate(10, 50)">
                <text className="cls-28" transform="translate(20 295)">
                    0
                    <tspan x="-10" y="10">tahun</tspan>
                    <tspan x="-4" y="20"></tspan>
                </text>

                <text className="cls-28" transform="translate(100 70)">
                    10
                    <tspan x="-8" y="10">tahun</tspan>
                    <tspan x="-2" y="20"></tspan>
                </text>

                <text className="cls-28" transform="translate(330 -22)">
                    20
                    <tspan x="-8" y="10">tahun</tspan>
                    <tspan x="-2" y="20"></tspan>
                </text>

                <text className="cls-28" transform="translate(550 70)">
                    30
                    <tspan x="-8" y="10">tahun</tspan>
                    <tspan x="-2" y="20"></tspan>
                </text>

                <text className="cls-28" transform="translate(638 295)">
                    40
                    <tspan x="-8" y="10">tahun</tspan>
                    <tspan x="-2" y="20"></tspan>
                </text>

                <text className="cls-28" transform="translate(550 515)">
                    50
                    <tspan x="-8" y="10">tahun</tspan>
                    <tspan x="-2" y="20"></tspan>
                </text>

                <text className="cls-28" transform="translate(328 610)">
                    60
                    <tspan x="-8" y="10">tahun</tspan>
                    <tspan x="-2" y="20"></tspan>
                </text>

                <text className="cls-28" transform="translate(100 515)">
                    70
                    <tspan x="-8" y="10">tahun</tspan>
                    <tspan x="-2" y="20"></tspan>
                </text>

                <text className="cls-29" transform="translate(97.49 198.76) rotate(15)">
                    5
                    <tspan className="cls-43" x="8.34" y="-6">tahun</tspan>
                    <tspan className="cls-43" x="8.34" y="0"></tspan>
                </text>

                <text className="cls-29" transform="translate(232.22 66.42) rotate(30)">
                    15
                    <tspan className="cls-43" x="13.9" y="-6">tahun</tspan>
                    <tspan className="cls-43" x="13.9" y="0"></tspan>
                </text>

                <text className="cls-29" transform="translate(428 58) rotate(110)">
                    25
                    <tspan className="cls-43" x="14.9" y="-6">tahun</tspan>
                    <tspan className="cls-43" x="14.9" y="0"></tspan>
                </text>

                <text className="cls-29" transform="translate(540.55 204.76)">
                    35
                    <tspan className="cls-43" x="14.9" y="-6">tahun</tspan>
                    <tspan className="cls-43" x="14.9" y="0"></tspan>
                </text>

                <text className="cls-29" transform="translate(542.76 402.12)">
                    45
                    <tspan className="cls-43" x="14.9" y="-6">tahun</tspan>
                    <tspan className="cls-43" x="14.9" y="0"></tspan>
                </text>

                <text className="cls-29" transform="translate(415 520) rotate(40)">
                    55
                    <tspan className="cls-43" x="14.9" y="-6">tahun</tspan>
                    <tspan className="cls-43" x="14.9" y="0"></tspan>
                </text>

                <text className="cls-29" transform="translate(235.6 539.38) rotate(-45)">
                    65
                    <tspan className="cls-43" x="14.9" y="-6">tahun</tspan>
                    <tspan className="cls-43" x="14.9" y="0"></tspan>
                </text>

                <text className="cls-29" transform="translate(97.69 400.12) rotate(-45)">
                    75
                    <tspan className="cls-43" x="14.9" y="-6">tahun</tspan>
                    <tspan className="cls-43" x="14.9" y="0"></tspan>
                </text>

                <text className="cls-61" transform="translate(71.7 250) rotate(15)">
                    1-2,5
                </text>
                <text className="cls-61" transform="translate(79.14 234.61) rotate(15)">
                    2,5-3,5
                </text>
                <text className="cls-61" transform="translate(86.39 216.23) rotate(15)">
                    3,5-4
                </text>
                <text className="cls-61" transform="translate(102.39 179.23) rotate(15)">
                    6-7,5
                </text>
                <text className="cls-61" transform="translate(109.39 160.23) rotate(15)">
                    7,5-8,5
                </text>
                <text className="cls-61" transform="translate(117.39 145) rotate(15)">
                    8,5-9
                </text>
                <text className="cls-61" transform="translate(176.55 85.51) rotate(30)">
                    11-12,5
                </text>
                <text className="cls-61" transform="translate(195.09 77.79) rotate(30)">
                    12,5-13,5
                </text>
                <text className="cls-61" transform="translate(214.38 70.22) rotate(30)">
                    13,5-14
                </text>
                <text className="cls-61" transform="translate(250.51 54.83) rotate(30)">
                    16-17,5
                </text>
                <text className="cls-61" transform="translate(268.88 47.18) rotate(30)">
                    17,5-18,5
                </text>
                <text className="cls-61" transform="translate(280.5 38) rotate(30)">
                    18,5-19
                </text>
                <text className="cls-61" transform="translate(375 35) rotate(105)">
                    21-22,5
                </text>
                <text className="cls-61" transform="translate(397.13 43) rotate(110)">
                    22,5-23,5
                </text>
                <text className="cls-61" transform="translate(415 53) rotate(110)">
                    23,5-24
                </text>
                <text className="cls-61" transform="translate(448 68) rotate(110)">
                    26-27,5
                </text>
                <text className="cls-61" transform="translate(465 75) rotate(110)">
                    27,5-28,5
                </text>
                <text className="cls-61" transform="translate(479 85) rotate(110)">
                    28,5-29
                </text>
                <text className="cls-61" transform="translate(530 150)">
                    31-32,5
                </text>
                <text className="cls-61" transform="translate(529.12 163.23)">
                    32,5-33,5
                </text>
                <text className="cls-61" transform="translate(543.78 182.23)">
                    33,5-34
                </text>
                <text className="cls-61" transform="translate(558.77 219.23)">
                    36-37,5
                </text>
                <text className="cls-61" transform="translate(560.77 237.61)">
                    37,5-38,5
                </text>
                <text className="cls-61" transform="translate(573.07 255.94)">
                    38,5-39
                </text>
                <text className="cls-61" transform="translate(572.49 345.82)">
                    41-42,5
                </text>
                <text className="cls-61" transform="translate(558.89 363.52)">
                    42,5-43,5
                </text>
                <text className="cls-61" transform="translate(557.3 382.28)">
                    43,5-44
                </text>
                <text className="cls-61" transform="translate(541.66 419.27)">
                    46-47,5
                </text>
                <text className="cls-61" transform="translate(528.32 437.69)">
                    47,5-48,5
                </text>
                <text className="cls-61" transform="translate(526.7 456.08) rotate(45)">
                    48,5-49
                </text>
                <text className="cls-61" transform="translate(367 545) rotate(45)">
                    58,5-59
                </text>
                <text className="cls-61" transform="translate(380 533) rotate(45)">
                    57,5-58,5
                </text>
                <text className="cls-61" transform="translate(402 529) rotate(43)">
                    56-57,5
                </text>
                <text className="cls-61" transform="translate(440 515) rotate(40)">
                    53,5-54
                </text>
                <text className="cls-61" transform="translate(449 505) rotate(40)">
                    52,5-53,5
                </text>
                <text className="cls-61" transform="translate(467 503) rotate(40)">
                    51-52,5
                </text>
                <text className="cls-61" transform="translate(178 514.02) rotate(-45)">
                    68,5-69
                </text>
                <text className="cls-61" transform="translate(196.75 521.67) rotate(-45)">
                    67,5-68,5
                </text>
                <text className="cls-61" transform="translate(215.13 529.33) rotate(-45)">
                    66-67,5
                </text>
                <text className="cls-61" transform="translate(254.01 545.68) rotate(-45)">
                    63,5-64
                </text>
                <text className="cls-61" transform="translate(271.01 552.29) rotate(-45)">
                    62,5-63,5
                </text>
                <text className="cls-61" transform="translate(285.26 559.01) rotate(-45)">
                    61-62,5
                </text>
                <text className="cls-61" transform="translate(73.75 343.82) rotate(-30)">
                    78,5-79
                </text>
                <text className="cls-61" transform="translate(81.12 361.52) rotate(-50)">
                    77,5-78,5
                </text>
                <text className="cls-61" transform="translate(88.78 380.28) rotate(-50)">
                    76-77,5
                </text>
                <text className="cls-61" transform="translate(103.77 417.27) rotate(-50)">
                    73,5-74
                </text>
                <text className="cls-61" transform="translate(111.77 435.69) rotate(-50)">
                    72,5-73,5
                </text>
                <text className="cls-61" transform="translate(119.07 454.08) rotate(-50)">
                    71-72,5
                </text>

                <text
                    className="cls-33 matrix-value-point"
                    id="af2point"
                    transform="translate(52 246) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="af1point"
                    transform="translate(60 227.5) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="af3point"
                    transform="translate(68 209) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="afpoint"
                    transform="translate(76 190.5) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="af5point"
                    transform="translate(82 172.5) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="af4point"
                    transform="translate(90 154) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="af6point"
                    transform="translate(98 135.5) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="fb2point"
                    transform="translate(169 63) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="fb1point"
                    transform="translate(188 55) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="fb3point"
                    transform="translate(206 47) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="fbpoint"
                    transform="translate(224 39) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="fb5point"
                    transform="translate(243 31) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="fb4point"
                    transform="translate(261 23.5) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="fb6point"
                    transform="translate(280 16) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="bg2point"
                    transform="translate(388 16) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="bg1point"
                    transform="translate(407 24) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="bg3point"
                    transform="translate(426 32) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="bgpoint"
                    transform="translate(444 40) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="bg5point"
                    transform="translate(463 48) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="bg4point"
                    transform="translate(481 55) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="bg6point"
                    transform="translate(500 63) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="gc2point"
                    transform="translate(570 135) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="gc1point"
                    transform="translate(578 153.5) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="gc3point"
                    transform="translate(586 172) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="gcpoint"
                    transform="translate(594 190.5) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="gc5point"
                    transform="translate(602 209) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="gc4point"
                    transform="translate(610 227.5) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="gc6point"
                    transform="translate(618 246) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ci2point"
                    transform="translate(615 348) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ci1point"
                    transform="translate(607 367) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ci3point"
                    transform="translate(599 385.5) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="cipoint"
                    transform="translate(591 404) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ci5point"
                    transform="translate(583 422.5) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ci4point"
                    transform="translate(575 441) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ci6point"
                    transform="translate(567 459.5) rotate(-67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="id2point"
                    transform="translate(496 532) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="id1point"
                    transform="translate(477.5 540) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="id3point"
                    transform="translate(459.5 548) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="idpoint"
                    transform="translate(441 555.5) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="id5point"
                    transform="translate(422.5 563) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="id4point"
                    transform="translate(404 571) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="id6point"
                    transform="translate(385 578.5) rotate(-22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="dh2point"
                    transform="translate(282 578.5) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="dh1point"
                    transform="translate(263.5 571) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="dh3point"
                    transform="translate(244.5 563) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="dhpoint"
                    transform="translate(226 555.5) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="dh5point"
                    transform="translate(207 548) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="dh4point"
                    transform="translate(188.5 540) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="dh6point"
                    transform="translate(170 532) rotate(22.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ha2point"
                    transform="translate(97 459) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ha1point"
                    transform="translate(89 441) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ha3point"
                    transform="translate(81 423) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="hapoint"
                    transform="translate(73 405) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ha5point"
                    transform="translate(65 386.5) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ha4point"
                    transform="translate(57 368) rotate(67.5)"
                ></text>
                <text
                    className="cls-33 matrix-value-point"
                    id="ha6point"
                    transform="translate(49 349.5) rotate(67.5)"
                ></text>
                </g>
            </svg>
        </div>
    </>
)}
