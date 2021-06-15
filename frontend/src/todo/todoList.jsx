import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []

        return(
            list.map(element => (
                <tr key={element._id}>

                    <td className={element.done ? "markedAsDone" : ""}>
                        {element.description}
                    </td>

                    <td>
                        <IconButton 
                            style="success" 
                            icon="check"
                            hide={element.done}
                            onClick={() => props.handleMarkAsDone(element)}
                        />
                        <IconButton 
                            style="warning" 
                            icon="undo"
                            hide={!element.done}
                            onClick={() => props.handleMarkAsPending(element)}
                        />
                        <IconButton 
                            style="danger" 
                            icon="trash-o"
                            hide={!element.done}
                            onClick={() => props.handleRemove(element)}
                        />
                    </td>
                </tr>
            ))
        )
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

// todo disponível no arquivo reducers
const mapStateToProps = state => ({ list: state.todo.list }) 

export default connect(mapStateToProps)(TodoList)