import React, { useState } from 'react'
import { Layout, Nav, Typography } from '@douyinfe/semi-ui'
import menuList from './common/menu'
import OpsFooter from './opsFooter'

const { Sider } = Layout
const { Title } = Typography
function OpsSider() {
  const [selectedKeys, setSelectedKeys] = useState(['home'])
  const [openKeys, setOpenKeys] = useState<any[]>([])

  const onOpenChange = (data: any) => {
    setOpenKeys([...data.openKeys])
  }

  const onSelect = (data: any) => {
    console.log('🚀 ~ file: index.tsx:16 ~ onSelect ~ data:', data)
    setSelectedKeys([...data.selectedKeys])
  }
  return (
    <Sider>
      <Nav
        className="h-full w-[280px] bg-[#f9f9f9]"
        header={(
          <div className="w-full flex flex-row gap-2 items-center">
            <img className="h-9 w-9 border border-solid border-black rounded" alt="icon" src="*"></img>
            <Title heading={4}>
              OpsLink
            </Title>
          </div>
        )}
        items={menuList}
        footer={{
          children: <OpsFooter />,
        }}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={onOpenChange}
        onSelect={onSelect}
      />
    </Sider>
  )
}

export default OpsSider
