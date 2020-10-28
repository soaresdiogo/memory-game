import React from 'react';
import MUCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const width = '160px';
const height = '200px';
const styles = {
  root: {
    width,
    height,
    margin: '12px',
    cursor: 'pointer',
  },
  flipper: {
    transition: '0.6s',
    transformStyle: 'preserve-3d',
    position: 'relative',
  },
  flipperRotate: {
    transform: 'rotateY(180deg)',
  },
  page: {
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    backfaceVisibility: 'hidden',
  },
  pageFront: {
    backgroundColor: 'silver',
    transform: 'rotateY(0deg)',
    zIndex: 2,
  },
  pageBack: {
    backgroundColor: 'tomato',
    transform: 'rotateY(180deg)',
  },
  media: {
    height: 110,
  },
};

const Card = ({ name, startLetter, image, classes, isActive, onClick }) => (
  <div
    data-testid="card"
    role="presentation"
    className={classes.root}
    onClick={onClick}
  >
    <div
      className={classNames(classes.flipper, {
        [classes.flipperRotate]: isActive,
      })}
    >
      <MUCard className={classNames(classes.page, classes.pageFront)} />
      <MUCard className={classNames(classes.page, classes.pageBack)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="h5" component="h2" align="center">
              {startLetter}
            </Typography>
            <Typography variant="h5" component="h2" align="center">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MUCard>
    </div>
  </div>
);

Card.defaultProp = {
  classes: PropTypes.node,
  onClick: PropTypes.func,
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  startLetter: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Card);
