import React,{Component} from 'react';
import {connect} from 'react-redux';
import apiClients from '../../helper/apiclient/apiClient';
 class Profile extends Component{
     constructor(){
        super();
        this.state={
            userProfile:{}
        }
     }
     
    componentDidMount(){
        let userDetails=this.props.user.user;
        if(this.props.user.authenticate){
            console.log(userDetails);
            //  apiClients.getUserProfile(userDetails)
        }
     }

     render(){
        //  console.log(this.props.user.user)
        return(<div>profile</div>)
    }
}

let stateToProps=(state)=>{
    return{user:state.userAuthentication}
}
export default connect (stateToProps)(Profile);