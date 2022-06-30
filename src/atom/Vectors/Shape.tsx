import * as React from "react"
import { SVGProps } from "react"

const Shape = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={12}
        height={6}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.202 0 0 6h11.988L6.202 0Z"
            fill="#1B72E7"
        />
    </svg>
)

export default Shape