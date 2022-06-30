import * as React from "react"
import { SVGProps } from "react"

const SittingArrangement = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            clipRule="evenodd"
            d="M13.571 1.667h2.722a2.05 2.05 0 0 1 2.04 2.058V6.47a2.05 2.05 0 0 1-2.04 2.059h-2.722a2.05 2.05 0 0 1-2.04-2.059V3.725a2.05 2.05 0 0 1 2.04-2.058ZM3.707 1.667H6.43a2.05 2.05 0 0 1 2.04 2.058V6.47A2.05 2.05 0 0 1 6.43 8.53H3.707a2.05 2.05 0 0 1-2.04-2.059V3.725a2.05 2.05 0 0 1 2.04-2.058ZM3.707 11.472H6.43a2.05 2.05 0 0 1 2.04 2.059v2.744a2.05 2.05 0 0 1-2.04 2.059H3.707a2.05 2.05 0 0 1-2.04-2.059v-2.744a2.05 2.05 0 0 1 2.04-2.06ZM13.571 11.472h2.722a2.05 2.05 0 0 1 2.04 2.059v2.744a2.05 2.05 0 0 1-2.04 2.059h-2.722a2.05 2.05 0 0 1-2.04-2.059v-2.744a2.05 2.05 0 0 1 2.04-2.06Z"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default SittingArrangement