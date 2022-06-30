import * as React from "react"
import { SVGProps } from "react"

const More = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={23}
        height={11}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={23} height={11} rx={5.5} fill="#111" fillOpacity={0.1} />
        <circle cx={5.5} cy={5.5} r={1.5} fill="#353945" />
        <circle cx={11.5} cy={5.5} r={1.5} fill="#353945" />
        <circle cx={17.5} cy={5.5} r={1.5} fill="#353945" />
    </svg>
)

export default More