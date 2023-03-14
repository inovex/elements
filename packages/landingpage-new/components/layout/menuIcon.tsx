import * as React from 'react'
import { SVGProps } from 'react'

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={26}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={24} height={4} rx={2} />
    <rect y={11} width={24} height={4} rx={2} />
    <rect y={22} width={24} height={4} rx={2} />
  </svg>
)

export default MenuIcon
