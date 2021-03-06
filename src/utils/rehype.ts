import * as React from 'react'
// @ts-ignore
import rehypeReact from 'rehype-react'

import Button from '../components/Button'
import DownloadButton from '../components/DownloadButton'
import ServerList from '../components/ServerList'

export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { button: Button, 'download-button': DownloadButton, 'server-list': ServerList }
}).Compiler
