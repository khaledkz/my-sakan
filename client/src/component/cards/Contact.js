import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import ApiClient from '../../helper/apiclient/apiClient';

function onChange(response) {
  console.log(response);
  this.setState({
    "g-recaptcha-response": response
  });
}
class Contact extends Component {
     state={
         reacptcha:false,
         msg:'',
          response:''
     }
    onChange=(response)=> {
        console.log(response);
        this.setState({
          response: response,
          reacptcha:true
        });
      }
    checkRecaptcha=()=>{
            if(this.state.reacptcha){
                ApiClient.postReca(this.state.response).then((r)=>{
                    console.log(r)
                })   
            }else{
                this.setState(
                    {msg:'please check reacaptcha'}
                )
            }
    }

     

    check(e) { 
        console.log(e)     
    }

  render() {
    return (
      <div>
        <p>Contact Page</p>
        <Form onSubmit={this.check}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="text"
              placeholder="with a placeholder"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" required />
          </FormGroup>
          <FormGroup required>
          <ReCAPTCHA
            ref="recaptcha"
            sitekey="6LeaUVMUAAAAAJxBWHfpFFI3urwt_P-dNZEUsaJh"
            onChange={this.onChange}
          />
            <h1>{this.state.msg}</h1>
            </FormGroup>
          <Button onClick={this.checkRecaptcha}>submit</Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
