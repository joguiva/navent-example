import React, { Component } from 'react';

const withResults = (WrappedComponent) => {
  class AddResults extends Component {

    setLocalStorage = (session) => {
      localStorage.setItem('this-session', JSON.stringify(session));
    }

    checkLocalStorage = () => {
      const session = JSON.parse(localStorage.getItem('this-session'));

      if (!session) {
        const data = {
          favorites: [],
          contacts: []
        }
        this.setLocalStorage(data);

        return data;
      }

      return session;
    }

    checkFavorite = (fav) => {
      let session = this.checkLocalStorage();

      return session.favorites.includes(fav);
    }

    toggleFavorite = (fav) => {
      let session = this.checkLocalStorage();

      if (session.favorites.includes(fav)) {
        session.favorites.splice(session.favorites.indexOf(fav), 1);
  
        this.setLocalStorage(session);

        return false;
      } else {
        session.favorites.push(fav);
        
        this.setLocalStorage(session);

        return true;
      }
    }

    sendContact = (email, id) => {
      let session = this.checkLocalStorage();
      console.log('session',session);

      let withId = session.contacts.filter((item) => item.id.toString() === id);
      console.log('withId',withId)
      let save = session.contacts.filter((item) => item.id.toString() !== id);
      console.log('save',save)

      if (withId.length > 0) {
        if (withId[0].email.includes(email))
          return false;
      } else {
        const newData = {id: id, email: [email]};
        session.contacts.push(newData);
        console.log('session', session);
        this.setLocalStorage(session);
        return true;
      }

      if (save.length > 0) {
        session.contacts = save;
      } else {
        session.contacts = [];
      }
      withId[0].email.push(email);
      console.log('new withId', withId);
      session.contacts.push(withId[0]);
      console.log('session', session);
      this.setLocalStorage(session);
      return true;
    }

    checkEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return re.test(email);
    }

    render() {
      return <WrappedComponent
          {...this.state}
          checkLocalStorage={this.checkLocalStorage}
          checkFavorite={this.checkFavorite}
          toggleFavorite={this.toggleFavorite}
          sendContact={this.sendContact}
          checkEmail={this.checkEmail}
          {...this.props}
        />
    }
  }

  return AddResults;
}

export default withResults
