import React from "react"
import Logo from "./sub-components/Logo"

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 0",
      }}
    >
      <Logo />
      <p className="f3 link dim black underline pa3 pointer">Sign out</p>
    </nav>
  )
}

export default Navigation
