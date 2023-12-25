import React from 'react'
import { Layout } from '@douyinfe/semi-ui'
import OpsSider from './components/opsSider'

const { Content } = Layout
function _Layout({ children }: React.PropsWithChildren) {
  return (
    <Layout className="w-full h-full">
      <OpsSider />
      <Content>{children}</Content>
    </Layout>
  )
}

export default _Layout
