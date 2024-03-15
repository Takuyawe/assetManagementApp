import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './index.css?url';
import { LinksFunction } from '@remix-run/node';
import 'remixicon/fonts/remixicon.css';
import Sidebar from './components/sidebar';
import { css } from 'styled-system/css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          className={css({ display: 'flex', height: '100vh', width: '100%' })}>
          <Sidebar />
          <div className={css({ bgColor: '#272525', width: '100%' })}>
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
