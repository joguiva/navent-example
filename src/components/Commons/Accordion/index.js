import React, { Component } from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import './style.scss';

class CustomAccordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open || false
    }
  }

  handleAccordion = () => {
    this.setState({
      open: !this.state.open
    })
  }

  componentDidMount() {
    this.setState({
      open: this.props.open
    })
  }

  render () {
    const {
      header,
      children
    } = this.props;

    const { open } = this.state;
    return (
      <div className="accordion">
        <div className="header" onClick={this.handleAccordion}>
          <span className="label">{header}</span>
          <span className="icon">
            {
              open ? <ExpandLess /> : <ExpandMore />
            }
          </span>
        </div>
        <div className={`content ${open ? 'content--entered' : 'content--hidden'}`}>
          {children}
        </div>
      </div>
    )
  }
}

export default CustomAccordion;