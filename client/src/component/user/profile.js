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
            apiClients.getUserProfile(userDetails).then((response)=>{
                
                this.setState({
                    userProfile:response.data
                })
            })
        }
     }

     render(){
        //  if(this.state.userProfile.country){
        //     // console.log(this.state.userProfile.country.name)
        //  }
         if(this.state.userProfile.country && this.state.userProfile.image){
        return(
        <div>

            {/* 
 
image
:
{cover: "https://www.gettyimages.ie/gi-resources/images/Hom…age/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg", profile: "http://www.ptahai.com/wp-content/uploads/2016/06/B…e-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg"}
 
  */}
            <img src={this.state.userProfile.image.profile}/>
            <img src={this.state.userProfile.image.cover}/>  
            
            <h2>first Name:</h2>  
            <h4>{this.state.userProfile.firstName}</h4> 

            <h2>lastName:</h2>  
            <h4>{this.state.userProfile.lastName}</h4> 

            <h2>username:</h2>  
            <h4>{this.state.userProfile.username}</h4> 

            <h2>emailAddress:</h2>  
            <h4>{this.state.userProfile.emailAddress}</h4> 

            <h2>phoneNumber:</h2>  
            <h4>{this.state.userProfile.phoneNumber}</h4> 

            <h2>dateOfBirth:</h2>  
            {/* <h4>{this.state.userProfile.dateOfBirth.day}/{this.state.userProfile.dateOfBirth.month}/{this.state.userProfile.dateOfBirth.year}</h4>  */}

            

            <h2>star:</h2>  
            <h4>{this.state.userProfile.star}</h4> 
 
            <h2>country:</h2>  
            <h4>{this.state.userProfile.country.name}</h4>  

            <h2>first Name:</h2>  
            <h4>{this.state.userProfile.firstName}</h4> 

            <h2>first Name:</h2>  
            <h4>{this.state.userProfile.firstName}</h4>  
        </div>)
    }else{
        if(this.state.userProfile.country ){
        return (<div>

      
        <h2>first Name:</h2>  
        <h4>{this.state.userProfile.firstName}</h4> 

        <h2>lastName:</h2>  
        <h4>{this.state.userProfile.lastName}</h4> 

        <h2>username:</h2>  
        <h4>{this.state.userProfile.username}</h4> 

        <h2>emailAddress:</h2>  
        <h4>{this.state.userProfile.emailAddress}</h4> 

        <h2>phoneNumber:</h2>  
        <h4>{this.state.userProfile.phoneNumber}</h4> 

        <h2>dateOfBirth:</h2>  
        {/* <h4>{this.state.userProfile.dateOfBirth.day}/{this.state.userProfile.dateOfBirth.month}/{this.state.userProfile.dateOfBirth.year}</h4>  */}

        

        <h2>star:</h2>  
        <h4>{this.state.userProfile.star}</h4> 

        <h2>country:</h2>  
        <h4>{this.state.userProfile.country.name}</h4>  

        <h2>first Name:</h2>  
        <h4>{this.state.userProfile.firstName}</h4> 

        <h2>first Name:</h2>  
        <h4>{this.state.userProfile.firstName}</h4>  
    </div>)
    }else{
        return 'loding'
    }
}
}
 }

let stateToProps=(state)=>{
    return{user:state.userAuthentication}
}
export default connect (stateToProps)(Profile);