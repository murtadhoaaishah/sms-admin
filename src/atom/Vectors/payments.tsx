import * as React from "react"
import { SVGProps } from "react"

const Payments = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11.541 3.542v2.017M11.541 14.8v1.686M11.541 11.937V7.92"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            clipRule="evenodd"
            d="M15.585 16.666c1.518 0 2.748-1.214 2.748-2.714v-2.16c-1.004 0-1.813-.8-1.813-1.791a1.8 1.8 0 0 1 1.813-1.793V6.047c0-1.5-1.231-2.714-2.749-2.714H4.416c-1.518 0-2.748 1.215-2.748 2.714L1.667 8.28c1.004 0 1.814.73 1.814 1.722s-.81 1.79-1.814 1.79v2.161c0 1.5 1.23 2.714 2.748 2.714h11.17Z"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Payments