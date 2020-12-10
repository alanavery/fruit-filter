import React, { Component } from 'react';

import List from './List';
import Input from './Input';

class FruitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitsToDisplay: props.fruits,
      filterValue: ''
    };
  }

  handleFilterChange = (e) => {
    e.preventDefault();
    let filterValue = e.target.value;
    const filteredFruitList = this.props.fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(filterValue.toLowerCase());
    });
    this.setState({ fruitsToDisplay: filteredFruitList, filterValue });
  };

  render() {
    console.log(this.props.fruits);
    console.log(this.state.fruitsToDisplay);
    return (
      <div>
        <Input
          value={this.state.filterValue}
          onChange={this.handleFilterChange}
        />
        <List fruits={this.state.fruitsToDisplay} />
      </div>
    );
  }
}

export default FruitContainer;
