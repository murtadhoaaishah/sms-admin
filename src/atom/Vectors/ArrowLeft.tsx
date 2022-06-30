import * as React from "react"
import { SVGProps } from "react"

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={6}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M5 9 1 5l4-4"
            stroke="#777E90"
            strokeWidth={1.333}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default ArrowLeft