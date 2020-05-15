import React, { useContext, useState } from 'react';

import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {
    const { categories } = useContext(CategoriesContext);
    const { searchRecipes, setConsult } = useContext(RecipesContext);

    const [search, setSearch] = useState({
        name: '',
        category: ''
    });

    const getSearchRecipe = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form 
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                searchRecipes(search)
                setConsult(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Search for drinks by category or ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Search by ingredient"
                        onChange={getSearchRecipe}
                        autoComplete="off"
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        name="category"
                        className="form-control"
                        onChange={getSearchRecipe}
                    >
                        <option value="">-- Select a category --</option>
                        {categories.map(c => (
                            <option 
                                value={c.strCategory} 
                                key={c.strCategory}
                            >{c.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        value="Search drinks"
                        className="btn btn-primary btn-block"
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;
