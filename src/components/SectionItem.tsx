import React from "react"

interface Props {
mainImg: string;
title: string;
}

export default function SectionItem(props: Props) {
  return (
  <div style={sectionStyle}>
    <img src={props.mainImg} style={imgStyle}></img>
    <h3 style={titleStyle}>{props.title}</h3>
  </div>)
}

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: '15rem',
  position: 'relative',

}

const imgStyle: React.CSSProperties = {
  objectFit: 'cover',
  width: '100%',
  padding: '1rem',
}

const titleStyle: React.CSSProperties = {
  position: 'absolute'
}
