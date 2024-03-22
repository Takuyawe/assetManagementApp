import { getFormProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { format } from '@formkit/tempo';
import { ActionFunctionArgs } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { useCallback, useEffect, useState } from 'react';
import { css } from 'styled-system/css';
import { z } from 'zod';
import InputAmount from '~/components/inputAmount';
import SelectCategory from '~/components/selectCategory';
import { INCOME_CATEGORIES } from '~/consts';
import { prisma } from '~/lib/prisma';
// import ResultMessage from '~/components/resultMessage';
import ErrorMessage from '~/components/errorMessage';

// const schema = z.object({
//   category: z.preprocess(
//     (value) => (value === '' ? undefined : value),
//     z.string({ required_error: 'カテゴリーは必須項目です' })
//   ),
//   amount: z.preprocess(
//     (value) => (value === '' ? undefined : value),
//     z.number({ required_error: '金額は必須項目です' })
//   ),
// });

const schema = z.object({
  category: z.string({ required_error: 'カテゴリーは必須項目です' }),
  amount: z
    .number({ required_error: '金額は必須項目です' })
    .min(0, 'そんな金額はありません')
    .max(10000, 'そんな大金あなたが手に入れるはずありません'),
});

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

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
    return submission.reply();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return submission.reply();
    }
  }
};

const Income = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const lastResult = useActionData<typeof action>();

  const [form, fields] = useForm({
    lastResult,
    constraint: getZodConstraint(schema),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

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
      <Form method="post" {...getFormProps(form)}>
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
              height: '8rem',
              width: '25rem',
              columnGap: '2rem',
            })}>
            <div
              className={css({
                display: 'flex',
                flexDirection: 'column',
                rowGap: '0.5rem',
                height: '6rem',
                alignItems: 'center',
                justifyContent: 'center',
              })}>
              <SelectCategory
                categories={INCOME_CATEGORIES}
                fields={fields.category}
              />
              {fields.category.errors && (
                <ErrorMessage message={fields.category.errors[0]} />
              )}
            </div>

            <div
              className={css({
                display: 'flex',
                flexDirection: 'column',
                rowGap: '0.5rem',
                height: '6rem',
                alignItems: 'center',
                justifyContent: 'center',
              })}>
              <InputAmount
                inputAmount={inputAmount}
                setInputAmount={setInputAmount}
                fields={fields.amount}
              />
              {fields.amount.errors && (
                <ErrorMessage message={fields.amount.errors[0]} />
              )}
            </div>
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
      {/* <ResultMessage /> */}
      {/* {fields && <ResultMessage />} */}
    </>
  );
};

export default Income;
