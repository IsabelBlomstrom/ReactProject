import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Layout() {
  return <div style={generalStyling}>
  <Navbar/>
  <Content/>
  </div>
}


const generalStyling: React.CSSProperties = {
  backgroundColor: 'black',
  fontFamily: 'sans-serif',
  color: 'white'
}

/*const centeredContent: React.CSSProperties = {
 display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
  }*/
  
  /*const theme: React.CSSProperties = {
    color: 'yellow',
    fontSize: '3rem',
    fontFamily: 'sans-serif'
  }*/