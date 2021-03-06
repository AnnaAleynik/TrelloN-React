import { useState } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const Form = styled.div`
  padding: 6px;
  display: flex;
  justify-content: space-between;
  max-width: 300px;
`;

const defaultValue = '';

const ToDoForm = ({ disabled, onSubmit }) => {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = () => {
    if (value) {
      onSubmit(value);
      setValue(defaultValue);
    }
  };

  return (
    <Form>
      <Input disabled={disabled} onChange={setValue} value={value} />
      <Button primary disabled={disabled || !value} onClick={handleSubmit}>
        Add!
      </Button>
    </Form>
  );
};

export default ToDoForm;
