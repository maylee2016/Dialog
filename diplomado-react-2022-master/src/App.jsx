// import PropTypes from 'prop-types';
import Menu from './components/Menu';
import Header from './components/Header';
import Aside from './components/Aside';
import { connect } from 'react-redux';
import { sumar, restar } from './store/actions';
import { useState, useEffect, useRef, useCallback } from 'react';

import './App.css';

// function Menu({ color, title }) {
//   return (
//     <li style={{ color }}>{title}</li>
//   );
// }


// Menu.propTypes = {
//   color: PropTypes.string,
//   title: PropTypes.string.isRequired
// }

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer.counter
  }
}

const App = ({ counter, sumar, restar}) => {

  const divMain = useRef(null);
  
  const [uno, setUno] = useState(0);
  const [dos, setDos] = useState(0);
  const [tres, setTres] = useState(0);

  // const [isDark, setIsDark] = useState(true);

  // const [count, setCount] = useState(0);

  // const [person, setPerson] = useState({
  //   name: 'Adrian',
  //   email: 'adrian@adrian.test',
  //   dni: 1111111
  // });

  const incrementarUno = useCallback(() => {
    setUno(uno + 1);
  }, [uno]);

  const incrementarDos = useCallback(() => {
    setDos(dos + 1);
  }, [dos]);

  const incrementarTres = useCallback(() => {
    setTres(tres + 1);
  }, [tres]);

  useEffect(() => {
    // General
    // console.log('General');
  });

  useEffect(() => {
    // peticiones
    // console.log('Peticiones');/
  }, []);

  useEffect(() => {
    // mapeos
    // console.log('Mapeos');
    // const div = document.getElementById('main');
    // div.setAttribute('style', 'background: red');
    // console.log(divMain);
  }, []);



  // const change = () => {
  //   console.log('estoy cambiando a modo');
  //   setIsDark(!isDark);
  //   // setPerson({
  //   //   ...person,
  //   //   name: 'Adrian 2',
  //   // });
  // }

  // const add = () => {
  //   setCount(prevCount => prevCount + 1); // 0 + 1 = 1
  //   setCount(prevCount => prevCount + 1); // 1 + 1 = 2
  //   setCount(prevCount => prevCount + 1); // 2 + 1 = 3
  // }

  const test = (msg) => {
    console.log(msg);
  }

  return (
    <div className="App" id={Math.floor(Math.random() * 10)}>
      <>Contador {counter}</>
      <button onClick={() => sumar(10)}>Sumar</button>
      <button onClick={() => restar()}>Restar</button>
      {/* <Header/>
      <Aside title={'aside 1'} value={uno} fn={incrementarUno}/>
      <Aside title={'aside 2'} value={dos} fn={incrementarDos}/>
      <Aside title={'aside 3'} value={tres} fn={incrementarTres}/> */}
      {/* <div ref={divMain}>
        Contenido del div main
      </div>
      <ul>
        { count }
        <button onClick={change}>Esconder</button>
        { isDark ? <Menu/> : <>Componente no disponible...</> }
      </ul> */}
    </div>
  );
}

export default connect(mapStateToProps, {sumar, restar})(App);
