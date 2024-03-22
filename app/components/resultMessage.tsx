import { css } from 'styled-system/css';

const ResultMessage = (status: number, message: string) => {
  return (
    <div
      className={css({
        height: '2rem',
        width: '20rem',
        bgColor: status === 201 ? 'green' : 'red',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        display: 'grid',
        placeItems: 'center',
        borderRadius: '0.5rem',
      })}>
      {message}
    </div>
  );
};

export default ResultMessage;
