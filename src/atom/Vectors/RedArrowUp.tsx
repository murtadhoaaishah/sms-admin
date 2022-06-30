import * as React from "react"
import { SVGProps } from "react"

const RedArrowUp = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={14}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10.453 3.862a.583.583 0 0 0-.536-.362H4.083a.583.583 0 0 0 0 1.167h4.428L3.669 9.502a.583.583 0 0 0 .19.957.584.584 0 0 0 .638-.128l4.836-4.842v4.428a.583.583 0 1 0 1.167 0V4.083a.583.583 0 0 0-.047-.221Z"
            fill="#EB0000"
        />
    </svg>
)

export default RedArrowUp