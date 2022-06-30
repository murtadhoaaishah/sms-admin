import * as React from "react"
import { SVGProps } from "react"

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={40} height={40} rx={20} fill="#18A348" fillOpacity={0.1} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.28 15.72a.75.75 0 0 0-1.06 0L17 21.94v-4.19a.75.75 0 1 0-1.5 0v6c0 .414.335.75.75.75h6a.75.75 0 1 0 0-1.5h-4.19l6.22-6.22a.75.75 0 0 0 0-1.06"
            fill="#18A348"
        />
    </svg>
)

export default ArrowDown