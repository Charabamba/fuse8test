import React from "react";
import { connect } from "react-redux";
import RenderItems from "../presentational/RenderItems";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
  }

  addOne() {
    const nextNumber = this.props.numbers.length + 1;
    this.props.dispatch({ type: "ADD_NUMBER", number: nextNumber });
  }

  render() {
    const { addOne } = this;
    const { numbers } = this.props;

    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="title">Welcome</h1>
        <h3>Mapped state :</h3>
        <button onClick={addOne}>
          Add 1
        </button>
        <ul>
          <RenderItems items={numbers} />
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { numbers: state.numbers };
}

export default connect(mapStateToProps)(Home);
