import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class FilterLink extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    const { store } = this.props;
    const props = this.props;
    const state = store.getState();

    return (
      <Button onClick={() => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })}
      disabled={props.filter === state.visibilityFilter}
      color={props.color}>
        { props.children }
      </Button>
    );
  }
}