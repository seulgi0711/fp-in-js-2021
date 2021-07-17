/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <h4
    {...props}
    sx={{
      position: 'absolute',
      zIndex: 1,
      left: 0,
      top: 0,
      right: 0,
      pointerEvents: 'none',
      variant: 'styles.Header',
    }}
  />