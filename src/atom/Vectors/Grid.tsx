import * as React from "react"
import { SVGProps } from "react"

const Grid = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={36}
        height={36}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={36} height={36} rx={8} fill="#fff" />
        <path
            d="M27 20h-7v7h7v-7ZM16 20H9v7h7v-7ZM27 9h-7v7h7V9ZM16 9H9v7h7V9Z"
            stroke="#777E90"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Grid