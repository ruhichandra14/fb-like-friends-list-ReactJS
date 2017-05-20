import React,{Component} from 'react';


export default class ListComponent extends Component{
    constructor(props) {
    super(props);
        this.state = {
        search : '',
        respData : this.props.respData.respData
    };
  }

componentWillReceiveProps(nextProps){
 
}

updateSearch(event){
    console.log("***********event.target.value ",event.target.value.substr(0,15));
    this.setState({search:event.target.value.substr(0,15)});
}

addnewFriend(event){
    event.preventDefault();
    let id = Math.floor((Math.random() * 100) + 1);
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
        if(name != "" && phone != ""){
            this.setState({     
            respData : this.props.respData.respData.push({id,name,phone}) 
            })      
        }
        else{
            //write using reactjs
            var x = this.refs.snackbar;
            x.innerHTML = "Looks like an anonymous Friend"
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
    this.refs.name.value = '';
    this.refs.phone.value = '';
}


    
	renderList(){
        let filteredContacts = this.props.respData.respData.filter(
            (friend,index) => {
              return friend.name.toLowerCase().indexOf(this.state.search.toLowerCase() )!== -1;
            }
        );
        console.log("this.props.respData.respData - in ender",this.props.respData.respData);
   
        return filteredContacts.map((friend) => {
    		return(
                <div>  
               	    <label htmlFor={friend.name} className="label-list">                       
                        <input type = "button" value = "Add"  className="button-list" id = {friend.name} onClick = {() => this.props.addFriend(friend)} />
                        <li key= {friend.name} className="name-list">{friend.name}  {friend.phone}</li>
                    </label>
                </div>
    		);
	    });
    }

render(){
    console.log("***********************rendering***********************");
   
    return(
        <div id ="wrapper">
            <header>Friends List</header>
            <label id="search-label">Enter the friends name  <input name = "friend details" id="search" value={this.state.term}
            value = {this.state.search}
            placeholder = "search"
            onChange = {this.updateSearch.bind(this)}
            /></label>

            <form onSubmit = {this.addnewFriend.bind(this)} id="addition-form">
              <input type = "text" ref="name" id="addition-name"/>
              <input type = "text" ref="phone" id="addition-phone"/>
              <button type="submit" id="addition-button">Add a Friend</button>
             </form>
            <ul className ="col-sm-4" id="ul-list">
                {this.renderList()}
            </ul>
            <div id="snackbar" ref="snackbar"></div>
        </div>
      )
    }
}
