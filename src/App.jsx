import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ListRecipes from './components/ListRecipes';

import RecetasProvider from './context/RecipesContext';
import CategoriesProvider from './context/CategoriesContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriesProvider>
      <RecetasProvider>
        <ModalProvider>

          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>

            <ListRecipes />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriesProvider>
  );
}

export default App;
