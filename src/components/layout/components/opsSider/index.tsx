import React, { useEffect, useState } from 'react'
import { Layout, Nav, Typography } from '@douyinfe/semi-ui'
import { useRouter } from 'next/router'
import menuList, { settingMenuList } from './common/menu'
import OpsFooter from './opsFooter'

const { Sider } = Layout
const { Title } = Typography
function OpsSider() {
  const router = useRouter()
  const [selectedKeys, setSelectedKeys] = useState(['home'])
  console.log('🚀 ~ file: index.tsx:12 ~ OpsSider ~ selectedKeys:', selectedKeys)
  const [openKeys, setOpenKeys] = useState<any[]>([])
  const [menu, setMenu] = useState<any[]>(menuList)

  useEffect(() => {
    const jumpName = selectedKeys[0]
    router.push(jumpName === 'home' ? '/' : `/${jumpName}`)
  }, [selectedKeys])

  const onOpenChange = (data: any) => {
    setOpenKeys([...data.openKeys])
  }

  const onSelect = (data: any) => {
    setSelectedKeys([...data.selectedKeys])
  }

  const goSetting = () => {
    router.push('/setting')
    setMenu(settingMenuList)
    setSelectedKeys(['setting'])
  }
  return (
    <Sider>
      <Nav
        className="h-full w-[280px] bg-[#f9f9f9]"
        header={(
          <div
            className="w-full flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => {
              router.push('/')
              setSelectedKeys(['home'])
              setMenu(menuList)
            }}
          >
            <img className="h-9 w-9 border border-solid border-black rounded" alt="icon" src="*"></img>
            <Title heading={4}>
              OpsLink
            </Title>
          </div>
        )}
        items={menu}
        footer={{
          children: <OpsFooter goSetting={goSetting} />,
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
