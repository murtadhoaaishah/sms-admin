import * as React from "react"
import { SVGProps } from "react"

const Student = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.948 2.864a3.83 3.83 0 0 0-3.84 3.84 3.83 3.83 0 0 0 3.84 3.841 3.83 3.83 0 0 0 3.84-3.84 3.83 3.83 0 0 0-3.84-3.84Zm0 1.25a2.58 2.58 0 0 1 2.59 2.59 2.58 2.58 0 0 1-2.59 2.591 2.58 2.58 0 0 1-2.59-2.59 2.58 2.58 0 0 1 2.59-2.59ZM5.242 3.65a.625.625 0 0 1 0 1.25 1.793 1.793 0 1 0 0 3.586.625.625 0 1 1 0 1.25 3.043 3.043 0 1 1 0-6.086Zm12.464 3.043a3.043 3.043 0 0 0-3.044-3.043.625.625 0 1 0 0 1.25 1.793 1.793 0 1 1 0 3.586.625.625 0 1 0 0 1.25 3.043 3.043 0 0 0 3.044-3.043Zm-.626 4.604c-.4-.09-.828-.153-1.263-.183a.625.625 0 0 0-.086 1.248 7.23 7.23 0 0 1 1.092.158c.551.108.91.287 1 .474a.526.526 0 0 1 0 .45c-.089.185-.445.364-.99.475a.625.625 0 0 0 .253 1.225c.898-.185 1.556-.514 1.865-1.164a1.776 1.776 0 0 0 0-1.523c-.31-.652-.98-.986-1.871-1.16Zm-12.327.398a.625.625 0 0 0-.666-.58 8.49 8.49 0 0 0-1.28.185l-.172.037c-.79.18-1.392.511-1.681 1.12a1.77 1.77 0 0 0 0 1.524c.307.648.966.978 1.864 1.163a.625.625 0 0 0 .252-1.225c-.543-.111-.9-.29-.987-.475a.521.521 0 0 1-.001-.45c.09-.187.448-.366.982-.47l.278-.058c.277-.05.552-.085.83-.104a.625.625 0 0 0 .581-.667Zm-.447 2.626c0-1.988 2.057-2.687 5.642-2.687h.254c3.436.033 5.388.734 5.388 2.673 0 1.893-1.866 2.618-5.14 2.682l-.502.005c-3.594 0-5.642-.687-5.642-2.673Zm10.034-.014c0-.926-1.483-1.423-4.392-1.423-2.905 0-4.392.505-4.392 1.437 0 .926 1.483 1.423 4.392 1.423 2.905 0 4.392-.506 4.392-1.437Z"
            fill="#777E90"
        />
    </svg>
)

export default Student