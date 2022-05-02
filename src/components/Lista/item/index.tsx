

import { ITarefas } from '../../../types/Tarefas'
import style from '../Lista.module.scss'

interface Props extends ITarefas {
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void,
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    console.log('Item atual: ', tarefa, tempo, selecionado, completado, id, selecionaTarefa)
    return (
        <li 
        className={`${style.item} ${selecionado? style.itemSelecionado: ''} ${completado? style.itemCompletado: ''} `}
            onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado&& <span className={style.concluido} aria-label='tarefacompletada'></span>}
        </li>
    )
}
