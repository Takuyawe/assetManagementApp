import { css } from '../../styled-system/css';

export default function Index() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      })}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-around',
          height: '5rem',
          width: '25rem',
        })}>
        <button
          className={css({
            cursor: 'pointer',
            height: '3rem',
            width: '8rem',
            bgColor: { base: 'white', _hover: 'gray' },
            borderRadius: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          })}>
          収入
        </button>
        <button
          className={css({
            cursor: 'pointer',
            height: '3rem',
            width: '8rem',
            bgColor: { base: 'white', _hover: 'gray' },
            borderRadius: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          })}>
          支出
        </button>
      </div>
    </div>
  );
}
