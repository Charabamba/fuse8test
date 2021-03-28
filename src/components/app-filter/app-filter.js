import React from "react";
import "./app-filter.css";
import { connect } from "react-redux";

class AppFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.addOne = this.addOne.bind(this);
  }

  addOne(value) {
    this.props.dispatch({ type: "CHANGE_FILTER", filter: value });
  }

  render() {
    const { addOne } = this;
    const { filter } = this.props;

    return (
      <div className="container">
        <div className="filter-block">
          <label htmlFor="app-filter">Filter</label>
          <input
            onInput={(e) => {
              addOne(e.target.value);
            }}
            id="app-filter"
            type="text"
            value={filter}
            autoComplete="off"
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { filter: state.filter, houses: state.houses };
}

export default connect(mapStateToProps)(AppFilter);
