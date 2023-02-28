import React from "react";

//components
import Terminator from "../terminator/terminator.component";

const TerminatorList = ({ terminatorListProps }) => {
  return (
    <div>
      {terminatorListProps.map((item) => {
        return (
          <Terminator
            key={item.id}
            id={item.id}
            name={item.name}
            serialNumber={item.phone}
          />
        );
      })}
      ;
    </div>
  );
};

export default TerminatorList;
