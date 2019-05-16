import React from 'react';

// finish writing the DogList functional component here
function DogList(props) {
  return (
    <div>
      <ul>{props.dogs.map(el => <li key={el.id}>{el.name}</li>)}</ul>
    </div>
  );
}

export default DogList;
