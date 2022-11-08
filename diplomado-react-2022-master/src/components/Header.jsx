import { memo } from 'react';

const Header = () => {
  console.log('Header');
  return <>Hola soy la cabecera</>
};

export default memo(Header);