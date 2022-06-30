import * as React from "react"
import { SVGProps } from "react"

const Parents = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12.35 8.095a2.747 2.747 0 1 0 0-5.495M13.614 11.08c.453.03.903.096 1.347.194.616.123 1.357.375 1.62.928.17.354.17.766 0 1.12-.262.553-1.004.806-1.62.932"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            clipRule="evenodd"
            d="M6.993 11.672c3.075 0 5.701.466 5.701 2.326 0 1.862-2.61 2.344-5.701 2.344-3.075 0-5.701-.465-5.701-2.327 0-1.862 2.61-2.343 5.7-2.343ZM6.993 9.016A3.64 3.64 0 0 1 3.339 5.36a3.64 3.64 0 0 1 3.654-3.653 3.641 3.641 0 0 1 3.654 3.653 3.641 3.641 0 0 1-3.654 3.655Z"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Parents