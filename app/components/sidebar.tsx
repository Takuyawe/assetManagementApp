import { Link } from '@remix-run/react';
import { css } from 'styled-system/css';

const Sidebar = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        height: '100vh',
        width: '5%',
        backgroundColor: '#001327',
        paddingTop: '10px',
      })}>
      <button
        className={css({
          cursor: 'pointer',
        })}>
        <i
          className={`ri-account-circle-line ri-3x ${css({
            color: { base: '#cacaca', _hover: '#6e6e6e' },
          })}`}
        />
      </button>
      <Link to="/asset" unstable_viewTransition>
        <button
          className={css({
            cursor: 'pointer',
          })}>
          <i
            className={`ri-add-circle-line ri-3x ${css({
              color: { base: '#ffffff', _hover: '#6e6e6e' },
            })}`}
          />
        </button>
      </Link>
      <Link to="/record" unstable_viewTransition>
        <button
          className={css({
            cursor: 'pointer',
          })}>
          <i
            className={`ri-file-list-2-line ri-3x ${css({
              color: { base: '#ffffff', _hover: '#6e6e6e' },
            })}`}
          />
        </button>
      </Link>
      <button
        className={css({
          cursor: 'pointer',
        })}>
        <i
          className={`ri-settings-3-line ri-3x ${css({
            color: { base: '#ffffff', _hover: '#6e6e6e' },
          })}`}
        />
      </button>
    </div>
  );
};

export default Sidebar;
