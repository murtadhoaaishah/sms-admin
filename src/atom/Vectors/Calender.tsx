import * as React from "react"
import { SVGProps } from "react"

const Calender = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={40} height={40} rx={8} fill="#3772FF" fillOpacity={0.1} />
        <mask id="a" fill="#fff">
            <path d="M20 26.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-12h-1v-1a1 1 0 0 0-2 0v1h-8v-1a1 1 0 0 0-2 0v1h-1a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1v-9h16v9Zm0-11H12v-3a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 1 1 1v3Zm-13 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </mask>
        <path
            d="M20 26.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-12h-1v-1a1 1 0 0 0-2 0v1h-8v-1a1 1 0 0 0-2 0v1h-1a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1v-9h16v9Zm0-11H12v-3a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 1 1 1v3Zm-13 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            stroke="#3772FF"
            strokeWidth={2}
            mask="url(#a)"
        />
    </svg>
)

export default Calender
