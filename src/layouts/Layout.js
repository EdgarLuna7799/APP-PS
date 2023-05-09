import React from 'react';
import {Menu, Buscador, cards } from "../components"
import {Home} from "../pages"
import {Rutas} from "../routes"

export function Layout(props) {
  const {children}=props;
  return (
    <>
    <div>
      <Menu/>
      <p></p>
    </div>
    
    <div>
      {children}
    </div>
    </>
  )
}
