import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function TodoCard(props) {
  const { todos } = props;

  return (
    <div>
      {todos.map((todo, key) => {
        return (
          <ExpansionPanel key={key}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls={key}
              id={key}
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
