import { css } from 'styled-system/css';

type Props = {
  categories: string[];
};

const SelectCategory = ({ categories }: Props) => {
  return (
    <select
      className={css({
        width: '10rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 'bold',
      })}
      name="category">
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default SelectCategory;
