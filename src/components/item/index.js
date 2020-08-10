import React, { Component } from 'react';
import Page from './page';
import withResults from '../HOC/WithResults';
import moment from 'moment';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: this.props.checkFavorite(this.props.item.posting_id),
      modal: false
    }

    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleFavorite(id) {
    this.setState({
      favorite: !this.state.favorite
    });
  
    this.props.toggleFavorite(id);
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal
    })

    // this.props.sendContact(id);
  }

  render() {
    const {
      item,
      checkEmail
    } = this.props;

    const {
      favorite,
      modal
    } = this.state;

    return (
      <Page
        item={item}
        favorite={favorite}
        modal={modal}
        handleFavorite={this.handleFavorite}
        handleModal={this.handleModal}
        checkEmail={checkEmail}
      />
    )
  }
}

export default withResults(Item);