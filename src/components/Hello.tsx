import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => 
<h1 style={{color: "cyan", fontSize: "3rem", fontFamily: "sans-serif"}}>Hello from {props.compiler} and {props.framework}!</h1>;