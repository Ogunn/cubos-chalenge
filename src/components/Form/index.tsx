import * as React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './styles';

interface IFormProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<IFormProps> = ({ handleInputChange }) => {
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      size="small"
      margin="normal"
      fullWidth
      className={classes.root}
      onChange={handleInputChange}
    />
  );
};

export default Form;
