import React from 'react'

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="w-full h-full p-2">
      {children}
    </div>
  )
}

export default Layout
