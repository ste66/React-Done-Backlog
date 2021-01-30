import React, { Component } from 'react'

import ToDoneItem from "./ToDoneItem"

class ToDonesContainer extends Component {

    render() {

        const {items2,handleChange2} = this.props;

        return (
            <div className="todones-container">
                <h1> BACKLOG </h1>
                {
                    items2.map( el => {

                        return(

                            <ToDoneItem
                            eachitem2 = {el}
                           
                            onStatusChange={handleChange2}

                            key={el.id}
                            />

                        )

                    })

                }

            </div>
        )
    }
}

export default ToDonesContainer;
