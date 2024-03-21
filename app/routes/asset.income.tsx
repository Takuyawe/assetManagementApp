import { Form } from '@remix-run/react';
import { css } from 'styled-system/css';
import InputAmount from '~/components/inputAmount';
import SelectCategory from '~/components/selectCategory';
import { CATEGORIES } from '~/consts';

const Income = () => {
  return (
    <Form>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          height: '3rem',
          width: '25rem',
          columnGap: '2rem',
        })}>
        <SelectCategory categories={CATEGORIES} />
        <InputAmount />
      </div>
    </Form>
  );
};

export default Income;
