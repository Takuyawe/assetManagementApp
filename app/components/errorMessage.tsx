import { css } from 'styled-system/css';

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div
      className={css({
        height: '3rem',
        width: '10rem',
        bgColor: 'red',
        color: 'white',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        display: 'grid',
        placeItems: 'center',
        borderRadius: '0.5rem',
      })}>
      {message}
    </div>
  );
};

export default ErrorMessage;
