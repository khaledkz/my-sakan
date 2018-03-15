import React,{Component} from 'react';
import {connect} from 'react-redux'
 class Account extends Component{
    render(){
        return(<div>Account</div>)
    }
}

let stateToProps=(state)=>{
    return{state:state}
}
export default connect (stateToProps)(Account);