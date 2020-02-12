import React from "react"

export default function Navbar() {
  return (
    <header style={header}>
      <h2 style={headerItem}>React Playground</h2>
    </header>
  )
}

const header: React.CSSProperties = {
  backgroundColor: 'darkgrey',
  height: '5rem',
}

const headerItem: React.CSSProperties = {
  fontSize: '2rem',
  textAlign: 'center',
  lineHeight: '5rem',
  verticalAlign: 'middle'
}