import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: this.props.results,
      publicationPlans: ['SUPERHIGHLIGHTED', 'HIGHLIGHTED', 'SIMPLE']
    }

    this.filterResults = this.filterResults.bind(this);
  }

  filterResults = (data) => {
    let sortData = [];
    this.state.publicationPlans.forEach(item => {
      let filtered = data.filter(n => n.publication_plan === item);
      sortData.push(filtered[0]);
    })
    return sortData;
  }

  componentDidMount() {
    this.setState({
      results: this.filterResults(this.props.results)
    });
  }

  render() {
    const { results } = this.state;

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