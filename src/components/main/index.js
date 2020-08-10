import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Main extends Component {

  render() {
    const { results } = this.props;

    return (
      <Page
        results={results}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state,
  };
};

export default connect(mapStateToProps)(Main);