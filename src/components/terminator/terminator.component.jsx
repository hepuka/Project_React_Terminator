import React from "react";

// egy komponens a props változóban kapja meg a tulajdonságokat
//vagy destruktúrálással csak a props neveit adom meg: { id, name, serialNumber }

const Terminator = ({ id, name, serialNumber }) => {
  /*   így is meg lehet adni : const { id, name, serialNumber } = props; */

  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow">
      <img src={`https://robohash.org/${id}?size=180x180`} alt="Terminator" />
      <div>
        <h2>Név: {name}</h2>
        <p>SN: {serialNumber}</p>
      </div>
    </div>
  );
};

export default Terminator;
