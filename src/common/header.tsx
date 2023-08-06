import { Box, Typography } from '@mui/material';

const Header = (props: { title: string, subtitle: string }) => {
  return (
    <Box mb='30px'>
      <Typography
        variant='h4'
        color='gray'
        fontWeight='bold'
        sx={{
          mb: '5px'
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant='h6'
      >
        {props.subtitle}
      </Typography>
    </Box>
  )
}

export default Header;