import React, { Component } from 'react'

import ToDosContainer from "./components/todo/ToDosContainer"

import ToDonesContainer from "./components/todone/ToDonesContainer"

import "./css/App.scss"

class App extends Component {

    // How to define Regular State Method==============
//     state = {
//         myList:[
//             {id:1, task:"Wash my face!", done:false}, 
//             {id:2, task:"Walk the dog", done:false},
//             {id:3, task:"Pay the rent", done:false},
//             {id:4, task:"Make so moneys", done:false},
//             {id:5, task:"Make a website", done:true},
//             {id:6, task:"Call my mom", done:true},
//             {id:7, task:"Finish reading my book", done:true},
//             {id:8, task:"Make more moneys", done:true}
          
//         ]

//     }
//      /* ==========================ADD ITEM=================================== */

//      // STEP 1: DEFINE YOUR ADD FUNCTION!
// //  Add new Items Function
//     addItem = value => {

//         // STEP 1.1 : DEFINE YOUR NEW ITEM OBJECT!
        
//         const newItem = {
//             id: this.state.myList.length+1 ,
//             task: value ,
//             done: true
//         }

//         console.log(newItem);
//         console.log(this.state.myList.length);

//         // STEP 1.2 : USE NEW ITEM OBJECT WITH THE PREVIOUS ONE TO CREATE NEW ARRAY
//         this.setState({
//         myList:[...this.state.myList, newItem] // => [{id: this.state.myList.length ,task: value ,done: false}]
//         });

//         console.log(this.state.myList);

//     };


//     /* =========================UPDATE ITEM==================================== */

//     updateMyList = myId => {
        
//         let newList = this.state.myList.map( arrayItem => {

//         if(arrayItem.id === myId ){
//             arrayItem.done = ! arrayItem.done 
//             return arrayItem;
//         } else return arrayItem;        
//         });

//         this.setState({
//             myList:newList,
//         })

//     };
     /* ============================================================= */

    /* =======STATE CONSTRUCTION METHOD***********================= */
    
    constructor(props) {
    super (props) ;
        this.state = {
        myList: [
            {id:1, task:"Wash my face!", done:false}, 
            {id:2, task:"Walk the dog", done:false},
            {id:3, task:"Pay the rent", done:false},
            {id:4, task:"Make so moneys", done:false},
            {id:5, task:"Make a website", done:true},
            {id:6, task:"Call my mom", done:true},
            {id:7, task:"Finish reading my book", done:true},
            {id:8, task:"Make more moneys", done:true},         
        ],

    };
}
     /* ==========================ADD ITEM=================================== */

     // STEP 1: DEFINE YOUR ADD FUNCTION!
//  Add new Items Function
    addItem(value)  {

        // STEP 1.1 : DEFINE YOUR NEW ITEM OBJECT!
        
        const newItem = {
            id: this.state.myList.length+1 ,
            task: value ,
            done: true,
        };

        console.log(newItem);
        console.log(this.state.myList.length);

        // STEP 1.2 : USE NEW ITEM OBJECT WITH THE PREVIOUS ONE TO CREATE NEW ARRAY
        this.setState({
        myList:[...this.state.myList, newItem] // => [{id: this.state.myList.length ,task: value ,done: false}]
        });

        console.log(this.state.myList);
    }


    /* =========================UPDATE ITEM==================================== */
// CLASSIC Function HERE#################################
    

    updateMyList (myId)  {
        
        let newList = this.state.myList.map( arrayItem => {

        if(arrayItem.id === myId ){
            arrayItem.done = ! arrayItem.done 
            return arrayItem;
        } else return arrayItem;        
        });

        this.setState({
            myList:newList
        });

    }

    render() {

       const toDos = this.state.myList.filter(e1 => e1.done );
       const toDones = this.state.myList.filter(e2 => ! e2.done);

        return (
            <div className="app">
{/* =========================================================================== */}
{/* STEP 2: DEFINE ATTRIBUTE FOR ADDITEM FUNCTION */}
{/* Normal state Method */}
                {/* Todo List */}
        {/* <ToDosContainer items={toDos} handleChange={this.updateMyList} handleAddTodo={this.addItem}/>

                {/* To Done List 
         <ToDonesContainer items2={toDones} handleChange2={this.updateMyList}/>  */}
{/* =========================================================================== */}

{/* Construction Method */}
<ToDosContainer items={toDos} handleChange={this.updateMyList.bind(this)} handleAddTodo={this.addItem.bind(this)}/>
<ToDonesContainer items2={toDones} handleChange2={this.updateMyList.bind(this)}/>
            </div>
        );
    }
}

export default App;