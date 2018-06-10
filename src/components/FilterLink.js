import { connect } from 'react-redux';
import { Button } from 'reactstrap';

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
    onClick: () => dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: ownProps.filter
    })
  };
};

const FilterLink = connect(
  mapStateToFilterLinkProps,
  mapDispatchToFilterLinkProps
)(Button);

export default FilterLink;