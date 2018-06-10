import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

class FilterLink extends Component {
  componentWillMount() {
    const { store } = this.context;
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    const { store } = this.context;
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

FilterLink.contextTypes = {
  store: PropTypes.object
};

export default FilterLink;