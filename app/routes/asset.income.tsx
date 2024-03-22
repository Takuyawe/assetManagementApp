import { format } from '@formkit/tempo';
import { ActionFunctionArgs, json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { useCallback, useEffect, useState } from 'react';
import { css } from 'styled-system/css';
import ErrorMessage from '~/components/errorMessage';
import InputAmount from '~/components/inputAmount';
import SelectCategory from '~/components/selectCategory';
import { INCOME_CATEGORIES } from '~/consts';
import { prisma } from '~/lib/prisma';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const date = new Date();
  format(date, 'medium', 'zh');
  try {
    const data = await prisma.income.create({
      data: {
        date: date,
        amount: Number(formData.get('amount')),
        category: String(formData.get('category')),
      },
    });
    console.log(data);
    return json({ message: '登録しました', status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      return json({ message: 'エラーが発生しました', status: 500 });
    }
  }
};

const Income = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const actionData = useActionData<typeof action>();

  const handleBeforeunload = useCallback(
    (event: BeforeUnloadEvent) => {
      if (inputAmount !== 0) {
        event.preventDefault();
      }
    },
    [inputAmount]
  );

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeunload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeunload);
    };
  }, [handleBeforeunload]);

  return (
    <>
      <Form method="post">
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: '3rem',
          })}>
          <div
            className={css({
              display: 'flex',
              justifyContent: 'center',
              height: '3rem',
              width: '25rem',
              columnGap: '2rem',
            })}>
            <SelectCategory categories={INCOME_CATEGORIES} />
            <InputAmount
              inputAmount={inputAmount}
              setInputAmount={setInputAmount}
            />
          </div>
          <button
            className={css({
              cursor: 'pointer',
              height: '3rem',
              width: '20rem',
              bgColor: { base: '#001327', _hover: '#bddeff' },
              borderRadius: '0.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: { base: 'white', _hover: '#001327' },
              transitionDuration: '0.3s',
            })}
            type="submit">
            追加
          </button>
        </div>
      </Form>
      {actionData && (
        <ErrorMessage message={actionData.message} status={actionData.status} />
      )}
    </>
  );
};

export default Income;
