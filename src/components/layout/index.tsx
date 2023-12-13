import React from 'react'
import { Layout } from '@douyinfe/semi-ui'
import OpsSider from './components/opsSider'

const { Header, Footer, Content } = Layout
function _Layout({ children }: React.PropsWithChildren) {
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)',
  }
  return (
    <Layout className="w-full h-full">
      <OpsSider />
      <Content>{children}</Content>
    </Layout>
  )
}

export default _Layout
