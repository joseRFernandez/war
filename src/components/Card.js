import { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import { Button, CardMedia } from '@mui/material';
import { determineValue } from '../utils';
import { Box } from '@mui/system';

export default function BasicCard(props) {
  const [cardDisplayed, setCardDisplayed] = useState(props)

  return (
    <Fragment>
      <Box sx= {{display: 'flex', flexDirection: 'column'}}>
      <Card
        variant="outlined"
        sx={{ borderRadius: '4%', height: 275 }}
      >
        <CardMedia
          component="img"
          height="100%"
          image={props.cards[0].image}
          alt="card"
          sx={{ objectFit: 'contain' }}
        />
      </Card>
      <Button sx ={{}}variant="contained" onClick={() => console.log(props.cards[0].value)}>State Check</Button>
      </Box>
    </Fragment>
  );
}
