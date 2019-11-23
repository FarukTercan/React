import React from 'react';

function HobbyList(props) {
  return (
    <div className="hobbies-main">
      <h1 className="hobby-list-header">{props.listHeader} </h1>
      <ul className="hobbies-list">
        {props.hobbies.map(hobby => {
          return <li className="list-item">{hobby}</li>;
        })}
      </ul>
    </div>
  );
}

export default HobbyList;
