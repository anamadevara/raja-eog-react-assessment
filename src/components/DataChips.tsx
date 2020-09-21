import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Measurement } from './Dashboard';

const useStyles = makeStyles({
  chipContainer: {
    padding: '10px'
  },
  chip: {
    minWidth: 250,
    minHeight: 100,
    margin: 3,
    padding: '20px',
    fontSize: 25,
    fontWeight: 600,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  measurementKey: {
    fontSize: 18,
  },
  measurementValue: {
    fontSize: 25,
  }
});

const DataChips = (props: { measurement: Measurement }) => {
  const classes = useStyles();
  const { measurement } = props;
  const sentenseCase = (str: string) => {
    const result = str.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  const label = <div className={classes.chipContainer}> <span className={classes.measurementKey}>{sentenseCase(measurement.metric)}</span>  <br /> <span className={classes.measurementValue}>{measurement.value} {measurement.unit}</span></div>;
  return <Chip className={classes.chip} label={label} />;
}

export default DataChips;