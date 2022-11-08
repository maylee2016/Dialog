const sumar = (payload) => {
  return {
    type: 'ADD',
    payload
  }
};

const restar = () => {
  return {
    type: 'SUB',
    payload: -1
  }
};

export {
  sumar,
  restar
}