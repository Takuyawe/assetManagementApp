import { defer, json } from '@remix-run/node';
import { Await, useLoaderData, useNavigation } from '@remix-run/react';
import React, { Suspense } from 'react';
import { css } from 'styled-system/css';
import { prisma } from '~/lib/prisma';

export const loader = async () => {
  const data = await prisma.income.findMany();
  const sum = data.reduce((acc, val) => acc + val.amount, 0);
  return json({ sum });
  //   const message = 'hi';
  //   return json(message);
};

const Income = () => {
  const { sum } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <p className={css({ color: 'white', fontSize: '2rem' })}>{sum}</p>
    // <Suspense fallback={<div>Loading...</div>}>
    //   <Await errorElement={<div>Error</div>} resolve={data}>
    //     {(data) => (
    //       <p className={css({ color: 'white', fontSize: '2rem' })}>
    //         {data.reduce((acc, val) => acc + val.amount, 0)}
    //       </p>
    //     )}
    //   </Await>
    // </Suspense>
  );
};

export default Income;
