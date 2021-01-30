import React, { Component } from 'react'

import ToDoItem from "./ToDoItem"

class ToDosContainer extends Component {

    // ! STATE: =================================
    // At the beginning input is empty. So we defined empty value!

    // Ist Way to create STATE==========
    // state ={
    //     value : ""
    // }

    // 1st Way to create State "CONSTRUCTOR"
        constructor(props){
        super(props);

        this.state = {
            value: " "
    }
// ! Ist Way to Define Bind (Inside the Constructor)
this.handleNewTodoChange =this.handleNewTodoChange.bind(this);
this.handleSubmit =this.handleSubmit.bind(this);
}


    // ! CHANGE:=================================

    // onChange : to get the data inside the input immediately

    // ! 1ST WAY TO DEFINE FUNCTION ( ARROW )
    // ! 2ND WAY : NO NEED TO DEFINE BIND WITH (ARROW)
    // handleNewTodoChange = (event) => {

    // this.setState ({
    //         value : event.target.value
    //     });
        
    // }


 // ! 2ND WAY TO DEFINE FUNCTION ( CLASSIC)
  handleNewTodoChange (event) {
      this.setState ({
          value: event.target.value
      });
}


    // ! SUBMIT :=================================
    // ! 1ST WAY TO DEFINE FUNCTION ( ARROW )

      // To not refresh the page so you will keep the data inside the input***********

    // handleSubmit = (event) => {
    //     event.preventDefault(); 
    //     this.props.handleAddTodo(this.state.value);
    //   this.setState({
    //         value : ""
    //     }); 
    // }

    //  2WAY to define Function (CLASSIC)
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAddTodo(this.state.value);
        this.setState({
            value: ""
        });
    }


    render() {

        const {items,handleChange} = this.props;

        return (
            <div className="todos-container">
{/* ========================================FORM=========================================== */}

{/* STEP 3: CREATE A FORM TO ADD ITEM */}

            <form className="todo-form" onSubmit={this.handleSubmit.bind(this)} >

                <label className="input-item">


{/* =3RD WAY :TO DEFINE BIND (INSIDE THE EVENT)=================== */}
                                     
                    <input value={this.state.value} onChange={this.handleNewTodoChange.bind(this)}/>

                </label>

                {/* Submit Part = ADD */}

                    <input className="btn" type="submit" value="ADD"/>

            </form>

                {/* ========================MAP=========================== */}

                            <div className="todos">
                            <h1> TO DO </h1>
                                            {
                                                items.map( el => {

                                                    return(

                                                        <ToDoItem
                                                        eachitem = {el}
                                                        onStatusChange={handleChange}
                                                        key={el.id}
                                                        />

                                                    )

                                                })

                                            }


                            </div>
                
            </div>
        )
    }
}

export default ToDosContainer;
