import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = props => {
    const [idRecipe, setIdRecipe] = useState(null);
    const [recipeCtx, setRecipe] = useState({});

    useEffect(() => {
        const getRecipes = async () => {
            if (!idRecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
            const recipe = await axios.get(url);
            setRecipe(recipe.data.drinks[0]);
        };

        getRecipes();
    }, [idRecipe]);

    return (
        <ModalContext.Provider
            value={{
                recipeCtx,
                setIdRecipe,
                setRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;
