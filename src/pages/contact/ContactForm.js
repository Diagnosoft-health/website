
import React, { Component } from "react";
import "./Contact.css";
import axios from 'axios'

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    organization: "",
    message: "",
    sent: false,
  };

  //handle inputs
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSubject = (e) => {
    this.setState({
      subject: e.target.value,
    });
  };
  handleOrganization = (e) => {
    this.setState({
      organization: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  formSubmit=(e)=>{
      e.preventDefault();

      let data = {
          name:this.state.name,
          email:this.state.email,
          subject:this.state.subject,
          organization:this.state.organization,
          message:this.state.message
      }

      axios.post('/api/form', data)
      .then(res=>{
          this.setState({
              sent:true,
          },this.resetForm())
      }).catch(()=>{
          console.log('Message not sent')
      })
  }

  resetForm=()=>{
      this.setState({
        name: "",
        email: "",
        subject: "",
        organization: "",
        message: "",
      })

      setTimeout(()=>{
          this.setState({
              sent:false,
          })
      },3000)
  }
  render() {
    return (
      <>
        <p className={this.state.sent? "response msgSent" : "response"}>
          <i class="bi bi-check-lg"></i> Message sent
        </p>
        <div className="contact-form">
          <form autoComplete="off" onSubmit={this.formSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              value={this.state.name}
              onChange={this.handleName}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
            <input
              type="text"
              placeholder="Subject"
              value={this.state.subject}
              onChange={this.handleSubject}
            />
            <input
              type="text"
              placeholder="Your Organization"
              value={this.state.organization}
              onChange={this.handleOrganization}
            />
            <textarea
              type="textarea"
              placeholder="Your Message"
              rows="4"
              cols="50"
              value={this.state.message}
              onChange={this.handleMessage}
            />
            <input type="submit" value="Get in touch" />
          </form>
        </div>
      </>
    );
  }
}
