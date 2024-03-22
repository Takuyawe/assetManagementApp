import { FieldMetadata } from '@conform-to/react';
import { css } from 'styled-system/css';

type Props = {
  categories: string[];
  fields: FieldMetadata;
};

const SelectCategory = ({ categories, fields }: Props) => {
  return (
    <select
      id={fields.id}
      className={css({
        height: '3rem',
        width: '10rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 'bold',
      })}
      name={fields.name}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default SelectCategory;
