import * as React from 'react';
import { StyledForm } from './styles';

interface IFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

const Form: React.FC<IFormProps> = ({
  handleSubmit,
  handleInputChange,
  placeHolder
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeHolder}
        onChange={handleInputChange}
      />
    </StyledForm>
  );
};

export default Form;
