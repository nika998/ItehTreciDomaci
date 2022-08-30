import React, { Component } from "react";
import ReturnDate from "./ReturnDate";


class ChosenBook extends Component {
    
    render() {
        const { id, name, description, pages } = this.props.book;
     
        return (
            <div>
                <h3>Your chosen book is: </h3>
                <tr>
                    <td style={{ width: "100px", textAlign: "center" }}>{id}</td>
                    <td>{name}</td>
                    <td style={{ width: "600px" }}>{description}</td>
                    <td style={{ width: "100px" }}>{pages}</td>
                </tr >
               
             
               <ReturnDate/>

            </div>
        );
    }
}

export default ChosenBook;
