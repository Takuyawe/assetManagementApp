import { css } from 'styled-system/css';
import { PrismaPostResponseType } from '~/types';

const ErrorMessage = ({ status, message }: PrismaPostResponseType) => {
  return (
    <div
      className={css({
        height: '3rem',
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

export default ErrorMessage;
