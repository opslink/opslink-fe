import React from 'react'
import { Layout } from '@douyinfe/semi-ui'
import DSider from './components/DSider'

const { Header, Footer, Content,Sider } = Layout
function _Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="w-full h-full flex flex-row">
        <DSider/>
      <Content>{children}</Content>
    </div>

  )
}

export default _Layout
