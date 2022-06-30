import * as React from "react"
import { SVGProps } from "react"

const FeesAndLevees = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M18.032 11.996H14.66a2.244 2.244 0 0 1 0-4.485h3.373M15.04 9.702h-.26"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            clipRule="evenodd"
            d="M6.456 2.5h7.203a4.373 4.373 0 0 1 4.373 4.373v5.98a4.373 4.373 0 0 1-4.373 4.374H6.456a4.373 4.373 0 0 1-4.373-4.373v-5.98A4.373 4.373 0 0 1 6.456 2.5Z"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M5.863 6.282h4.5"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default FeesAndLevees