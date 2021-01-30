import React, { Component } from 'react'

 class ToDoItem extends Component {


    render() {

        const {eachitem} = this.props;

        return (
            <div className="todo-item">

               <p>{eachitem.task}</p>

               {/* Button */}
               <div className="actions">
                    <button
                        className="btn"
                        onClick={() => this.props.onStatusChange(eachitem.id)}
                        
                    >

                        &#10004;
                    </button>
                    </div>
                
            </div>
        )
    }
}

export default ToDoItem;

