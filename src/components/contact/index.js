import React, { Component } from 'react';
import withResults from '../HOC/WithResults';
import Page from './page';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state= {
      email: '',
      error: false,
      errorEmail: '',
      sending: false,
      success: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.onCheckEmail = this.onCheckEmail.bind(this);
    this.endSuccess = this.endSuccess.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      email: e,
      error: false,
      errorEmail: ''
    })
  }

  sendEmail = () => {
    if (this.props.sendContact(this.state.email, this.props.itemId)) {
      setTimeout(() => {
        this.setState({
          sending: false,
          success: true
        })
        this.endSuccess();
      }, 3000)
    } else {
      setTimeout(() => {
        this.setState({
          error: true,
          errorEmail: 'Ya hiciste una consulta',
          sending: false
        })
      }, 3000)
    }
  }

  endSuccess = () => {
    setTimeout(() => {
      this.setState({
        success: false
      });
      this.props.onClose();
    }, 5000)
  }

  onCheckEmail = () => {
    if (this.props.checkEmail(this.state.email)) {
      this.setState({
        error: false,
        errorEmail: '',
        sending: true
      })
      this.sendEmail()
    } else {
      this.setState({
        error: true,
        errorEmail: 'Necesitamos un correo válido'
      })
    }
  }

  onClose = () => {
    this.props.onClose();
  }
  
  render() {
    return (
      <Page
        open={this.props.open}
        handleChange={this.handleChange}
        error={this.state.error}
        errorEmail={this.state.errorEmail}
        send={this.onCheckEmail}
        sending={this.state.sending}
        onClose={this.onClose}
        success={this.state.success}
      />
    )
  }
}

export default withResults(Contact);