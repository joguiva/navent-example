import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputText from '../Commons/inputText';
import './style.scss';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  onChangeValue(value) {
    this.setState({ value });
  }

  render() {
    const {
      handleChange,
    } = this.props;

    const {
      value
    } = this.state

    return (
      <div className="search">
        <InputText
          type="text"
          placeholder="Buscar por dirección"
          handleChange={(event) => {
            const newValue = event;

            this.onChangeValue(newValue);

          }}
          onEnter={(e) => handleChange(e)}
          label={true}
        />
        <button className="search-button" color="default" onClick={() => handleChange(value)}>
          <SearchIcon fontSize="small" color="primary"/>
        </button>
      </div>
    );
  }
}

export default Search;