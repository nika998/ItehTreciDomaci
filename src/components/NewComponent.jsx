import { Component } from "react";

class NewComponent extends Component{
    render(){
        const ime=this.props.ime;
        return(
            <div>
                <p>{ime}</p>
            </div>
        );
    }
    
}
export default NewComponent;
