import React from 'react'
import { Layout, Nav, Typography } from '@douyinfe/semi-ui'

const { Sider } = Layout
const { Title } = Typography
function OpsSider() {
  return (
    <Sider>
      <Nav
        className="h-full w-[280px] bg-[#f9f9f9]"
      >
        <Nav.Header>
          <div className="w-full flex flex-row gap-2 items-center">
            <img className="h-9 w-9 border border-solid border-black rounded" alt="icon" src="*"></img>
            <Title heading={4}>
              OpsLink
            </Title>
          </div>
        </Nav.Header>
        <Nav.Item itemKey="1">item</Nav.Item>
        <Nav.Footer>Footer</Nav.Footer>
      </Nav>
    </Sider>
  )
}

export default OpsSider
