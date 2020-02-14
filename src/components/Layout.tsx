import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Layout() {
  return (
    <div style={generalStyling}>
      <Navbar />
      <Content />
    </div>
  );
}

const generalStyling: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: "black",
  fontFamily: "sans-serif",
  color: "white",
  height: '100%'
};

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
