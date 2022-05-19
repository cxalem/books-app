import * as React from 'react'
import { SVGProps } from 'react'

const Faved = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.407 9.524a1.473 1.473 0 0 0-.856-2.655l-5.974-.226a.152.152 0 0 1-.132-.1L12.38.969a1.474 1.474 0 0 0-2.767 0L7.555 6.564a.153.153 0 0 1-.132.1l-5.974.225a1.473 1.473 0 0 0-.856 2.655l4.686 3.684a.153.153 0 0 1 .053.16l-1.613 5.715a1.474 1.474 0 0 0 2.244 1.627l4.95-3.32a.146.146 0 0 1 .167 0l4.95 3.32a1.46 1.46 0 0 0 1.693 0 1.46 1.46 0 0 0 .551-1.593L16.648 13.4a.146.146 0 0 1 .053-.16l4.706-3.717Z"
      fill="#EDC700"
    />
  </svg>
)

export default Faved
