import * as React from "react";
import styled from "styled-components";

interface IFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

const StyledForm = styled.form`
  display: grid;
`;

const Input = styled.input`
  border-radius: 25px;
  background-color: #ebebeb;
  border: none;
  color: #116193;
  padding: 7px 20px;
  margin: 1rem;
`;

const Form: React.FC<IFormProps> = ({
  handleSubmit,
  handleInputChange,
  placeHolder
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={placeHolder}
        onChange={handleInputChange}
      />
    </StyledForm>
  );
};

export default Form;
