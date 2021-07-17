import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 1080 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));
const PrettoSlider = withStyles({
  root: {
    marginLeft:180,
    marginTop:-10,
    color: '#db5e75',
    height: 2,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -5,
    marginLeft: -8,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

export default function BottomSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label>Laptop datails</label><PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={80} />
      <label>Closure</label><PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
     <label> Refrrals</label><PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} />
     <label> Importance of Math</label><PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
      <label>One-size</label><PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={90} />
      <div className={classes.margin} />
      </div>
  );
}
