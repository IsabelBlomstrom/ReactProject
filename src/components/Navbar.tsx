import React from "react"

export default function Navbar() {
  return (
    <header style={header}>
      <h2 style={headerItem}>React Playground</h2>
    </header>
  )
}

const header: React.CSSProperties = {
  backgroundColor: 'black',
  height: '5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const headerItem: React.CSSProperties = {
  fontSize: '3rem',
  textAlign: 'center',
  margin: 0
}