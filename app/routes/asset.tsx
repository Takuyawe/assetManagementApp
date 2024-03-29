import { Link, Outlet } from '@remix-run/react';
import { css } from '../../styled-system/css';

export default function Layout() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: '2rem',
        height: '100%',
      })}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-around',
          height: '5rem',
          width: '25rem',
        })}>
        <Link
          to="/asset/income"
          unstable_viewTransition
          className={css({
            cursor: 'pointer',
            height: '3rem',
            width: '8rem',
            bgColor: { base: 'white', _hover: 'gray' },
            borderRadius: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'grid',
            placeItems: 'center',
          })}>
          収入
        </Link>

        <Link to="/asset/expenditure" unstable_viewTransition>
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
        </Link>
      </div>
      <Outlet />
      {/* TODO: Validation */}
    </div>
  );
}
