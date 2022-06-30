import * as React from "react"
import { SVGProps } from "react"

const Subjects = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            clipRule="evenodd"
            d="M12.28 2.302H6.737c-1.715 0-3.195 1.39-3.195 3.107v8.928c0 1.813 1.383 3.259 3.195 3.259h6.658c1.717 0 3.107-1.542 3.107-3.26V6.699l-4.22-4.396Z"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.062 2.292v2.424c0 1.183.957 2.143 2.14 2.146 1.097.002 2.22.003 2.295-.002M11.903 12.964H7.406M10.202 8.839H7.405"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Subjects
