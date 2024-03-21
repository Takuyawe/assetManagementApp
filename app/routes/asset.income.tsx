import { Form } from '@remix-run/react';
import { css } from 'styled-system/css';
import InputAmount from '~/components/inputAmount';
import SelectCategory from '~/components/selectCategory';
import { INCOME_CATEGORIES } from '~/consts';

const Income = () => {
  return (
    <Form>
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
          <InputAmount />
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
          })}>
          追加
        </button>
      </div>
    </Form>
  );
};

export default Income;
