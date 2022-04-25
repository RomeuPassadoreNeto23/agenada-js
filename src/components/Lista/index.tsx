import React, { useState } from 'react';
import { ITarefas } from '../../types/Tarefas';
import Item from './item';
import style from './Lista.module.scss'

interface Props{
    tarefas: ITarefas[],
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void,
}


function Lista({ tarefas, selecionaTarefa}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map( item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}                       
                    />
                ))}

            </ul>
        </aside>
    )
}
export default Lista