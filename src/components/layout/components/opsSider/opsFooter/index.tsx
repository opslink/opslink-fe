import { IconSetting } from '@douyinfe/semi-icons'
import { Button, Tooltip } from '@douyinfe/semi-ui'
import React from 'react'
import { useRouter } from 'next/router'
import getGreeting from '@/utils/greeting'

interface Props {
  goSetting: () => void
}

function OpsFooter({ goSetting }: Props): React.ReactNode {
  const router = useRouter()
  function getUserName() {
    return 'admin'
  }
  return (
    <div className="w-full flex justify-between items-center">
      <div>{`${getGreeting()}, ${getUserName()}`}</div>
      <Tooltip content="设置">
        <Button icon={<IconSetting />} theme="borderless" onClick={goSetting} />
      </Tooltip>
    </div>
  )
}

export default OpsFooter
