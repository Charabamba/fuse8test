import React from "react";

class RenderItems extends React.Component {
  constructor(props) {
    super(props);
    this.mapItems = this.mapItems.bind(this);
  }

  mapItems(item, index) {
    return (
      <li key={index} style={{ listStyleType: "none" }}>
        {item}
      </li>
    );
  }

  render() {
    const { items } = this.props;
    const { mapItems } = this;

    return (
      <div>
        {items.map(mapItems)}
      </div>
    );
  }
}

export default RenderItems;
