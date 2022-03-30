import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import {useSearchBarStyle} from "./styles"


export default function SerchBar() {

  const classes = useSearchBarStyle();

  return (
    <div className={classes.container}>
      <TextField
          variant="outlined"
          placeholder={"Search by name..."}
          className={classes.input}
          InputProps={{classes:{notchedOutline:classes.noBorder}}}
      />
      <Button variant="outlined"  className={classes.buttonSearch}>Search</Button>
    </div>
  )
}

