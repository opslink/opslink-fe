import { IconBox, IconGridView, IconHome } from '@douyinfe/semi-icons'
import type { NavItems } from '@douyinfe/semi-ui/lib/es/navigation'

const menuList: NavItems = [
  { itemKey: '1', text: '首页', icon: <IconHome /> },
  {
    itemKey: '2',
    text: '资产管理',
    icon: <IconBox />,
    items: [
      { itemKey: '2-1', text: '服务器' },
      { itemKey: '2-2', text: '系统用户' },
      { itemKey: '2-3', text: '资产授权' },
    ],
  },
  {
    itemKey: '3',
    text: '容器管理',
    icon: <IconGridView />,
    items: [
      { itemKey: '3-1', text: '集群管理' },
      { itemKey: '3-2', text: '节点管理' },
      { itemKey: '3-3', text: '配置管理' },
    ],
  },
]

export default menuList
