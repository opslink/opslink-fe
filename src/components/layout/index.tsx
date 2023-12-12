import React from 'react'
import { Layout } from '@douyinfe/semi-ui'

const { Header, Footer, Content } = Layout
function _Layout({ children }: React.PropsWithChildren) {
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)',
  }
  return (
    <Layout className="w-full h-full">
      <Header style={commonStyle}>Header</Header>
      <Content>{children}</Content>
      <Footer style={commonStyle}>Footer</Footer>
    </Layout>

  )
}

export default _Layout
