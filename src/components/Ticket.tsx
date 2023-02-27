import React from "react";

const Ticket = (props: any) => {
  return (
    <p className="ticket mt-3 p-4 bg-blue-200 rounded-lg click:cursor-grabbing">
      {props.children}
    </p>
  );
};

export default Ticket;
