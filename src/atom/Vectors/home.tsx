import * as React from "react"
import { SVGProps } from "react"

type props = {
    color?: string
} & SVGProps<SVGSVGElement>

const Home = (props: props) => (
    <svg
        width={18}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M6.63 17.31v-2.555c0-.65.53-1.178 1.187-1.182h2.405c.66 0 1.195.53 1.195 1.182v2.564a1.02 1.02 0 0 0 1.002 1.016h1.604c1.598 0 2.894-1.283 2.894-2.866v0V8.2a2.033 2.033 0 0 0-.802-1.587L10.63 2.24a2.65 2.65 0 0 0-3.287 0L1.884 6.62c-.499.379-.795.964-.8 1.587v7.262c0 1.583 1.295 2.866 2.893 2.866h1.604c.57 0 1.034-.459 1.034-1.024v0"
            stroke={props.color || "#777E90"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Home