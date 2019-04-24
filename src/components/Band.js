import React, { Component } from 'react';

class Band extends Component {


  render() {
    return(
      <div>
        <li>{this.props.band.name}<button onClick={() => this.props.delete(this.props.band)}>DELETE</button></li>
        {console.log(this.props.band)}
      </div>
    );
  }
};

export default Band;
