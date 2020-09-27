import React from "react";
import { connect } from "react-redux";
import { createName } from "./store/actions";

function GetName({ name, setName }) {
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>{name}</h1>
      <input value={name} onChange={handleChange} />
    </div>
  );
}

const mapDispatchToProps = {
  setName: createName,
};

const mapStateToProps = (state) => {
  return {
    name: state.Name.name,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetName);
