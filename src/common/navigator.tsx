import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigator = (props: { to: string, text: string, icon: any }) => {
  return (
    <Link to={props.to}>
      <Button
        sx={{
          fontSize: '14px',
          fontWeight: 'bold',
          padding: '10px 2px',
          marginBottom: '30px'
        }}
      >
        {props.icon}
        {props.text}
      </Button>
    </Link>
  )
}

export default Navigator