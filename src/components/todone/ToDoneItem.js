import React, { Component } from 'react'



 class ToDoneItem extends Component {


    render() {

        const {eachitem2,onStatusChange} = this.props;

        return (
            <div className="todones-item">

               <p>{eachitem2.task}</p>

               {/* Button */}
               <div className="actions" >

                    <button   className="btn" onClick={ () => onStatusChange(eachitem2.id) } > &#8635; </button>
               
               </div>
                
            </div>
        )
    }
}

export default ToDoneItem;
