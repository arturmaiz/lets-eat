import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './SelectedRestaurant.scss';

const useStyles = makeStyles({
  root: {
    width: '320px',
  },
  media: {
    height: 140,
  },
});

const SelectedRestaurant = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://d25t2285lxl5rf.cloudfront.net/images/dishes/cc0e53de-3813-46a5-ac1d-7b1cc77c7f71.jpg"
          title="Japo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Japo 🍣
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SelectedRestaurant;
