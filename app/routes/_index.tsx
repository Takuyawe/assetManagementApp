import type { MetaFunction } from '@remix-run/node';
import { css } from 'styled-system/css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Home' },
    { name: 'description', content: 'Your Asset Management App' },
  ];
};

export default function Index() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        rowGap: '1rem',
      })}>
      <div className={css({ color: 'white', fontSize: '3rem' })}>
        Your Asset Management App
      </div>
      <div className={css({ color: 'white', fontSize: '2rem' })}>
        Choose menu from the left side bar
      </div>
    </div>
  );
}
