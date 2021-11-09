import React, { useState } from 'react';
import Form from './Form';
import ListaItem from './Itens';

function Lista(){
    const [lista, setLista] = useState([]);

    function addItem(item){
        if (!item.text || /^\s*$/.test(item.text)) {
            return;
        }

        const newLista = [item, ...lista]; 

        setLista(newLista);
    }

    function removeLista(id){
        const newArray = [...lista].filter(item => item.id !== id);
        
        setLista(newArray);
    }

    return (
        <>
            <h1>Minicurso React - Lista</h1>  
            <Form onSubmit={addItem}/>
            <ListaItem
                itens={lista}
                removeLista={removeLista}
            />
        </>
    )
};

export default Lista;