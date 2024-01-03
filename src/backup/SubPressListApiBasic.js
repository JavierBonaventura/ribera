import React from 'react';

const SubPressList = ({ year, presses }) => {
  return (
    <div>
      <h2>{`Current Year ${year}`}</h2>
      <ul>
        {presses.map((press) => (
          <li key={press.id}>
            <strong>{press.attributes.title}</strong> - {press.attributes.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubPressList;
