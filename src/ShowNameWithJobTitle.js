import React from "react";
import { connect } from "react-redux";

function ShowNameWithJobTitle({ name, company }) {
  return <div>{`${name} works at ${company}`}</div>;
}

const mapStateToProps = (state) => {
  return {
    name: state.Name.name,
    company: state.Orders.company,
  };
};

export default connect(mapStateToProps)(ShowNameWithJobTitle);
