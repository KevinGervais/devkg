import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M320 40v16a8 8 0 0 1-8 8h-87.5l-96 384H216a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h87.5l96-384H104a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8z"/>
        </svg>
    )
}

export default Icon
