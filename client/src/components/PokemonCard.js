import React,{useState} from 'react';
import '../styles/PokemonCard.css';
import axios from 'axios';

export default function PokemonCard({pokemon, getTypeList}) {


    const { name, height, weight, id, back_default, front_default, types } = pokemon;
    const handledTypes = types.map(t => {
         return <span onClick={getTypeList}>{t}</span>;
    });

    return (
        
            <div className={'card'}> 
                <span>name:</span><span>{` ${name}`}</span><br/>
                <span>id:</span><span>{` ${id}`}</span><br/>
                <span>height:</span><span>{` ${height}`}</span><br/>
                <span>weight:</span><span>{` ${weight}`}</span><br/>
                <span>types:</span> <span>{handledTypes}</span><br/>
                <img
                    src={front_default}
                    onMouseOver = {e => e.currentTarget.src = back_default}
                    onMouseOut = {e => e.currentTarget.src = front_default}
                />
            
            </div>
        
    )
}
