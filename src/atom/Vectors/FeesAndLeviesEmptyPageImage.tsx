import * as React from "react"
import { SVGProps } from "react"

const FeesAndLeviesEmptyPageImage = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={143}
        height={116}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M71.3 101.651c28 0 50.7-22.7 50.7-50.8C122 22.75 99.3.05 71.3.05c-28 0-50.7 22.7-50.7 50.8 0 28.1 22.7 50.8 50.7 50.8ZM127.8 29.95a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2ZM133.8 13.85a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6ZM17.2 32.85a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6ZM22.4 93.752a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Z"
            fill="#EAEEF9"
        />
        <g filter="url(#a)">
            <path
                d="M111.616 82.92H31.184a8.73 8.73 0 0 1-8.784-8.783V27.834a8.73 8.73 0 0 1 8.784-8.783h80.432a8.73 8.73 0 0 1 8.784 8.783v46.303a8.73 8.73 0 0 1-8.784 8.783Z"
                fill="url(#b)"
            />
        </g>
        <path
            d="M109.358 68.488h-12.8a1.982 1.982 0 0 1-2.007-2.008c0-1.129.879-2.007 2.008-2.007h12.799c1.129 0 2.007.878 2.007 2.007 0 1.13-.878 2.008-2.007 2.008ZM48.374 46.783H34.321c-1.004 0-1.883-.878-1.883-1.882v-9.034c0-1.004.879-1.883 1.883-1.883h13.928c1.004 0 1.882.879 1.882 1.883V44.9c.126 1.004-.753 1.882-1.757 1.882Z"
            fill="#D5DDEA"
        />
        <path
            d="M128.113 83.693c-.4 1.7-1 3.5-1.7 5-1.9 3.7-4.9 6.6-8.6 8.5-3.8 1.9-8.3 2.7-12.8 1.7-10.6-2.2-17.4-12.6-15.2-23.2 2.2-10.6 12.5-17.5 23.1-15.2 3.8.8 7.1 2.7 9.9 5.3 4.7 4.7 6.7 11.5 5.3 17.9Z"
            fill="url(#c)"
        />
        <path
            d="M115.213 77.993h-4.5v-4.5c0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7v4.5h-4.5c-.9 0-1.7.7-1.7 1.7s.7 1.7 1.7 1.7h4.5v4.5c0 .9.7 1.7 1.7 1.7.9 0 1.7-.7 1.7-1.7v-4.5h4.5c.9 0 1.7-.7 1.7-1.7s-.8-1.7-1.7-1.7Z"
            fill="#fff"
        />
        <defs>
            <linearGradient
                id="b"
                x1={71.368}
                y1={17.573}
                x2={71.368}
                y2={83.609}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#FDFEFF" />
                <stop offset={0.996} stopColor="#ECF0F5" />
            </linearGradient>
            <linearGradient
                id="c"
                x1={89.382}
                y1={79.693}
                x2={128.559}
                y2={79.693}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#B0BACC" />
                <stop offset={1} stopColor="#969EAE" />
            </linearGradient>
            <filter
                id="a"
                x={0.4}
                y={8.051}
                width={142}
                height={107.871}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy={11} />
                <feGaussianBlur stdDeviation={11} />
                <feColorMatrix values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1305_34473"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1305_34473"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)

export default FeesAndLeviesEmptyPageImage