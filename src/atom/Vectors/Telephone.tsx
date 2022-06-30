import * as React from "react"
import { SVGProps } from "react"

const Telephone
    = (props: SVGProps<SVGSVGElement>) => (
        <svg
            width={24}
            height={25}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#a)">
                <path
                    d="M15.05 5.5A5 5 0 0 1 19 9.45M15.05 1.5A9 9 0 0 1 23 9.44m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.42Z"
                    stroke="#1CBF7D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" transform="translate(0 .5)" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )

export default Telephone
