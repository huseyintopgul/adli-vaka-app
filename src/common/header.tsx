import { Typography } from '@mui/material';

const Header = (props: { title: string, subtitle: string }) => {
  return (
    <div className='mb-[30px]'>
      <Typography
        variant='h4'
        color='gray'
        fontWeight='bold'>
        {props.title}
      </Typography>
      <Typography
        variant='h6'
      >
        {props.subtitle}
      </Typography>
    </div>
  )
}

export default Header;