import { css } from 'styled-system/css';

const Index = () => {
  return (
    <p
      className={css({
        color: 'white',
        fontSize: '1.5rem',
      })}>
      収入か支出を選択してください
    </p>
  );
};

export default Index;
