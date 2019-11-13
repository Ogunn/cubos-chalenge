import * as React from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeHolder}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Form;
