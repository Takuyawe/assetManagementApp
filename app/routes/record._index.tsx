import { json } from '@remix-run/node';
import { Await, Link, useLoaderData, useNavigation } from '@remix-run/react';
import { Suspense } from 'react';
import { css } from 'styled-system/css';
import { prisma } from '~/lib/prisma';

const Index = () => {
  return (
    <>
      {/* <div className={css({ color: 'white', fontSize: '2rem' })}>
        {navigation.state === 'loading' ? 'Loading...' : sum}
      </div> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Await errorElement={<div>Error</div>} resolve={data}>
          {(data) => <div>{data[1].amount}</div>}
        </Await>
      </Suspense> */}
      <Link to="/record/income">Income Data</Link>
    </>
  );
};

export default Index;
