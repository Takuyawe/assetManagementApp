import { Outlet } from '@remix-run/react';
import { css } from 'styled-system/css';

const Record = () => {
  return (
    <>
      <div className={css({ color: 'white', fontSize: '3rem' })}>
        Your Record
      </div>
      <Outlet />
    </>
  );
};

export default Record;
