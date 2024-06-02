import React from 'react'
import { toast } from 'react-toastify'

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddToDo = () => {
        //prettier-ignore
        function randomID() {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
            }
            return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
        }

        if (!this.state.title) {
            toast.error("Missing title's Todo!")
            return
        }

        let todo = {
            id: randomID(),
            title: this.state.title
        }

        this.props.addNewTodo(todo)

        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state

        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button
                    type="button"
                    className="add"
                    onClick={() => this.handleAddToDo()}
                >
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo
