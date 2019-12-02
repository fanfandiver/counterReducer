import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});
const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: "ADD" }),
  remove: () => dispatch({ type: "REMOVE" }),
  addten: () => dispatch({ type: "ADDTEN" }),
  removeten: () => dispatch({ type: "REMOVETEN" }),
  reset: () => dispatch({ type: "RESET" })
});
const Counter = ({ counter, add, remove, addten, removeten, reset }) => (
  <div>
    <p>{counter}</p>
    <button onClick={add}>add 1</button>
    <button onClick={remove}>remove 1</button>
    <button onClick={addten}>add 10</button>
    <button onClick={removeten}>remove 10</button>
    <button onClick={reset}>reset</button>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
