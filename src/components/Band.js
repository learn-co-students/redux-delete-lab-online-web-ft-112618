import React, { Component } from 'react';

class Band extends Component {

  handleDelete = () => this.props.removeBand(this.props.band.id)

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li><button onClick={this.handleDelete}>DELETE</button>
      </div>
    );
  }
};

export default Band;
