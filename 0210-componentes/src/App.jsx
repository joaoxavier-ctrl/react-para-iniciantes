import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from '../Form/Form';

const Teste = () => {
  const active = true;
  if(active){
    return <p>Teste</p>
  } else {
    return null
  }
};

const App = () => {
  return (
  <div>
    <Header />
    <Form />
    <Footer />
  </div>
  )
}

export default App;
