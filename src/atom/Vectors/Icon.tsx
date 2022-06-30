import * as React from "react"
import { SVGProps } from "react"

const Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 18h18M3 12h18M3 6h18"
            stroke="#23262F"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Icon