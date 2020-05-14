import React from 'react';

import CategoriasProvider from './context/CategoriasContext';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <CategoriasProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
