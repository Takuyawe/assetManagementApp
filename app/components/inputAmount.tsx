import { FieldMetadata } from '@conform-to/react';
import { css } from 'styled-system/css';

type Props = {
  inputAmount: number;
  setInputAmount: (inputAmount: number) => void;
  fields: FieldMetadata;
};

const InputAmount = ({ inputAmount, setInputAmount, fields }: Props) => {
  return (
    <input
      id={fields.id}
      className={css({
        height: '3rem',
        width: '10rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '0.5rem',
      })}
      type="number"
      step={10}
      min={fields.min}
      value={inputAmount}
      onChange={(e) => setInputAmount(Number(e.target.value))}
      name={fields.name}
      placeholder="金額"
      required={fields.required}
    />
  );
};

export default InputAmount;
