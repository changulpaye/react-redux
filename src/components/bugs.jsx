import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnresolvedBugs, loadBugs, resolveBug } from "../store/bugs";
class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.bugs.map((bug) => (
            <li key={bug.id}>
              {bug.description}
              <button
                disabled={bug.resolved}
                onClick={() => this.props.resolveBug(bug.id)}
              >
                Resolved
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
//bugs: state.entities.bugs.list
const mapStateToProps = (state) => ({
  bugs: getUnresolvedBugs(state),
});

// mapping action creator to props in our component.
const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id)),
});
// Connect create Container component under the hood.
// Presentation component is Bug component which we have created.
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
