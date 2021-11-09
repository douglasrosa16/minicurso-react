import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

function Itens({itens, removeLista}){
    return itens.map((item, index) => (
        <div className={'lista-caixinha'} key={index}>
            <div key={item.id}>
                {item.text}
            </div>
            <div className='icones'>
                <RiCloseCircleLine 
                    onClick={() => removeLista(item.id)}
                /> 
            </div>
        </div>
    ))
};

export default Itens;