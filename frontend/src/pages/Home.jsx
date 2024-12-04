import React from 'react'
import { Anchor, Grommet, Header, Text,Box } from "grommet";
import Navbar from '../components/Navbar';
const theme = {
    global: {
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };

  const AppBar = (props) => {
   console.log(props)
    return (
        <>
        
        <Header
      
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      {...props}
    />
        </>

    
    )
  }
    
     

export const Home = () => {
  return (
    <Grommet theme={theme} full>
 <Navbar/>
    </Grommet>
  )
}
