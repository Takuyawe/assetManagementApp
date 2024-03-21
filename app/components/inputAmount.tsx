import { css } from 'styled-system/css';

const InputAmount = () => {
  return (
    <input
      className={css({
        width: '10rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 'bold',
      })}
      type="number"
      name="amount"
      placeholder="金額"
    />
  );
};

export default InputAmount;
