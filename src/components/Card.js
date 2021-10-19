import { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import { Button, CardMedia } from '@mui/material';
import { determineValue } from '../utils';
import { Box } from '@mui/system';

export default function BasicCard(props) {
  const { status } = props;

  if (status) {
    return (
      <Fragment>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card variant="outlined" sx={{ borderRadius: '4%', height: 275 }}>
            <CardMedia
              component="img"
              height="100%"
              image={props.cards[0].image}
              alt="card"
              sx={{ objectFit: 'contain' }}
            />
          </Card>
          <Button variant="contained" onClick={() => console.log(props)}>
            Card Props
          </Button>
        </Box>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card variant="outlined" sx={{ borderRadius: '4%', height: 275 }}>
            <CardMedia
              component="img"
              height="100%"
              image="/suits/back-of-card_black.jpeg"
              alt="card"
              sx={{ objectFit: 'contain' }}
            />
          </Card>
          <Button variant="contained" onClick={() => console.log(props)}>
            Card Props
          </Button>
        </Box>
      </Fragment>
    );
  }
}
