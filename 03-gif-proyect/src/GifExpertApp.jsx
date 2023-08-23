import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'Pokemon' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    const onClearCategory = ()=>{
        console.log('Todas las categorias borradas');
        setCategories([]);
    }
    const onClearLastCategory = () => {
        if (categories.length <= 0) {
            console.log('No hay más categorías para borrar');
            return;
        }
        
        const newCategories = categories.slice(1);
        setCategories(newCategories);
    }
    return (
        <>

            <h1>GifExpertApp</h1>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
            <button onClick={onClearCategory}>Borrar todo</button><button onClick={onClearLastCategory}>Borrar ultimo</button>
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
        </>
    )
}
