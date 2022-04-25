import React from "react";
import { ITarefas } from "../../types/Tarefas";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import {v4 as uuidv4} from 'uuid'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas =>
            [...tarefasAntigas,
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4(),
            }
            ]
        )
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um Estudo</label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
                        placeholder="Adicione um estudo"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Determine o Tempo</label>
                    <input
                        type="time"
                        name="tempo"
                        id="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                        step="1"
                        min="00:00:00"
                        max="02:00:00"
                        required
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )
    }
}
export default Formulario