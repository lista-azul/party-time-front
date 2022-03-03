import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import {useSearchBarStyle} from "./styles"

 
export default function SerchBar() {

  const classes = useSearchBarStyle();

  return (
    <div className={classes.container}>
      <TextField></TextField>
      <Button variant="outlined">Search</Button>
    </div>
  )
}

