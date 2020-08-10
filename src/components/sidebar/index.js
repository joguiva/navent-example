import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import { getSearch, getFilter } from '../../redux/actions';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      operation: '0',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
  }

  handleChange(value) {
    this.setState({ value });

    this.props.getSearch(value);
  }
  
  handleOperation(operation) {
    this.setState({operation});
    
    this.props.getFilter(operation);
  }

  render() {
    const {
      value,
      operation
    } = this.state;

    return (
      <Page
        value={value}
        operation={operation}
        handleChange={this.handleChange}
        handleOperation={this.handleOperation}
      />
    );
  }
}

const mapDispatchToProps = {
  getSearch,
  getFilter,
}

export default connect(null, mapDispatchToProps)(Sidebar);