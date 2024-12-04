import React from 'react'
import { Anchor, Grommet, Header, Text,Box } from "grommet";

function Navbar() {
  return (
    <Box
    direction="row"
    align="center"
    justify="between"
    pad={{ vertical: "small", horizontal: "medium" }}
   background="brand"
    elevation="small"
  >
    {/* Logo or Title */}
    <Box>
      <Anchor href="/" label="Logo" color="light-1" />
    </Box>

    {/* Navbar Links */}
    <Box direction="row" gap="medium">
      <Anchor href="/home" label="Home" size='small' color="light-1" />
      <Anchor href="/about" label="About" size='small' color="light-1" />
      <Anchor href="/services" label="Services" size='small' color="light-1" />
      <Anchor href="/contact" label="Contact" size='small' color="light-1" />
    </Box>
  </Box>
  )
}

export default Navbar