import { connect } from 'react-redux';
import { Button } from 'reactstrap';
const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

const mapStateToFilterLinkProps = (
  state,
  ownProps
) => {
  return {
    disabled:
      ownProps.filter ===
      state.visibilityFilter,
    color: ownProps.color
  };
};
const mapDispatchToFilterLinkProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  };
};

const FilterLink = connect(
  mapStateToFilterLinkProps,
  mapDispatchToFilterLinkProps
)(Button);

export default FilterLink;