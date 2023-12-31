type SvgrComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>

declare module '*.png'

declare module '*.ttf'

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
