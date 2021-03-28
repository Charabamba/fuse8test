import React from "react";
import { connect } from "react-redux";
import AppTitle from "../app-title";
import AppFilter from "../app-filter";
import AppButton from "../app-button";
import HouseList from "../house-list";

class Home extends React.Component {
  render() {
    const { filter, houses } = this.props;

    return (
      <div>
        <AppTitle title={"Our Latest Developments"} />
        <AppFilter />
        <HouseList
          data={
            filter.toString().length < 4
              ? houses
              : houses.filter((house) => {
                  return house.title
                    .toLowerCase()
                    .includes(filter.toString().toLowerCase());
                })
          }
        />
        <AppButton buttonName={"See more"} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { filter: state.filter, houses: state.houses };
}

export default connect(mapStateToProps)(Home);
