import React from "react";
import "./Style.css";

const Result = (props) => {
  return (
    <>
      <div className="container">
        {props.list.map((value, index) => {
          return (
            <div className="box">
              {index + 1}.Name: {value.name} | Dept. :{value.department} |
              Rating: {value.rating}
            </div>
          );
        })}
      </div>
      <div className="header">
        <button className="goback" onClick={props.goBack}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default Result;
