import { IconBox, IconGridView, IconHome, IconSetting } from '@douyinfe/semi-icons'
import type { NavItems } from '@douyinfe/semi-ui/lib/es/navigation'

const menuList: NavItems = [
  { itemKey: 'home', text: '首页', icon: <IconHome /> },
  {
    itemKey: 'assetManagement',
    text: '资产管理',
    icon: <IconBox />,
    items: [
      { itemKey: 'server', text: '服务器' },
      { itemKey: 'systemUser', text: '系统用户' },
      { itemKey: 'assetAuthorization', text: '资产授权' },
    ],
  },
  {
    itemKey: 'containerManagement',
    text: '容器管理',
    icon: <IconGridView />,
    items: [
      { itemKey: 'clusterManagement', text: '集群管理' },
      { itemKey: 'nodeManagement', text: '节点管理' },
      { itemKey: 'configManagement', text: '配置管理' },
    ],
  },
]

export const settingMenuList: NavItems = [
  { itemKey: 'setting', text: '设置', icon: <IconSetting /> },
]

export default menuList
