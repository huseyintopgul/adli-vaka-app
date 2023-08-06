import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigator = (props: { to: string, text: string, icon: any }) => {
  return (
    <Link to={props.to}>
      <Button>
        {props.icon}
        {props.text}
      </Button>
    </Link>
  )
}

export default Navigator