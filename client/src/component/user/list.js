import React,{Component} from 'react';
import {connect} from 'react-redux'
 class UserList extends Component{
    render(){
        return(<div>Lists</div>)
    }
}

let stateToProps=(state)=>{
    return{state:state}
}
export default connect (stateToProps)(UserList);