import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function TextBox(props) {
  const { label, value, onChange, type } = props;
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label={label} value={value} type={type} onChange={onChange} />
    </form>
  );
}
