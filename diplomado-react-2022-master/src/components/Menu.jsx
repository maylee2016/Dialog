import {useEffect} from 'react';
import getData from '../Apis';

const Menu = ({ color = 'yellow', title }) => {

  const getWidth = () => {
    console.log(window.innerWidth);
  };

  useEffect(() => {
    // window.addEventListener('resize', getWidth);
    console.log('componente menu cargado');
    getData();
    return () => {
      console.log('estoy eliminando el componente');
      // window.removeEventListener('resize', getWidth);
    }
  }, []);

  return (
    <>
      <>Este es el menu</>
      <>Hola este es otro div</>
    </>
  )
};

export default Menu;