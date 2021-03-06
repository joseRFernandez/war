import { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import { Button, CardMedia } from '@mui/material';
import { determineValue } from '../utils';
import { Box } from '@mui/system';

export default function BasicCard(props) {

  return (
    <Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Card  sx={{ borderRadius: '4%', height: 275 }}>
          <CardMedia
            component="img"
            height="100%"
            image={`${props.data.image}`}
            alt="card"
            sx={{ objectFit: 'contain' }}
          />
        </Card>
      </Box>
    </Fragment>
  );
}
