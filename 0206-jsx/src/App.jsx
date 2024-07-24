import React from 'react';

const App = () => {
  const nome = 'João';
  const random = Math.random();
  const titulo = <h1>Essé é o titulo REGINALDOO</h1>

  const carro = {
    marca: 'Ford',
    rodas: 4,
  }

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  }

  return (
    <>
      {titulo}  
      <a className='ativo' href="https://origamid.com" title='Isso é um site'>Origamid</a>
      <p>{nome}</p>
      <p>{random*100}</p>
      <p style={estiloP}>{carro.marca}</p>
      <p style={estiloP}>{carro.rodas}</p>
    </>
  );
}

export default App
