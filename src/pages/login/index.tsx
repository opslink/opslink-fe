import React, { useRef } from 'react'
import { Button, Form, Typography } from '@douyinfe/semi-ui'

const { Title } = Typography

function Login() {
  const api = useRef<any>(null)

  function handleSubmit(values: { userName: string, password: string }) {
    console.log('🚀 ~ file: index.tsx:10 ~ handleSubmit ~ values:', values)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-[500px] h-fit shadow-xl rounded-lg bg-white flex items-start flex-col p-8 gap-8 bg-opacity-80">
        <div className="flex flex-col items-start">
          <div>WelCome to</div>
          <Title heading={2}>OpsLink</Title>
        </div>
        <Form
          style={{ width: '100%' }}
          getFormApi={(formApi) => { api.current = formApi }}
          onSubmit={handleSubmit}
        >
          <Form.Input
            placeholder="Please input your username"
            field="userName"
            size="large"
            style={{ width: '100%' }}
            label="UserName"
            rules={[
              { required: true, message: '请输入用户名' },
            ]}
          />
          <Form.Input
            label="Password"
            placeholder="Please input your password"
            field="password"
            mode="password"
            size="large"
            style={{ width: '100%' }}
            rules={[
              { required: true, message: '请输入密码' },
            ]}
          />
        </Form>
        <Button
          size="large"
          style={{ width: '100%' }}
          theme="solid"
          onClick={() => {
            api.current.submitForm()
          }}
        >
          Login

        </Button>
      </div>
    </div>
  )
}

export default Login
