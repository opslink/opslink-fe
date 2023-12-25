import { Button } from '@douyinfe/semi-ui'
import React from 'react'
import { useRouter } from 'next/router'

function Page() {
  const router = useRouter()
  return (
    <div>
      Page
      <Button onClick={() => router.push('/opslink')}>onClick</Button>
    </div>
  )
}

export default Page
