import React,{Component} from 'react';
import {connect} from 'react-redux'

 class Profile extends Component{
    render(){
        return(<div>profile</div>)
    }
}

let stateToProps=(state)=>{
    return{state:state}
}
export default connect (stateToProps)(Profile);