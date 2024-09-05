import React from "react";

function Hello() {
  let myName = "Waqar";
  let number = 2352;
  let fullName = () => {
    return "Waqar Ali Baig";
  };

  return (
    <p>
      messageNo: {number}... I am your master {fullName()}
    </p>
  );
}

export default Hello;
