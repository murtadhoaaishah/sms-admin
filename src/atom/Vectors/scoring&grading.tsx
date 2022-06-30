import * as React from "react"
import { SVGProps } from "react"

const ScoringAndGrading = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            clipRule="evenodd"
            d="M13.612 2.292H6.388c-2.518 0-4.096 1.782-4.096 4.305v6.807c0 2.522 1.57 4.305 4.096 4.305h7.223c2.526 0 4.098-1.783 4.098-4.305V6.597c0-2.523-1.572-4.305-4.097-4.305Z"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="m7.033 10 1.979 1.977 3.955-3.955"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default ScoringAndGrading