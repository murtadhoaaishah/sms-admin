import * as React from "react"
import { SVGProps } from "react"

const Home = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={18}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M6.631 17.31v-2.556c0-.65.53-1.178 1.186-1.182h2.406c.66 0 1.194.53 1.194 1.182v2.564a1.02 1.02 0 0 0 1.002 1.016h1.604c1.598 0 2.894-1.283 2.894-2.865v0-7.27a2.033 2.033 0 0 0-.802-1.588l-5.484-4.373a2.65 2.65 0 0 0-3.287 0L1.885 6.62c-.5.379-.796.964-.802 1.587v7.263c0 1.582 1.296 2.865 2.894 2.865h1.604a1.03 1.03 0 0 0 1.034-1.024v0"
            stroke="#1B72E7"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Home