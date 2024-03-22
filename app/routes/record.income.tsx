import { json } from '@remix-run/node';
import { Await, useLoaderData, useNavigation } from '@remix-run/react';
import React, { Suspense } from 'react';
import { css } from 'styled-system/css';
import { prisma } from '~/lib/prisma';

export const loader = async () => {
  const data = await prisma.income.findMany();
  return json(data);
  //   const message = 'hi';
  //   return json(message);
};

const Income = () => {
  const data = useLoaderData<typeof loader>();
  const sum = data.reduce((acc, val) => acc + val.amount, 0);
  const navigation = useNavigation();
  return (
    <div className={css({ color: 'white', fontSize: '2rem' })}>
      {navigation.state === 'loading' ? 'Loading...' : sum}
    </div>
    // <Suspense fallback={<div>Loading...</div>}>
    //   <Await errorElement={<div>Error</div>} resolve={data}>
    //     {(data) => <p>{data.reduce((acc, val) => acc + val.amount, 0)}</p>}
    //   </Await>
    // </Suspense>
  );
};

export default Income;
