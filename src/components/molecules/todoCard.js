import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function TodoCard(props) {
  const { todos } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {todos.map((todo, key) => {
        return (
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="key"
              id="key"
            >
              <FormControlLabel
                checked={todo.is_done}
                // onChange=
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox />}
                label={todo.task}
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography color="textSecondary">{todo.task}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}{' '}
    </div>
  );
}
