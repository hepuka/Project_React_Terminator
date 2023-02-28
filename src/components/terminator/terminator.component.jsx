import React from "react";

// egy komponens a props változóban kapja meg a tulajdonságokat
const Terminator = (props) => {
  /*   így is meg lehet adni : const { id, name, serialNumber } = props; */

  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow">
      <img
        src={`https://robohash.org/${props.id}?size=180x180`}
        alt="Terminator"
      />
      <div>
        <h2>Név: {props.name}</h2>
        <p>SN: {props.serialNumber}</p>
      </div>
    </div>
  );
};

export default Terminator;
