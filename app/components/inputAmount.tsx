import { css } from 'styled-system/css';

type Props = {
  inputAmount: number;
  setInputAmount: (inputAmount: number) => void;
};

const InputAmount = ({ inputAmount, setInputAmount }: Props) => {
  return (
    <input
      className={css({
        width: '10rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '0.5rem',
      })}
      type="number"
      step={10}
      min={0}
      value={inputAmount}
      onChange={(e) => setInputAmount(Number(e.target.value))}
      name="amount"
      placeholder="金額"
      required
    />
  );
};

export default InputAmount;
