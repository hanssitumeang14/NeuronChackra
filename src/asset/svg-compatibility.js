'use client'

export default function Compatibility() {
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
                    display: block;
                    background-color: #1b1b2f;
                }

                .big-circle, .small-circle, .medium-circle {
                    fill: none;
                    stroke: #8884d8;
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
                    stroke: #d1d5db;
                    fill: none;
                }

                .cls-4 {
                    stroke-dasharray: none;
                }

                .cls-5,
                .cls-6 {
                    stroke: #a78bfa;
                    fill: #a78bfa;
                }

                .cls-7,
                .cls-8 {
                    stroke: #f87171;
                    fill: #f87171;
                }

                .cls-10 {
                    fill: #c084fc;
                }

                .cls-13 {
                    fill: #60a5fa;
                }

                .cls-15 {
                    fill: #5eead4;
                }

                .cls-19 {
                    fill: #f87171;
                }

                .cls-22 {
                    fill: #fb923c;
                }

                .cls-25 {
                    fill: #facc15;
                }

                .cls-26 {
                    fill: #bbf7d0;
                }

                .cls-24,
                .cls-21,
                .cls-23,
                .cls-53 {
                    fill: #f3f4f6;
                }

                .matrix-value-point {
                    text-anchor: middle;
                    alignment-baseline: middle;
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
                    fill: #f3f4f6;
                }

                .cls-55,
                .cls-58,
                .cls-60 {
                    fill: #0f172a;
                }

                .cls-56 {
                    fill: #fcd34d;
                }

                .pento {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                }
            `}

            </style>

            <div className="pento mt-5">
                <svg viewBox="0 0 680 680" id="matrix">
                    <g id="matrix-frame" transform="translate(10, 50)">
                    <rect className="cls-3" x="163.63" y="126.14" width="340.16" height="340.16"></rect>
                    <rect className="cls-3" x="227.87" y="127.54" width="340.16" height="340.16"
                        transform="translate(-158.13 367.16) rotate(-45)"></rect>
                    <polygon className="cls-4"
                        points="333.7 7.76 537.64 92.28 622.17 296.22 537.64 501.16 333.7 584.68 129.76 500.16 45.24 296.22 129.76 92.28 333.7 7.76">
                    </polygon>
                    <line className="cls-3" x1="333.7" y1="27.76" x2="333.7" y2="564.68"></line>
                    <line className="cls-3" x1="65.24" y1="296.22" x2="602.17" y2="296.22"></line>

                    <g>
                        <line className="cls-5" x1="442" y1="405" x2="226" y2="189"></line>
                        <polygon className="cls-6" points="441 402 439 404 442 405 441 402"></polygon>
                        <polygon className="cls-6" points="226 189 229 190 227 192 226 189"></polygon>
                    </g>

                    <g>
                        <line className="cls-7" x1="442" y1="189" x2="226" y2="405"></line>
                        <polygon className="cls-8" points="442 189 439 190 441 192 442 189"></polygon>
                        <polygon className="cls-8" points="226 405 227 402 229 404 226 405"></polygon>
                    </g>

                    <line className="cls-18" x1="502" y1="297" x2="335" y2="465"></line>
                    <text className="cls-44" transform="translate(238.77 188.48) rotate(45)">
                        Garis Leluhur Laki-laki
                    </text>
                    <text className="cls-44" transform="translate(351.7 264.98) rotate(-45)">
                        Garis Leluhur Perempuan
                    </text>
                    </g>

                    <g transform="translate(10, 50)">
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

                    <g id="points-basic" transform="translate(10, 50)">
                    <circle className="cls-24 big-circle" cx="77.59" cy="296.22" r="32.5"></circle>
                    <text className="cls-55 matrix-value-point" id="compatibilityApoint"
                        transform="translate(77.59 298)"></text>

                    <circle className="cls-24 big-circle" cx="333.7" cy="41" r="32.5"></circle>
                    <text className="cls-55 matrix-value-point" id="compatibilityBpoint" transform="translate(333.7 41)"></text>

                    <circle className="cls-24 big-circle" cx="588.13" cy="296.22" r="32.5"></circle>
                    <text className="cls-55 matrix-value-point" id="compatibilityCpoint"
                        transform="translate(588.13 298)"></text>

                    <circle className="cls-24 big-circle" cx="333.7" cy="553.2" r="32.5"></circle>
                    <text className="cls-55 matrix-value-point" id="compatibilityDpoint"
                        transform="translate(333.7 553.2)"></text>

                    <circle className="cls-24 big-circle" cx="334" cy="296.22" r="32.5"></circle>
                    <text className="cls-55 clss matrix-value-point" id="compatibilityEpoint"
                        transform="translate(334 298)"></text>

                    <circle className="cls-24 big-circle" cx="153" cy="116.22" r="32.5"></circle>
                    <text className="cls-55 matrix-value-point" id="compatibilityFpoint" transform="translate(153 118)"></text>

                    <circle className="cls-24 big-circle" cx="514.1" cy="116.22" r="32.5"></circle>
                    <text className="cls-55 matrix-value-point" id="compatibilityGpoint"
                        transform="translate(514.1 118)"></text>

                    <circle className="cls-24 big-circle" cx="514.1" cy="476.62" r="32.5"></circle>
                    <text className="cls-55 matrix-value-point" id="compatibilityIpoint" transform="translate(514.1 478)"></text>

                    <circle className="cls-24 big-circle" cx="153" cy="476.62" r="32.5"></circle>
                    <text className="cls-55 matrix-value-point" id="compatibilityHpoint"
                        transform="translate(153 478)"></text>

                    <circle className="cls-21 small-circle" cx="332.59" cy="466.72" r="20"></circle>
                    <text className="cls-58 matrix-value-point" id="compatibilityJpoint"
                        transform="translate(332.59 468)"></text>

                    <circle className="cls-21 small-circle" cx="502" cy="296.22" r="20"></circle>
                    <text className="cls-58 matrix-value-point" id="compatibilityNpoint" transform="translate(502 298)"></text>

                    <circle className="cls-21 small-circle" cx="418.18" cy="380.69" r="20"></circle>
                    <text className="cls-58 matrix-value-point" id="compatibilityLpoint"
                        transform="translate(418.18 382)"></text>
                        <g transform="translate(410, 345)">
                        <text className="cls-56">$</text>
                        </g>

                    <circle className="cls-21 small-circle" cx="375" cy="424" r="20"></circle>
                    <text className="cls-58 matrix-value-point" id="compatibilityKpoint" transform="translate(375 425)"></text>

                    <circle className="cls-21 small-circle" cx="461" cy="338" r="20"></circle>
                    <text className="cls-58 matrix-value-point" id="compatibilityMpoint"
                        transform="translate(461 338)"></text>

                    <circle className="cls-21 small-circle" cx="164.61" cy="296.22" r="20"></circle>
                    <text className="cls-58 matrix-value-point" id="compatibilitySpoint"
                        transform="translate(164.61 298)"></text>

                    <circle className="cls-21 small-circle" cx="333.7" cy="128" r="20"></circle>
                    <text className="cls-58 matrix-value-point" id="compatibilityTpoint"
                        transform="translate(333.7 130)"></text>

                    <circle className="cls-23 medium-circle" cx="126.11" cy="296.22" r="23"></circle>
                    <text className="cls-60 matrix-value-point" id="compatibilityOpoint" transform="translate(126.11 298)"></text>

                    <circle className="cls-23 medium-circle" cx="333.7" cy="89.2" r="23"></circle>
                    <text className="cls-60 matrix-value-point" id="compatibilityPpoint" transform="translate(333.7 91)"></text>

                    <circle className="cls-23 medium-circle" cx="333" cy="505" r="23"></circle>
                    <text className="cls-60 matrix-value-point" id="compatibilityRpoint"
                        transform="translate(333 505)"></text>

                    <circle className="cls-23 medium-circle" cx="540" cy="296.22" r="23"></circle>
                    <text className="cls-60 matrix-value-point" id="compatibilityQpoint" transform="translate(540 298)"></text>

                    <circle className="cls-21 small-circle" cx="420.54" cy="296.22" r="20"></circle>
                    <text className="cls-58 matrix-value-point" id="compatibilityVpoint" transform="translate(420.54 298)"></text>

                    <circle className="cls-23 medium-circle" cx="382.5" cy="296.22" r="23"></circle>
                    <text className="cls-60 matrix-value-point" id="compatibilityUpoint" transform="translate(382.5 298)"></text>
                    </g>

                    <g id="points-years" transform="translate(10, 50)">
                    <text className="cls-28" transform="translate(20 295)">
                        0
                        <tspan x="-10" y="10">Tahun</tspan>
                        <tspan x="-5" y="20"></tspan>
                    </text>

                    <text className="cls-28" transform="translate(100 70)">
                        10
                        <tspan x="-8" y="10">Tahun</tspan>
                        <tspan x="-3" y="20"></tspan>
                    </text>

                    <text className="cls-28" transform="translate(330 -22)">
                        20
                        <tspan x="-8" y="10">Tahun</tspan>
                        <tspan x="-3" y="20"></tspan>
                    </text>

                    <text className="cls-28" transform="translate(550 70)">
                        30
                        <tspan x="-8" y="10">Tahun</tspan>
                        <tspan x="-3" y="20"></tspan>
                    </text>

                    <text className="cls-28" transform="translate(638 295)">
                        40
                        <tspan x="-8" y="10">Tahun</tspan>
                        <tspan x="-3" y="20"></tspan>
                    </text>

                    <text className="cls-28" transform="translate(550 515)">
                        50
                        <tspan x="-8" y="10">Tahun</tspan>
                        <tspan x="-3" y="20"></tspan>
                    </text>

                    <text className="cls-28" transform="translate(328 610)">
                        60
                        <tspan x="-8" y="10">Tahun</tspan>
                        <tspan x="-3" y="20"></tspan>
                    </text>

                    <text className="cls-28" transform="translate(100 515)">
                        70
                        <tspan x="-8" y="10">Tahun</tspan>
                        <tspan x="-3" y="20"></tspan>
                    </text>
                    </g>
                </svg>
            </div>
        </>
    )
};
