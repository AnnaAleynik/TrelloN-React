import { useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import useUpdateCard from '../../../hooks/useUpdateCard';

const CardEditForm = ({ card, onEditComplete }) => {
  const { title, id } = card;
  const { updateCard } = useUpdateCard();

  const [cardValue, setCardValue] = useState(title);

  const onSubmit = async (event) => {
    event.preventDefault();
    await updateCard({ title: cardValue, id });
    onEditComplete();
  };

  const onChange = value => {
    setCardValue(value);
  };

  return (
    <form>
      <Input onChange={onChange} value={cardValue} />
      <Button type="submit" onClick={onSubmit}>
        Save
      </Button>
      <Button onClick={onEditComplete}>
        Cancel
      </Button>
    </form>
  );
};

export default CardEditForm;