import React from "react"
import SectionItem from "./SectionItem"

export default function Content() {
  return <main style={root}>
   <SectionItem mainImg="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" title="sky"/>
    <SectionItem mainImg="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" title="forest"/>
    <SectionItem mainImg="https://images.unsplash.com/photo-1505236732171-72a5b19c4981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" title="water"/> 
  </main>
}

const root: React.CSSProperties = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'streth',
  alignItems: 'stretch'

}
