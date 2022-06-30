import * as React from "react"
import { SVGProps } from "react"

const Settings = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            clipRule="evenodd"
            d="m17.339 6.353-.519-.9a1.594 1.594 0 0 0-2.174-.587v0a1.587 1.587 0 0 1-2.174-.565 1.526 1.526 0 0 1-.213-.763v0a1.594 1.594 0 0 0-1.594-1.64H9.62a1.587 1.587 0 0 0-1.587 1.595v0a1.594 1.594 0 0 1-1.594 1.571 1.526 1.526 0 0 1-.763-.214v0a1.594 1.594 0 0 0-2.174.588l-.557.915c-.438.76-.179 1.733.58 2.174v0a1.594 1.594 0 0 1 0 2.761v0a1.587 1.587 0 0 0-.58 2.166v0l.527.908a1.594 1.594 0 0 0 2.174.618v0a1.579 1.579 0 0 1 2.166.58c.137.23.21.494.213.763v0c0 .88.714 1.594 1.595 1.594h1.045c.877 0 1.59-.71 1.594-1.587v0a1.587 1.587 0 0 1 1.594-1.594c.268.007.53.08.763.213v0c.76.439 1.732.18 2.174-.58v0l.549-.915a1.587 1.587 0 0 0-.58-2.173v0a1.587 1.587 0 0 1-.58-2.174c.139-.242.339-.442.58-.58v0a1.594 1.594 0 0 0 .58-2.166v0-.008Z"
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle
            cx={10.146}
            cy={9.908}
            stroke="#777E90"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            r={2.197}
        />
    </svg>
)

export default Settings