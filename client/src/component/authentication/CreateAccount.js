import React,{Component}  from 'react';
import ApiClient from '../../helper/apiclient/apiClient'
 export default class CreateAccount extends Component {

    constructor() {
        super();
    
        this.state = {
          username: '',
          password: '',
          default:''
        }
      }

    handleUserName=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    handlePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
 
    submitAccount=()=>{
        console.log(this.state.password+" | "+this.state.username)
        ApiClient.PostCreateAccount(this.state.username,this.state.password)
        .then(response => {
            console.log(response, 'Account Created!');
          })
          .catch(err => {
            console.log(err, 'Account not added, try again');
          });
    }

    render(){
        return(
                <div >

                    <h1>Create New Account </h1>
        
                    <h3>UserName </h3>
                    <input type="text"     name="username" onChange={this.handleUserName} placeholder="username" />
        
                    <h1>Password </h1>
                    <input type="password"  name="password" onChange={this.handlePassword}placeholder="password"/>
        
                    <button onClick={this.submitAccount}>Create Account</button>
                </div>
        )   
    }
}