import * as React from "react"
import { SVGProps } from "react"

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m0 0 6 6 6-6H0Z"
      fill="#F0F3FF"
    />
  </svg>
)

export default Arrow