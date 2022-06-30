import * as React from "react"
import { SVGProps } from "react"

const SecondCalender
    = (props: SVGProps<SVGSVGElement>) => (
        <svg
            width={14}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.062 6.27h11.882M9.961 8.873h.007M7.003 8.873h.006M4.039 8.873h.006M9.961 11.465h.007M7.003 11.465h.006M4.039 11.465h.006M9.696 1.333v2.194M4.31 1.333v2.194"
                stroke="#2E2E2E"
                strokeWidth={1.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                clipRule="evenodd"
                d="M9.826 2.386H4.18C2.223 2.386 1 3.476 1 5.48v6.033c0 2.036 1.223 3.152 3.18 3.152h5.64c1.963 0 3.18-1.097 3.18-3.101V5.48c.006-2.005-1.21-3.095-3.174-3.095Z"
                stroke="#2E2E2E"
                strokeWidth={1.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )

export default SecondCalender