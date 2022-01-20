/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'
import type { Theme } from './theme'

declare module 'styled-components'{
  export interface DefaultTheme extends Theme{}
}
