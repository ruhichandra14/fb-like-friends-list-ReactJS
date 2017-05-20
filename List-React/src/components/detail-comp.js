import React,{Component} from 'react';


export default class DetailComponent extends Component{
	constructor() {
    super();
    this.state = {
        addedArr : []
    };
  }

	render(){
        
    	if(!this.props.addedfriend){
            return <div className="noresult-container">No friends yet!</div>;
        }
    	else{
            console.log("NAME ",this.props.addedfriend.name);
            if(this.state.addedArr.indexOf(this.props.addedfriend.name) == -1){
                this.state.addedArr.push(this.props.addedfriend.name);
            }
            else{
                alert(this.props.addedfriend.name + " has already been added");
            }
            console.log("NEW ADDED ARR IS ",this.state.addedArr);

            var arrayvar = this.state.addedArr.slice()
            console.log("arrayvar is ----------",arrayvar);


            
            console.log("checking event value----- ",this.props.displayFriend.value);
            var ADDEDLIST = this.state.addedArr.map((number) =>
                <li>{number}</li>
            );

           
    		return(
                <div className="result-container">

                <ul>{ADDEDLIST}</ul>  
                <input type = "button" value = "Display" id="display-button" onClick = {() => this.props.displayFriend(arrayvar)} />                       
                </div>	  
    		);
    	}
	}
}