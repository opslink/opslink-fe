import React from 'react'
import { Layout } from '@douyinfe/semi-ui'
import { useRouter } from 'next/router'
import OpsSider from './components/opsSider'

const { Content } = Layout
function _Layout({ children }: React.PropsWithChildren) {
  const router = useRouter()
  const { pathname } = router
  console.log('🚀 ~ file: index.tsx:10 ~ _Layout ~ pathname:', pathname)
  return (
    <Layout className="w-full h-full">
      {pathname !== '/login' && <OpsSider />}
      <Content>{children}</Content>
    </Layout>
  )
}

export default _Layout
