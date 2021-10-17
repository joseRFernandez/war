import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function GameBoard() {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'green', borderRadius: '40%', height: '80vh' }} />
      </Container>
    </Fragment>
  );
}
