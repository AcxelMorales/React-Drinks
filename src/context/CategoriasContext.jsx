import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const CategoriasContext = createContext();

const CategoriasProvider = props => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categoriesDB = await axios.get(url);
            setCategories(categoriesDB.data.drinks);
        };

        getCategories();
    }, []);

    return (
        <CategoriasContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
};

export default CategoriasProvider;
