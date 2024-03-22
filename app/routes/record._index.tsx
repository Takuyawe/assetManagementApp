import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { prisma } from '~/lib/prisma';

export const loader = async () => {
  const data = await prisma.income.findMany();
  return json(data);
};

const Index = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.amount}</li>
        ))}
      </ul>
    </>
  );
};

export default Index;
