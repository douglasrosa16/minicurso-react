import React, { useState } from 'react';

function Form(props){

    const [input, setInput] = useState('');

    function adicionarItens(e){
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

    return (
        <form onSubmit={adicionarItens} className='lista-form'>
            <>
                <input
                    placeholder='Adicione aqui'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    name='text'
                    className='lista-input'            
                />
                <button onClick={adicionarItens} className='lista-button'>
                    Adicionar
                </button>
            </> 
        </form>
      ); 
}

export default Form;