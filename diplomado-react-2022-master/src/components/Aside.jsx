import {memo} from 'react';

const Aside = ({ title, value, fn}) => {
  console.log(title);
  return <>
    <div>{title}</div>
    <div>{value}</div>
    <button onClick={fn}>Ejecutar</button>
  </>;
};

export default memo(Aside);