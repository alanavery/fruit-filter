import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const fruitItems = this.props.fruits.map((eachFruit, index) => {
      return <li>{eachFruit}</li>;
    });
    return (
      <div>
        <ul>{fruitItems}</ul>
      </div>
    );
  }
}

export default List;
