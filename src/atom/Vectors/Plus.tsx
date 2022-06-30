import * as React from "react"
import { SVGProps } from "react"

const Plus = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={16}
        height={17}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8 4.184v9.333M3.333 8.85h9.334"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Plus