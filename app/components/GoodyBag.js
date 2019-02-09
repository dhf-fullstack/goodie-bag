import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCandies } from '../store';

class GoodyBag extends Component {

  componentDidMount() {
    this.props.fetchCandies();
  }

  render() {
    return (
      <ul> {
        this.props.candies.map(candy => (
          <li key={candy.id}>
            <span>{candy.name}</span>
            <span>{candy.description}</span>
            <span>{candy.quantity}</span>
            <img className="candyImg" src={`${candy.imageUrl}`} />
          </li>
        ))
      }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    candies: state.candies.candies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCandies: () => dispatch(fetchCandies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodyBag);
