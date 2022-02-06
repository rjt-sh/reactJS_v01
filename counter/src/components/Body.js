import React from "react";
import "./Cstyle.css";

class Body extends React.Component {
  state = { number: 0, color: "black" };

  colorCheck = () => {
    if (this.state.number > 0) {
      this.setState({ color: "green" });
    } else if (this.state.number < 0) {
      this.setState({ color: "red" });
    } else {
      this.setState({ color: "black" });
    }
  };

  onSub = () => {
    this.setState({ number: this.state.number - 1 });
    this.colorCheck();
  };
  onReset = () => {
    this.setState({ number: 0 });
    this.colorCheck();
  };
  onAdd = () => {
    this.setState({ number: this.state.number + 1 });
    this.colorCheck();
  };

  render() {
    return (
      <div className="main-content">
        <h2 className="number" style={{ color: this.state.color }}>
          {this.state.number}
        </h2>
        <div className="btn-content">
          <button onClick={this.onSub} type="button" className="btn btn-outline-secondary">
            -
          </button>
          <button onClick={this.onReset} type="button" className="btn btn-outline-secondary btn-1">
            reset
          </button>
          <button onClick={this.onAdd} type="button" className="btn btn-outline-secondary btn-2">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Body;
